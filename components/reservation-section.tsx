"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function ReservationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { t, locale } = useLanguage()

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

  const p = t.contact.form.placeholders

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="px-6 lg:px-12 py-24 lg:py-40"
      aria-label="Reservations"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <div className="lg:col-span-5">
            <span
              className={`text-xs tracking-[0.3em] uppercase text-muted-foreground block mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {t.contact.label}
            </span>
            <h2
              className={`font-serif text-5xl lg:text-7xl tracking-tight leading-[1] transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {t.contact.title.split(" ").slice(0, -2).join(" ")}{" "}
              <em className="text-terracotta">{t.contact.title.split(" ").slice(-2)[0]}</em>{" "}
              {t.contact.title.split(" ").slice(-1)[0]}
            </h2>

            <div
              className={`mt-12 flex flex-col gap-8 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-terracotta mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-sans text-foreground">{t.contact.address}</p>
                  <p className="text-sm text-muted-foreground">{t.contact.city}</p>
                  <p className="text-sm text-muted-foreground">{t.contact.neighbourhood}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} className="text-terracotta mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+498923238693" className="text-sm font-sans text-foreground hover:text-terracotta">
                    {t.contact.phone}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {locale === "de" ? "Für Reservierungen und Anfragen" : "For reservations and inquiries"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={18} className="text-terracotta mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:Info@la-pizzetta-tal.de" className="text-sm font-sans text-foreground hover:text-terracotta">
                    {t.contact.email}
                  </a>
                  <p className="text-sm text-muted-foreground">
                    {locale === "de" ? "Wir antworten innerhalb von 24 Stunden" : "We reply within 24 hours"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={18} className="text-terracotta mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-sans text-foreground">{t.contact.hours.friSat}</p>
                  <p className="text-sm font-sans text-foreground">{t.contact.hours.sunThu}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.contact.hours.note}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div
              className={`bg-charcoal p-8 lg:p-12 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-cream/60 text-sm mb-8 leading-relaxed">
                {t.contact.form.info}
              </p>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                      {t.contact.form.firstName}
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-cream/20"
                      placeholder={p.firstName}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                      {t.contact.form.lastName}
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-cream/20"
                      placeholder={p.lastName}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-cream/20"
                      placeholder={p.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 placeholder:text-cream/20"
                      placeholder={p.phone}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="date" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                      {t.contact.form.date}
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                      {t.contact.form.time}
                    </label>
                    <select
                      id="time"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 appearance-none"
                    >
                      <option value="" className="bg-charcoal">{p.selectTime}</option>
                      {t.contact.timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-charcoal">{slot}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                      {t.contact.form.guests}
                    </label>
                    <select
                      id="guests"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 appearance-none"
                    >
                      <option value="" className="bg-charcoal">{p.selectGuests}</option>
                      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                        <option key={n} value={n} className="bg-charcoal">
                          {n} {n === 1 ? p.guest : p.guests}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-cream/50 text-xs tracking-[0.15em] uppercase block mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full bg-transparent border-b border-cream/20 text-cream py-3 text-sm focus:outline-none focus:border-terracotta transition-colors duration-300 resize-none placeholder:text-cream/20"
                    placeholder={p.message}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-terracotta text-cream py-4 px-8 text-sm tracking-[0.2em] uppercase hover:bg-terracotta/90 transition-colors duration-300 self-start"
                >
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
