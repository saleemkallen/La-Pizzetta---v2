import { Navigation } from "@/components/navigation"
import { PhilosophySection } from "@/components/philosophy-section"
import { StorySection } from "@/components/story-section"
import { AtmosphereSection } from "@/components/atmosphere-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <PhilosophySection />
      <StorySection />
      <AtmosphereSection />
      <Footer />
    </main>
  )
}
