"use client"

import { useLanguage } from "@/components/language-provider"

export function MarqueeBanner() {
  const { t } = useLanguage()
  const items = t.marquee.items

  return (
    <div className="bg-charcoal py-4 overflow-hidden" aria-hidden="true">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-content-inverse/70 text-xs tracking-[0.25em] uppercase font-sans">
              {item}
            </span>
            <span className="text-terracotta text-lg">{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
