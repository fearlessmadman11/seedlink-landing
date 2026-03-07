import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhySeedLink } from "@/components/why-seedlink"
import { WhoItsFor } from "@/components/who-its-for"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhySeedLink />
        <WhoItsFor />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
