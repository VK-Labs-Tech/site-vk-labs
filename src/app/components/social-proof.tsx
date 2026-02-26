import React from 'react'
import { useCounter } from '../../hooks/use-counter'

function AnimatedMetric({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const { count, elRef } = useCounter(target)
  return (
    <strong ref={elRef as React.RefObject<HTMLElement>}>
      {prefix}{count}{suffix}
    </strong>
  )
}

const tiltCard = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  el.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-5px)`
  el.style.transition = 'transform 0.08s linear, box-shadow 0.35s ease, border-color 0.35s ease'
}

const resetTiltCard = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget
  el.style.transform = ''
  el.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease'
}

export const SocialProof = () => {
  const logos = [
    'NeoClinic', 'FitHouse', 'Dental Prime', 'Studio Vitta',
    'NeoClinic', 'FitHouse', 'Dental Prime', 'Studio Vitta',
  ]

  const highlights = [
    { target: 32, prefix: '+', suffix: '%', text: 'aumento de agendamentos em 60 dias' },
    { target: 41, prefix: '-', suffix: '%', text: 'redução de faltas com lembretes automáticos' },
    { target: 98, prefix: '', suffix: '%', text: 'de satisfação dos clientes atendidos' },
    { target: 4, prefix: '', suffix: 'x', text: 'mais conversão com UX redesenhado' },
  ]

  return (
    <section className="social-proof" aria-label="Prova social">
      <div className="container">
        <p className="section-overline reveal">Empresas que confiam na VKLabs</p>

        <div className="marquee-wrapper reveal">
          <div className="marquee-track" role="list" aria-label="Clientes atendidos">
            {logos.map((logo, i) => (
              <span key={`${logo}-${i}`} role="listitem" className="logo-pill">
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="proof-grid">
          {highlights.map((item, i) => (
            <article
              key={item.text}
              className={`proof-card reveal reveal-delay-${i + 1}`}
              onMouseMove={tiltCard}
              onMouseLeave={resetTiltCard}
            >
              <AnimatedMetric target={item.target} prefix={item.prefix} suffix={item.suffix} />
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
