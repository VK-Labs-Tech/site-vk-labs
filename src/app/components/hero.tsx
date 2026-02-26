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
  const [panelStyle, setPanelStyle] = useState<React.CSSProperties>({})

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setPanelStyle({
      transform: `perspective(1200px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`,
      transition: 'transform 0.1s linear',
    })
  }

  const handleMouseLeave = () => {
    setPanelStyle({
      transform: '',
      transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
    })
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const translateX = -(activeIndex * 100)

  return (
    <section id="services" className="h-scroll-section">
      <div
        className="h-scroll-sticky"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
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

                  <div className="hero-carousel-nav">
                    {slides.map((s, i) => (
                      <button
                        key={s.accent}
                        type="button"
                        className={`carousel-dot ${activeIndex === i ? 'active' : ''}`}
                        aria-label={`Ir para ${s.accent}`}
                        onClick={() => goToSlide(i)}
                      />
                    ))}
                    <span className="carousel-hint">navegue pelos serviços</span>
                  </div>

                  <div className="hero-actions">
                    <a className="btn primary large" href="mailto:contato@vklabs.tech">
                      Começar projeto
                    </a>
                    <a className="btn ghost large" href="#contact">
                      Falar com especialista
                    </a>
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
                    style={activeIndex === index ? panelStyle : undefined}
                  >
                    <img
                      src={heroImg}
                      alt="Solução digital VKLabs"
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                    <div className="phone-badge">✦ Solução profissional</div>
                    <div className="testi-bubble">
                      <img src="/favicon.svg" alt="avatar" className="avatar" />
                      <div className="testi-text">
                        <strong>{slide.kicker}</strong>
                        <span>{slide.accent}</span>
                      </div>
                    </div>

                    {activeIndex === index && (
                      <>
                        <div className="hero-float-badge hero-float-badge-1" aria-hidden="true">
                          <span className="badge-icon">⚡</span>
                          <div className="badge-text">
                            <strong>Entrega rápida</strong>
                            <span>4–8 semanas</span>
                          </div>
                        </div>
                        <div className="hero-float-badge hero-float-badge-2" aria-hidden="true">
                          <span className="badge-icon">📈</span>
                          <div className="badge-text">
                            <strong>+32% conversão</strong>
                            <span>em 60 dias</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="h-snap-label">{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</div>
      </div>
    </section>
  )
}

export default Hero
