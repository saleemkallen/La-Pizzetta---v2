"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react"
import { usePathname, useRouter } from "next/navigation"
import type { Locale } from "@/lib/translations"
import { translations } from "@/lib/translations"

type Translations = (typeof translations)["en"]

const LanguageContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
} | null>(null)

export function LanguageProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? "en")
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("la-pizzetta-locale") as Locale | null
    if (saved && (saved === "en" || saved === "de")) {
      setLocaleState(saved)
    } else {
      const pathLocale = pathname?.startsWith("/de") ? "de" : pathname?.startsWith("/en") ? "en" : null
      if (pathLocale) setLocaleState(pathLocale)
    }
  }, [pathname])

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale)
      localStorage.setItem("la-pizzetta-locale", newLocale)
      const path = pathname?.replace(/^\/(en|de)/, "") || ""
      const base = path || ""
      const newPath = `/${newLocale}${base}` || (newLocale === "en" ? "/en" : "/de")
      router.push(newPath)
    },
    [pathname, router]
  )

  const t = translations[locale]

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
