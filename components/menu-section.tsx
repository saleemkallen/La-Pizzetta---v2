"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"

export function MenuSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()
  const pathname = usePathname()
  const basePath = pathname?.startsWith("/de") ? "/de" : "/en"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative py-24 lg:py-40"
      aria-label="Our Menu"
    >
      <div className="absolute inset-0 bg-charcoal" />

      <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24">
          <div>
            <span
              className={`text-xs tracking-[0.3em] uppercase text-cream/50 block mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {t.menu.label}
            </span>
            <h2
              className={`font-serif text-5xl lg:text-8xl xl:text-9xl tracking-tight text-cream leading-[0.95] transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.menu.title.split(t.menu.titleHighlight)[0]}
              <em className="text-terracotta">{t.menu.titleHighlight}</em>
              {t.menu.title.split(t.menu.titleHighlight)[1]}
            </h2>
          </div>
          <p
            className={`text-cream/60 text-sm lg:text-base max-w-sm mt-8 lg:mt-0 leading-relaxed transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.menu.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link
              href={`${basePath}/menu`}
              className="inline-flex items-center gap-4 group bg-cream/5 hover:bg-cream/10 border border-cream/20 px-8 py-6 transition-all duration-300"
            >
              <span className="text-cream font-sans text-sm tracking-[0.2em] uppercase">
                {t.menu.viewPdf}
              </span>
              <ArrowRight className="text-terracotta group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          {/* Menu Images - compact, properly aligned */}
          <div
            className={`lg:col-span-7 lg:col-start-6 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md lg:max-w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/pasta.jpg"
                  alt="La Pizzetta - Pizza and Pasta"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 220px"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/pollo.png"
                  alt="La Pizzetta - Chicken dish"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 35vw, 220px"
                />
              </div>
            </div>
            <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mt-3">
              {t.menu.seasonal}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
