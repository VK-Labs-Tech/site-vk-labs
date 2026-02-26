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

export const Testimonials = () => {
  const items = [
    {
      name: 'Camila Rocha',
      role: 'Diretora — NeoClinic',
      initials: 'CR',
      quote: 'A VKLabs entregou o sistema de agendamento em 5 semanas. Hoje temos 40% menos faltas e a equipe respira mais.',
      stars: 5,
    },
    {
      name: 'Rafael Duarte',
      role: 'Fundador — FitHouse',
      initials: 'RD',
      quote: 'O redesign do nosso app triplicou o engajamento. Uma equipe que realmente entende o negócio, não só o código.',
      stars: 5,
    },
    {
      name: 'Ana Vitória',
      role: 'CEO — Studio Vitta',
      initials: 'AV',
      quote: 'Desde o lançamento do site novo, nossas conversões online subiram 32%. Parceria séria, entrega impecável.',
      stars: 5,
    },
  ]

  return (
    <section className="testimonials" aria-label="Depoimentos">
      <div className="container">
        <p className="section-overline reveal">Depoimentos</p>
        <h2 className="gradient-heading reveal reveal-delay-1">O que nossos clientes dizem</h2>

        <div className="testi-grid">
          {items.map((item, i) => (
            <article
              key={item.name}
              className={`testi-card reveal reveal-scale reveal-delay-${i + 1}`}
              onMouseMove={tiltCard}
              onMouseLeave={resetTiltCard}
            >
              <div className="star-row" aria-label={`${item.stars} estrelas`}>
                {'★'.repeat(item.stars)}
              </div>
              <p className="testi-quote">"{item.quote}"</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">{item.initials}</div>
                <div className="testi-author-info">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
