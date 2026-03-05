"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function AtmosphereSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

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
      id="atmosphere"
      className="relative py-24 lg:py-40 overflow-hidden text-content"
      aria-label="The Atmosphere"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-16">
        <span
          className={`text-xs tracking-[0.3em] uppercase text-content-muted block mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t.atmosphere.label}
        </span>
        <h2
          className={`font-serif text-5xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.95] text-content transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.atmosphere.title.split(" ").slice(0, -1).join(" ")}{" "}
          <em className="text-terracotta">{t.atmosphere.title.split(" ").slice(-1)[0]}</em>
        </h2>
      </div>

      <div
        className={`relative w-full aspect-[21/9] transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
        }`}
      >
        <Image
          src="/images/hero.jpg"
          alt="La Pizzetta dining atmosphere - Pizza, Pasta, Bar"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="px-6 lg:px-12 max-w-7xl mx-auto mt-16 lg:mt-24">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.atmosphere.features.map((feature) => (
            <div key={feature.title} className="group">
              <div className="w-8 h-px bg-terracotta mb-6 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-serif text-2xl tracking-tight text-content mb-4">
                {feature.title}
              </h3>
              <p className="text-content/80 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
