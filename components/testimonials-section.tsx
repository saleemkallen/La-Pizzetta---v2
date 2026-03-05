"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function TestimonialsSection() {
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
      className="bg-charcoal py-24 lg:py-40"
      aria-label="Guest Testimonials"
    >
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <span
            className={`text-xs tracking-[0.3em] uppercase text-cream/50 block mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.testimonials.label}
          </span>
          <h2
            className={`font-serif text-4xl lg:text-6xl tracking-tight text-cream transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.testimonials.title.split(" ").slice(0, -2).join(" ")}{" "}
            <em className="text-terracotta">{t.testimonials.title.split(" ").slice(-2)[0]}</em>{" "}
            {t.testimonials.title.split(" ").slice(-1)[0]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
          {t.testimonials.items.map((testimonial, i) => (
            <div
              key={testimonial.author}
              className={`bg-charcoal p-8 lg:p-12 flex flex-col justify-between transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150 + 400}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <blockquote className="text-cream/80 text-base lg:text-lg leading-relaxed mb-8 font-serif italic">
                &quot;{testimonial.text}&quot;
              </blockquote>
              <div>
                <p className="text-cream text-sm font-sans tracking-wide">
                  {testimonial.author}
                </p>
                <p className="text-cream/40 text-xs tracking-[0.15em] uppercase mt-1">
                  {testimonial.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
