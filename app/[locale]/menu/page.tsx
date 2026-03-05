import { Navigation } from "@/components/navigation"
import { MenuPdfSection } from "@/components/menu-pdf-section"
import { Footer } from "@/components/footer"

export default function MenuPage() {
  return (
    <main>
      <Navigation />
      <MenuPdfSection />
      <Footer variant="menu" />
    </main>
  )
}
