import './App.css'
import { AppHeader } from './app/components/app-header'
import { AppFooter } from './app/components/app-footer'
import { Hero } from './app/components/hero'
import { SocialProof } from './app/components/social-proof'
import { HowItWorks } from './app/components/how-it-works'
import { FAQ } from './app/components/faq'
import { FinalCTA } from './app/components/final-cta'

function App() {
  return (
    <div className="site-root">
      <AppHeader />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <AppFooter />
    </div>
  )
}

export default App
