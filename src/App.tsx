import './App.css'
import { useEffect, useState } from 'react'
import { AppHeader } from './app/components/app-header'
import { AppFooter } from './app/components/app-footer'
import { Hero } from './app/components/hero'
import { Projects } from './app/components/projects'
import { HowItWorks } from './app/components/how-it-works'
import { FAQ } from './app/components/faq'
import { FinalCTA } from './app/components/final-cta'
import { useReveal } from './hooks/use-reveal'
import { useParallax } from './hooks/use-parallax'

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

  return <div className="scroll-progress" style={{ width }} aria-hidden="true" />
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return <div className="cursor-glow" style={{ left: pos.x, top: pos.y }} aria-hidden="true" />
}

function App() {
  useReveal()
  useParallax()

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="site-root">
        <AppHeader />
        <main>
          <Hero />
          <div className="section-sep" />
          <Projects />
          <div className="section-sep" />
          <HowItWorks />
          <div className="section-sep" />
          <FAQ />
          <FinalCTA />
        </main>
        <AppFooter />
      </div>
    </>
  )
}

export default App
