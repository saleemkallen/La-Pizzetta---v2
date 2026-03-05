"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"

const MOUSE_TOP_ZONE = 120
const SCROLL_TOP_THRESHOLD = 80

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { t, locale, setLocale } = useLanguage()
  const pathname = usePathname()
  const basePath = pathname?.startsWith("/de") ? "/de" : "/en"

  const navLinks = [
    { label: t.nav.home, href: basePath },
    { label: t.nav.menu, href: `${basePath}/menu` },
    { label: t.nav.about, href: `${basePath}/about` },
    { label: t.nav.careers, href: `${basePath}/careers` },
  ]

  // About and contact pages have light background at top - nav needs scrolled styling for visibility
  const needsLightNavStyle = pathname?.includes("/about") || pathname?.includes("/contact")

  const updateNavState = () => {
    const scrollY = window.scrollY
    setIsScrolled(scrollY > 60)
    if (scrollY < SCROLL_TOP_THRESHOLD || window.innerWidth < 1024) {
      setNavVisible(true)
    }
  }

  useEffect(() => {
    setMounted(true)
    updateNavState()
  }, [])

  useEffect(() => {
    const handleScroll = () => updateNavState()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return // Always visible on mobile
      const scrollY = window.scrollY
      const atTopOfPage = scrollY < SCROLL_TOP_THRESHOLD
      const mouseInTopZone = e.clientY < MOUSE_TOP_ZONE
      setNavVisible(atTopOfPage || mouseInTopZone)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mounted])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Invisible trigger zone - move mouse to top to reveal nav (disabled when mobile menu is open) */}
      <div
        className={`fixed top-0 left-0 right-0 h-8 z-[99] ${navVisible || isMobileMenuOpen ? "pointer-events-none" : "pointer-events-auto"}`}
        onMouseEnter={() => setNavVisible(true)}
        aria-hidden
      />
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isMobileMenuOpen
            ? "bg-transparent py-6 lg:py-8 shadow-none"
            : isScrolled || needsLightNavStyle
            ? "bg-cream/98 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12">
          <Link href={basePath} className="relative z-10 flex items-center gap-2">
            <Image
              src="/images/Logo.png"
              alt="La Pizzetta"
              width={140}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.15em] uppercase transition-colors duration-500 hover:opacity-70 ${
                  isScrolled || needsLightNavStyle ? "text-content" : "text-content-inverse"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center border border-current/40 rounded overflow-hidden">
              <button
                onClick={() => setLocale("en")}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-colors ${
                  locale === "en"
                    ? "bg-terracotta text-cream"
                    : isScrolled || needsLightNavStyle
                    ? "text-content hover:bg-content/10"
                    : "text-content-inverse hover:bg-content-inverse/10"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale("de")}
                className={`px-4 py-2 text-xs tracking-wider uppercase transition-colors ${
                  locale === "de"
                    ? "bg-terracotta text-cream"
                    : isScrolled || needsLightNavStyle
                    ? "text-content hover:bg-content/10"
                    : "text-content-inverse hover:bg-content-inverse/10"
                }`}
              >
                DE
              </button>
            </div>
            <Link
              href={`${basePath}/contact`}
              className={`text-sm tracking-[0.15em] uppercase px-6 py-3 border transition-all duration-500 hover:bg-terracotta hover:border-terracotta hover:text-cream ${
                isScrolled || needsLightNavStyle
                  ? "border-content text-content"
                  : "border-content-inverse/60 text-content-inverse"
              }`}
            >
              {t.nav.reserve}
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-10 transition-colors duration-500 ${
              isMobileMenuOpen ? "text-content-inverse" : isScrolled || needsLightNavStyle ? "text-content" : "text-content-inverse"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - z-[99] sits below nav (z-[100]) so close button stays on top */}
      <div
        className={`fixed inset-0 z-[99] bg-charcoal transition-all duration-700 flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => {
          const delay = isMobileMenuOpen ? `${i * 100 + 200}ms` : "0ms"
          return (
            <Link
              key={link.href + link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-content-inverse font-serif text-4xl tracking-tight hover:text-terracotta"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${delay}, transform 0.5s ease ${delay}, color 0.3s ease`,
              }}
            >
              {link.label}
            </Link>
          )
        })}
        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={() => setLocale("en")}
            className={`px-4 py-2 text-sm uppercase ${locale === "en" ? "text-terracotta font-bold" : "text-content-inverse/70"}`}
          >
            EN
          </button>
          <button
            onClick={() => setLocale("de")}
            className={`px-4 py-2 text-sm uppercase ${locale === "de" ? "text-terracotta font-bold" : "text-content-inverse/70"}`}
          >
            DE
          </button>
        </div>
        <Link
          href={`${basePath}/contact`}
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 text-sm tracking-[0.15em] uppercase px-8 py-3 border border-content-inverse/40 text-content-inverse hover:bg-terracotta hover:border-terracotta transition-all duration-300"
        >
          {t.nav.reserve}
        </Link>
      </div>
    </>
  )
}
