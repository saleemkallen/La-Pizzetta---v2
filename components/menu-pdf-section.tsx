"use client"

import { useLanguage } from "@/components/language-provider"
import { FileText, Download } from "lucide-react"

export function MenuPdfSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen py-24 lg:py-32" aria-label="Menu PDF">
      <div className="absolute inset-0 bg-charcoal" />
      <div className="relative px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-cream/50 block mb-4">
            {t.menu.label}
          </span>
          <h1 className="font-serif text-5xl lg:text-7xl tracking-tight text-cream leading-tight">
            {t.menu.title}
          </h1>
          <p className="text-cream/60 text-base lg:text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            {t.menu.description}
          </p>
        </div>

        {/* PDF Viewer Container - Aesthetic card-style design */}
        <div className="bg-cream/5 rounded-2xl overflow-hidden border border-cream/10 shadow-2xl">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-6 py-4 bg-charcoal/80 border-b border-cream/10">
            <div className="flex items-center gap-3">
              <FileText className="text-terracotta" size={24} />
              <span className="text-cream font-sans text-sm tracking-wide">
                La Pizzetta - {t.menu.title}
              </span>
            </div>
            <a
              href="/Menu_DE.pdf"
              download="La-Pizzetta-Menu.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-terracotta text-cream text-sm tracking-[0.1em] uppercase hover:bg-terracotta/90 transition-colors duration-300 rounded"
            >
              <Download size={18} />
              {t.menu.downloadPdf}
            </a>
          </div>

          {/* PDF Embed - Aesthetic frame with iframe for best compatibility */}
          <div className="relative w-full aspect-[8.5/11] min-h-[600px] lg:min-h-[800px] bg-cream/5 rounded-b-2xl overflow-hidden">
            <iframe
              src="/Menu_DE.pdf#toolbar=1&navpanes=1"
              className="absolute inset-0 w-full h-full"
              title={t.menu.viewPdf}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
