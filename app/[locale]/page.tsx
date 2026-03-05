import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MarqueeBanner } from "@/components/marquee-banner"
import { PhilosophySection } from "@/components/philosophy-section"
import { MenuSection } from "@/components/menu-section"
import { StorySection } from "@/components/story-section"
import { AtmosphereSection } from "@/components/atmosphere-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ReservationSection } from "@/components/reservation-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <MarqueeBanner />
      <PhilosophySection />
      <MenuSection />
      <StorySection />
      <AtmosphereSection />
      <TestimonialsSection />
      <ReservationSection />
      <Footer />
    </main>
  )
}
