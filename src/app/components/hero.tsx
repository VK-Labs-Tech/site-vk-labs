import React, { useState } from 'react'
import heroImg from '../../assets/hero-plate.svg'

export const Hero: React.FC = () => {
  const slides = [
    {
      kicker: 'VKLabs Tech',
      titlePrefix: 'Transformamos ideias em',
      accent: 'produtos digitais',
      description: 'Criamos experiências web e mobile com execução rápida, arquitetura sólida e foco real em resultado.',
      tags: ['Entrega ágil', 'Equipe sênior', 'UX profissional'],
    },
    {
      kicker: 'Serviço 01',
      titlePrefix: 'Desenvolvimento',
      accent: 'Web & Mobile',
      description: 'Sites, plataformas e apps com alta performance, manutenção fácil e experiência premium.',
      tags: ['React e APIs', 'Escalabilidade', 'Qualidade contínua'],
    },
    {
      kicker: 'Serviço 02',
      titlePrefix: 'Plataforma',
      accent: 'SaaS de agendamento',
      description: 'Agenda online, confirmação automática, gestão de profissionais e painel para operação diária.',
      tags: ['Lembretes automáticos', 'Gestão de equipe', 'Relatórios de uso'],
    },
    {
      kicker: 'Serviço 03',
      titlePrefix: 'Design',
      accent: 'UX/UI estratégico',
      description: 'Design orientado a métricas para melhorar retenção, clareza da jornada e percepção de valor.',
      tags: ['Interface clean', 'Foco em conversão', 'Consistência visual'],
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }
  const translateX = -(activeIndex * 100)

  return (
    <section id="services" className="h-scroll-section">
      <div className="h-scroll-sticky">
        <div className="h-scroll-track" style={{ transform: `translate3d(${translateX}vw, 0, 0)` }}>
          {slides.map((slide, index) => (
            <article key={slide.accent} className="h-slide">
              <div className="container h-slide-inner">
                <div className="hero-copy">
                  <div className="kicker">{slide.kicker}</div>
                  <h1>
                    {slide.titlePrefix}{' '}
                    <span className="accent carousel-title">{slide.accent}</span>
                  </h1>

                  <p className="lead">{slide.description}</p>

                  <div className="hero-actions">
                    <a className="btn primary" href="mailto:contato@vklabs.tech">Começar projeto</a>
                    <a className="btn ghost" href="#footer">Falar com especialista</a>
                  </div>

                  <ul className="hero-features">
                    {slide.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <div className="hero-visual">
                  <div
                    className={`visual-panel premium-panel ${activeIndex === index ? 'is-active' : ''}`}
                  >
                    <img
                      src={heroImg}
                      alt="Solução digital VKLabs"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                    <div className="phone-badge">Solução profissional</div>
                    <div className="testi-bubble">
                      <img src="/favicon.svg" alt="avatar" className="avatar" />
                      <div className="testi-text">
                        <strong>{slide.kicker}</strong>
                        <span>{slide.accent}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="h-progress" aria-label="Progresso dos serviços">
          {slides.map((slide, index) => (
            <button
              key={slide.accent}
              type="button"
              className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
              aria-label={`Ir para ${slide.accent}`}
              onClick={() => goToSlide(index)}
            />
          ))}
          <span className="carousel-hint">Use os pontos para navegar</span>
        </div>

        <div className="h-snap-label">{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</div>
      </div>
    </section>
  )
}

export default Hero
