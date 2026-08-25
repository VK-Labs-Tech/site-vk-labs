import { useEffect, useState } from 'react'
import { AppHeader } from './app/components/app-header'
import { AppFooter } from './app/components/app-footer'
import { Hero } from './app/components/hero'
import { SocialProof } from './app/components/social-proof'
import { Projects } from './app/components/projects'
import { Ponto } from './app/components/ponto'
import { Sistema2D } from './app/components/sistema-2d'
import { HowItWorks } from './app/components/how-it-works'
import { FAQ } from './app/components/faq'
import { FinalCTA } from './app/components/final-cta'
import { useReveal } from './hooks/use-reveal'

function ScrollProgress() {
  const [width, setWidth] = useState('0%')

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const progress = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100
      setWidth(`${Math.min(progress, 100)}%`)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-[200] h-0.5 bg-gradient-to-r from-brand via-accent to-warm transition-[width] duration-100"
      style={{ width }}
      aria-hidden="true"
    />
  )
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(94,216,255,0.32),transparent_68%)] opacity-[0.14] blur-3xl"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  )
}

function SectionSep() {
  return (
    <div
      className="mx-auto h-px w-full max-w-site bg-gradient-to-r from-transparent via-brand/12 to-transparent"
      aria-hidden="true"
    />
  )
}

function App() {
  useReveal()

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <div
        className="pointer-events-none fixed -top-64 -left-64 z-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(41,192,255,0.26),transparent_68%)] opacity-[0.22] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/3 -right-64 z-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,178,72,0.1),transparent_68%)] opacity-[0.22] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-0 left-1/4 z-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(64,125,255,0.12),transparent_68%)] opacity-[0.22] blur-3xl"
        aria-hidden="true"
      />
      <div className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_12%_-5%,rgba(35,109,145,0.24),transparent_30%),radial-gradient(circle_at_90%_35%,rgba(45,80,145,0.1),transparent_28%),linear-gradient(180deg,#071426_0%,#040b15_45%,#030811_100%)]">
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.42] [background-image:linear-gradient(rgba(94,216,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(94,216,255,0.028)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
          aria-hidden="true"
        />
        <div className="relative z-[1] flex min-h-screen flex-col">
          <AppHeader />
          <main className="flex-1">
            <Hero />
            <SectionSep />
            <SocialProof />
            <SectionSep />
            <Projects />
            <SectionSep />
            <Ponto />
            <SectionSep />
            <Sistema2D />
            <SectionSep />
            <HowItWorks />
            <SectionSep />
            <FAQ />
            <FinalCTA />
          </main>
          <AppFooter />
        </div>
      </div>
    </>
  )
}

export default App
