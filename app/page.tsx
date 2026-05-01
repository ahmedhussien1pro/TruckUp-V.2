import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { AssessmentPreview } from "@/components/assessment-preview"
import { TracksSection } from "@/components/tracks-section"
import { ResultsPreview } from "@/components/results-preview"
import { RoadmapPreview } from "@/components/roadmap-preview"
import { PricingSection } from "@/components/pricing-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <AssessmentPreview />
      <TracksSection />
      <ResultsPreview />
      <RoadmapPreview />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
