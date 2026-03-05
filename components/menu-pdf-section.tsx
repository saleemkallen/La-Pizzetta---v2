"use client"

import { useLanguage } from "@/components/language-provider"
import { FileText, Download, ExternalLink } from "lucide-react"

const PDF_URL = "/Menu_DE.pdf"

export function MenuPdfSection() {
  const { t } = useLanguage()
  const titleParts = t.menu.title.split(t.menu.titleHighlight)

  return (
    <section className="relative min-h-screen" aria-label="Menu PDF">
      {/* Thick hero block - solid #011305fa where "Menu" is written */}
      <div
        className="relative pt-8 sm:pt-12 lg:pt-20 pb-10 sm:pb-14 lg:pb-24"
        style={{ backgroundColor: "var(--theme-dark)" }}
      >
        <div className="px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          <span className="text-[0.65rem] sm:text-xs tracking-[0.35em] uppercase text-content-inverse/50 block mb-2 sm:mb-3 lg:mb-4">
            {t.menu.label}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-content-inverse leading-tight">
            {titleParts[0]}
            <em className="text-terracotta font-normal not-italic">{t.menu.titleHighlight}</em>
            {titleParts[1]}
          </h1>
          <p className="text-content-inverse/60 text-sm sm:text-base lg:text-lg max-w-2xl mt-3 sm:mt-4 lg:mt-6 leading-relaxed">
            {t.menu.description}
          </p>
        </div>
      </div>

      {/* Dramatic gradient section - flows from hero down */}
      <div className="relative min-h-[60vh] pb-8 sm:pb-12 lg:pb-20" style={{ background: "var(--menu-gradient)" }}>
        <div className="relative px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto -mt-4 sm:-mt-6 lg:-mt-8">
          {/* PDF Viewer Container - Mobile-optimized, scrollable */}
          <div className="bg-cream/5 rounded-xl sm:rounded-2xl overflow-hidden border border-cream/10 shadow-2xl">
          {/* Toolbar - stacked on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-3 sm:px-6 py-3 sm:py-4 bg-charcoal/90 border-b border-cream/10">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <FileText className="text-terracotta flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" aria-hidden />
              <span className="text-content-inverse font-sans text-xs sm:text-sm tracking-wide truncate">
                La Pizzetta – {t.menu.title}
              </span>
            </div>
            <div className="flex flex-row flex-wrap gap-2">
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-cream/10 text-content-inverse text-xs sm:text-sm tracking-[0.1em] uppercase hover:bg-cream/20 transition-colors duration-300 rounded border border-cream/20 min-h-[44px] sm:min-h-0 touch-manipulation"
              >
                <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="sm:hidden">{t.menu.openInNewTab}</span>
                <span className="hidden sm:inline">{t.menu.viewPdf}</span>
              </a>
              <a
                href={PDF_URL}
                download="La-Pizzetta-Menu.pdf"
                className="flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-terracotta text-content-inverse text-xs sm:text-sm tracking-[0.1em] uppercase hover:bg-terracotta/90 transition-colors duration-300 rounded min-h-[44px] sm:min-h-0 touch-manipulation"
              >
                <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                {t.menu.downloadPdf}
              </a>
            </div>
          </div>

          {/* Scrollable PDF container - we scroll the container, not the PDF; works on all browsers */}
          <div
            className="rounded-b-xl sm:rounded-b-2xl overflow-x-hidden overflow-y-auto overscroll-contain bg-cream/5 menu-pdf-scroll"
            style={{
              height: "min(calc(100svh - 380px), 650px)",
              minHeight: "min(45vh, 320px)",
              WebkitOverflowScrolling: "touch",
              touchAction: "pan-y pinch-zoom",
            }}
          >
            {/* Tall iframe - we scroll the outer container to view full PDF; works on all browsers */}
            <iframe
              src={`${PDF_URL}#toolbar=0&navpanes=0&scrollbar=0`}
              className="block border-0 w-full"
              style={{
                minHeight: "2500px",
                height: "2500px",
              }}
              title={t.menu.viewPdf}
            />
          </div>
          </div>
        </div>

        {/* Hint for when embedded PDF doesn't scroll (e.g. iOS Safari) */}
        <p className="mt-4 sm:mt-5 px-4 text-content-inverse/50 text-[0.7rem] sm:text-xs text-center max-w-md mx-auto">
          {t.menu.mobileHint}
        </p>
      </div>
    </section>
  )
}
