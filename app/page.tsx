import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { BuildOnce } from "@/components/build-once"
import { ForDevelopers } from "@/components/for-developers"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CustomIntegrationsCallout } from "@/components/custom-integrations-callout"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BuildOnce />
        <HowItWorksSection />
        <ForDevelopers />
        <CustomIntegrationsCallout />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
