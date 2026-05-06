import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Narrative } from "@/components/narrative"
import { BuildOnce } from "@/components/build-once"
import { ForDevelopers } from "@/components/for-developers"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Narrative />
        <BuildOnce />
        <ForDevelopers />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}
