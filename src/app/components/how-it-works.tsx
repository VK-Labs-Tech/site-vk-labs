import React from 'react'

const tiltCard = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5
  el.style.transform = `perspective(700px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-6px)`
  el.style.transition = 'transform 0.08s linear, box-shadow 0.35s ease, border-color 0.35s ease'
}

const resetTiltCard = (e: React.MouseEvent<HTMLElement>) => {
  const el = e.currentTarget
  el.style.transform = ''
  el.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease'
}

export const HowItWorks = () => {
  const steps = [
    {
      icon: '🔍',
      title: 'Diagnóstico estratégico',
      description: 'Mapeamos operação, metas e oportunidades para priorizar o que traz resultado rápido.',
    },
    {
      icon: '⚡',
      title: 'Entrega com qualidade',
      description: 'Desenvolvemos em ciclos curtos com validação contínua de UX, performance e negócio.',
    },
    {
      icon: '📈',
      title: 'Escala orientada por dados',
      description: 'Monitoramos métricas, evoluímos o produto e aceleramos crescimento com previsibilidade.',
    },
  ]

  return (
    <section id="process" className="how-it-works" aria-label="Como funciona">
      <div className="container">
        <p className="section-overline reveal">Como funciona</p>
        <h2 className="gradient-heading reveal reveal-delay-1">Do diagnóstico ao crescimento em 3 etapas</h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`step-card reveal reveal-scale reveal-delay-${index + 1}`}
              onMouseMove={tiltCard}
              onMouseLeave={resetTiltCard}
            >
              <div className="step-number-bg">{String(index + 1).padStart(2, '0')}</div>
              <div className="step-icon" aria-hidden="true">{step.icon}</div>
              <span className="step-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
