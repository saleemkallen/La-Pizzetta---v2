"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="story"
      className="px-6 lg:px-12 py-24 lg:py-40 text-charcoal"
      aria-label="Our Story"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 lg:mb-24">
          <span
            className={`text-xs tracking-[0.3em] uppercase text-charcoal/70 block mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.story.label}
          </span>
          <h2
            className={`font-serif text-5xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.95] text-charcoal transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t.story.title.split(" ").slice(0, -1).join(" ")}{ " "}
            <em className="text-terracotta">{t.story.title.split(" ").slice(-1)[0]}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-24">
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/interior.jpg"
                alt="La Pizzetta interior - Hackenviertel Munich"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </div>

          <div
            className={`lg:col-span-5 flex flex-col justify-end transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative aspect-square overflow-hidden mb-8">
              <Image
                src="/images/wine.jpg"
                alt="Italian wine at La Pizzetta bar"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <blockquote className="font-serif text-2xl lg:text-3xl text-charcoal leading-snug tracking-tight italic">
              {t.story.quote}
            </blockquote>
            <p className="text-charcoal/70 text-sm mt-4 tracking-wide">
              — {t.story.author}
            </p>
          </div>
        </div>

        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-px bg-border transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.story.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background py-10 lg:py-14 flex flex-col items-center text-center"
            >
              <span className="font-serif text-2xl lg:text-4xl text-charcoal tracking-tight">
                {stat.number}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-charcoal/70 mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
