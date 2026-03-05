"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"

type FooterVariant = "default" | "menu"

export function Footer({ variant = "default" }: { variant?: FooterVariant }) {
  const { t, locale } = useLanguage()
  const pathname = usePathname()
  const basePath = pathname?.startsWith("/de") ? "/de" : "/en"

  return (
    <footer
      className={`px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-24 ${
        variant === "menu"
          ? "bg-menu-footer border-t border-cream/10"
          : "bg-charcoal"
      }`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <h2 className="font-serif text-content-inverse text-[clamp(2.5rem,7vw,10rem)] leading-[0.9] tracking-tight">
            <span className="text-la">La</span>{" "}
            <em>Pizzetta</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-content-inverse/40 mb-4">
              {t.footer.visit}
            </p>
            <p className="text-content-inverse/70 text-sm leading-relaxed">
              Tal 4<br />
              80331 Munich<br />
              Germany
            </p>
            <p className="text-content-inverse/50 text-xs mt-2">{t.contact.neighbourhood}</p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-content-inverse/40 mb-4">
              {t.footer.hours}
            </p>
            <p className="text-content-inverse/70 text-sm leading-relaxed">
              {t.contact.hours.friSat}<br />
              {t.contact.hours.sunThu}<br />
              <span className="text-content-inverse/50">{t.contact.hours.note}</span>
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-content-inverse/40 mb-4">
              {t.footer.contact}
            </p>
            <p className="text-content-inverse/70 text-sm leading-relaxed">
              <a href="tel:+498923238693" className="hover:text-terracotta transition-colors">+49 89 23238693</a>
              <br />
              <a href="mailto:Info@la-pizzetta-tal.de" className="hover:text-terracotta transition-colors">
                Info@la-pizzetta-tal.de
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-content-inverse/40 mb-4">
              {t.footer.follow}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-content-inverse/70 hover:text-terracotta transition-colors duration-300"
                aria-label="Follow La Pizzetta on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 sm:pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <p className="text-content-inverse/30 text-xs tracking-wider">
              {t.footer.copyright}
            </p>
            <p className="text-content-inverse/20 text-xs mt-2">{t.footer.directors}</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://ristorante-lapizzetta.com/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-content-inverse/30 text-xs tracking-wider hover:text-content-inverse/60 transition-colors duration-300"
            >
              {t.footer.privacy}
            </a>
            <Link href={`${basePath}/impressum`} className="text-content-inverse/30 text-xs tracking-wider hover:text-content-inverse/60 transition-colors duration-300">
              {t.footer.impressum}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
