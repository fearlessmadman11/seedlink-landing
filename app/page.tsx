import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { IntegrationsSection } from "@/components/integrations-section"
import { WhySeedLink } from "@/components/why-seedlink"
import { DeveloperSection } from "@/components/developer-section"
import { WhoItsFor } from "@/components/who-its-for"
import { StatusSection } from "@/components/status-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <IntegrationsSection />
        <WhySeedLink />
        <DeveloperSection />
        <WhoItsFor />
        <StatusSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
