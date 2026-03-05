import React from "react"
import { LanguageProvider } from "@/components/language-provider"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = locale === "de" ? "de" : "en"

  return (
    <LanguageProvider key={validLocale} initialLocale={validLocale}>
      {children}
    </LanguageProvider>
  )
}
