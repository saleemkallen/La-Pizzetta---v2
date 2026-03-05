import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ThemePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-24 px-6">
        <h1 className="font-serif text-4xl text-foreground mb-8">Theme colours</h1>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-2">
            <div
              className="w-32 h-32 rounded-lg border border-foreground/20"
              style={{ backgroundColor: "var(--theme-white)" }}
            />
            <span className="text-sm text-foreground">--theme-white</span>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="w-32 h-32 rounded-lg border border-foreground/20"
              style={{ backgroundColor: "var(--theme-accent)" }}
            />
            <span className="text-sm text-foreground">--theme-accent</span>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="w-32 h-32 rounded-lg border border-foreground/20"
              style={{ backgroundColor: "var(--theme-dark)" }}
            />
            <span className="text-sm text-foreground">--theme-dark</span>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="w-32 h-32 rounded-lg border border-foreground/20"
              style={{ backgroundColor: "var(--theme-la)" }}
            />
            <span className="text-sm text-foreground">--theme-la (&quot;La&quot;)</span>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="w-32 h-32 rounded-lg border border-foreground/20"
              style={{ backgroundColor: "var(--content)" }}
            />
            <span className="text-sm text-foreground">--content (text on light)</span>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="w-32 h-32 rounded-lg border border-foreground/20"
              style={{ backgroundColor: "var(--content-inverse)" }}
            />
            <span className="text-sm text-foreground">--content-inverse (text on dark)</span>
          </div>
          <div className="flex flex-col gap-2">
            <div
              className="w-32 h-32 rounded-lg border border-foreground/20"
              style={{ backgroundColor: "var(--content-muted)" }}
            />
            <span className="text-sm text-foreground">--content-muted (labels)</span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
