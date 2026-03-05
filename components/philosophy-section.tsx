"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-6 lg:px-12 py-24 lg:py-40 text-charcoal"
      aria-label="Our Philosophy"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span
              className={`text-xs tracking-[0.3em] uppercase text-charcoal/70 block mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.philosophy.label}
            </span>
            <h2
              className={`font-serif text-4xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-charcoal transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.philosophy.title.split(t.philosophy.titleHighlight)[0]}
              <em className="text-terracotta">{t.philosophy.titleHighlight}</em>
              {t.philosophy.title.split(t.philosophy.titleHighlight)[1]}
            </h2>
            <div
              className={`w-16 h-px bg-terracotta my-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{ transformOrigin: "left" }}
            />
            <p
              className={`text-charcoal/80 text-base lg:text-lg leading-relaxed max-w-md transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.philosophy.p1}
            </p>
            <p
              className={`text-charcoal/80 text-base lg:text-lg leading-relaxed max-w-md mt-6 transition-all duration-700 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.philosophy.p2}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div
              className={`relative aspect-[3/4] overflow-hidden transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <Image
                src="/images/chef.jpg"
                alt="La Pizzetta - Authentic Italian cuisine in Munich"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="relative w-24 h-12">
                <Image
                  src="/images/lapizzetta.png"
                  alt="La Pizzetta"
                  fill
                  className="object-contain object-left"
                  sizes="96px"
                />
              </div>
              <div className="w-8 h-px bg-terracotta" />
              <p className="text-xs tracking-[0.2em] uppercase text-charcoal/70">
                Pizza · Pasta · Bar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
