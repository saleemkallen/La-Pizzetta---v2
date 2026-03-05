"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden" aria-label="Welcome to La Pizzetta">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="La Pizzetta - Authentic Italian Restaurant in Munich"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      <div className="relative h-full flex flex-col justify-end px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="overflow-hidden">
          <h1
            className={`font-serif leading-[0.9] tracking-tight transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <span className="block text-[clamp(3.5rem,12vw,14rem)] text-terracotta">
              La
            </span>
            <span className="block text-[clamp(3.5rem,12vw,14rem)] text-cream">
              Pizzetta
            </span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-8 gap-6">
          <p
            className={`text-cream/80 text-base lg:text-lg tracking-wide max-w-md leading-relaxed transition-all duration-1000 delay-700 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {t.hero.subtitle}
          </p>

          <div
            className={`flex items-center gap-6 transition-all duration-1000 delay-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="text-cream/50 text-xs tracking-[0.3em] uppercase">
              {t.hero.scroll}
            </span>
            <div className="w-px h-12 bg-cream/30 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
