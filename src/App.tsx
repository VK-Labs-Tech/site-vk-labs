import { AppHeader } from './app/components/app-header'
import { AppFooter } from './app/components/app-footer'
import { Hero } from './app/components/hero'
import { SocialProof } from './app/components/social-proof'
import { About } from './app/components/about'
import { Projects } from './app/components/projects'
import { Ponto } from './app/components/ponto'
import { Sistema2D } from './app/components/sistema-2d'
import { DocFlow } from './app/components/docflow'
import { CobraFlow } from './app/components/cobraflow'
import { HowItWorks } from './app/components/how-it-works'
import { FAQ } from './app/components/faq'
import { FinalCTA } from './app/components/final-cta'
import { useReveal } from './hooks/use-reveal'

function App() {
  useReveal()

  return (
    <div className="relative isolate flex min-h-screen flex-col bg-surface">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(ellipse_at_top,rgba(78,196,232,0.09),transparent_58%)]"
        aria-hidden="true"
      />
      <div className="relative z-[1] flex min-h-screen flex-col">
        <AppHeader />
        <main className="flex-1">
          <Hero />
          <SocialProof />
          <About />
          <Projects />
          <Ponto />
          <Sistema2D />
          <DocFlow />
          <CobraFlow />
          <HowItWorks />
          <FAQ />
          <FinalCTA />
        </main>
        <AppFooter />
      </div>
    </div>
  )
}

export default App
