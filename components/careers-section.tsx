"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MapPin, Mail, Phone, ArrowRight, Users, Flame, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const benefitIcons = [MapPin, Users, Flame, Clock]

export function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const whyRef = useRef<HTMLElement>(null)
  const positionsRef = useRef<HTMLElement>(null)
  const applyRef = useRef<HTMLElement>(null)
  const [heroVisible, setHeroVisible] = useState(false)
  const [whyVisible, setWhyVisible] = useState(false)
  const [positionsVisible, setPositionsVisible] = useState(false)
  const [applyVisible, setApplyVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setHeroVisible(true),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setWhyVisible(true),
      { threshold: 0.15 }
    )
    if (whyRef.current) observer.observe(whyRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setPositionsVisible(true),
      { threshold: 0.1 }
    )
    if (positionsRef.current) observer.observe(positionsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setApplyVisible(true),
      { threshold: 0.2 }
    )
    if (applyRef.current) observer.observe(applyRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden"
        aria-label="Careers at La Pizzetta"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/chef.jpg"
            alt="La Pizzetta team - Join our kitchen"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="relative px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <span
              className={`text-xs tracking-[0.3em] uppercase text-content-inverse/60 block mb-4 transition-all duration-700 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {t.careers.label}
            </span>
            <h1
              className={`font-serif text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-content-inverse transition-all duration-700 delay-200 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.careers.title.split(t.careers.titleHighlight)[0]}
              <em className="text-terracotta">{t.careers.titleHighlight}</em>
            </h1>
            <p
              className={`mt-8 text-content-inverse/80 text-base lg:text-lg max-w-xl leading-relaxed transition-all duration-700 delay-400 ${
                heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.careers.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section
        ref={whyRef}
        className="px-6 lg:px-12 py-24 lg:py-40 text-content bg-cream"
        aria-label="Why join La Pizzetta"
      >
        <div className="max-w-7xl mx-auto">
          <span
            className={`text-xs tracking-[0.3em] uppercase text-content-muted block mb-6 transition-all duration-700 ${
              whyVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.careers.why.label}
          </span>
          <h2
            className={`font-serif text-5xl lg:text-7xl tracking-tight leading-[1.05] text-content transition-all duration-700 delay-200 ${
              whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.careers.why.title}
          </h2>
          <div
            className={`w-16 h-px bg-terracotta my-12 origin-left transition-all duration-700 delay-300 ${
              whyVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          />

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 transition-all duration-700 delay-400 ${
              whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t.careers.why.items.map((item, i) => {
              const Icon = benefitIcons[i]
              return (
                <div
                  key={item.title}
                  className="group border-l-2 border-terracotta/30 pl-8 py-2 hover:border-terracotta transition-colors duration-500"
                >
                  <Icon size={24} className="text-terracotta mb-4" strokeWidth={1.25} />
                  <h3 className="font-serif text-xl lg:text-2xl tracking-tight text-content mb-3">
                    {item.title}
                  </h3>
                  <p className="text-content/75 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        ref={positionsRef}
        className="px-6 lg:px-12 py-24 lg:py-40 bg-charcoal"
        aria-label="Open positions"
      >
        <div className="max-w-7xl mx-auto">
          <span
            className={`text-xs tracking-[0.3em] uppercase text-content-inverse/60 block mb-6 transition-all duration-700 ${
              positionsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.careers.positions.label}
          </span>
          <h2
            className={`font-serif text-5xl lg:text-7xl tracking-tight leading-[1.05] text-content-inverse transition-all duration-700 delay-200 ${
              positionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.careers.positions.title}
          </h2>

          <div
            className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-700 delay-400 ${
              positionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {t.careers.positions.roles.map((role) => (
              <article
                key={role.id}
                className="group bg-charcoal border border-cream/10 hover:border-cream/20 p-8 lg:p-10 transition-all duration-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-content-inverse tracking-tight">
                      {role.title}
                    </h3>
                    <p className="text-terracotta text-xs tracking-[0.2em] uppercase mt-2">
                      {role.type}
                    </p>
                  </div>
                  <a
                    href={`mailto:Info@la-pizzetta-tal.de?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                    className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-content-inverse/80 hover:text-terracotta transition-colors shrink-0"
                  >
                    {t.careers.positions.apply}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <p className="mt-4 text-content-inverse/60 text-sm leading-relaxed border-t border-cream/5 pt-6">
                  {role.short}
                </p>
              </article>
            ))}
          </div>

          <p
            className={`mt-12 text-content-inverse/50 text-sm italic transition-all duration-700 delay-500 ${
              positionsVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {t.careers.positions.noOpenings}
          </p>
        </div>
      </section>

      {/* How to Apply CTA */}
      <section
        ref={applyRef}
        className="px-6 lg:px-12 py-24 lg:py-40 text-content bg-cream"
        aria-label="How to apply"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <span
                className={`text-xs tracking-[0.3em] uppercase text-content-muted block mb-6 transition-all duration-700 ${
                  applyVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {t.careers.apply.label}
              </span>
              <h2
                className={`font-serif text-4xl lg:text-6xl tracking-tight leading-[1.1] text-content transition-all duration-700 delay-200 ${
                  applyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {t.careers.apply.title}
              </h2>
              <p
                className={`mt-8 text-content/80 text-base leading-relaxed max-w-md transition-all duration-700 delay-400 ${
                  applyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {t.careers.apply.text}
              </p>
            </div>

            <div
              className={`lg:col-span-6 lg:col-start-7 flex flex-col gap-6 transition-all duration-700 delay-500 ${
                applyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="mailto:Info@la-pizzetta-tal.de?subject=Job%20Application%20-%20La%20Pizzetta"
                className="group flex items-center gap-4 p-6 bg-charcoal text-content-inverse hover:bg-charcoal/95 transition-colors duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-terracotta/20 text-terracotta group-hover:bg-terracotta group-hover:text-cream transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-content-inverse/60">{t.careers.apply.email}</p>
                  <p className="font-medium text-content-inverse mt-1">{t.careers.apply.emailAddr}</p>
                </div>
                <ArrowRight size={20} className="text-terracotta group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-4 text-content/50 text-sm">
                <span className="uppercase tracking-wider">{t.careers.apply.or}</span>
                <div className="flex-1 h-px bg-content/20" />
              </div>

              <a
                href="tel:+498923238693"
                className="group flex items-center gap-4 p-6 border-2 border-content/20 text-content hover:border-terracotta hover:text-terracotta transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center border border-content/20 text-content group-hover:border-terracotta group-hover:text-terracotta transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs tracking-[0.2em] uppercase text-content-muted">{t.careers.apply.phone}</p>
                  <p className="font-medium text-content mt-1">+49 89 23238693</p>
                </div>
                <ArrowRight size={20} className="text-content/40 group-hover:text-terracotta group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                href="mailto:Info@la-pizzetta-tal.de?subject=Job%20Application%20-%20La%20Pizzetta"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-terracotta text-cream py-4 px-8 text-sm tracking-[0.2em] uppercase hover:bg-terracotta/90 transition-colors duration-300 w-full sm:w-auto"
              >
                {t.careers.apply.cta}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
