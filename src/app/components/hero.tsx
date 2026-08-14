import React, { useState } from 'react'

type HeroSlide = {
  kicker: string
  titlePrefix: string
  accent: string
  description: string
  tags: string[]
  products: string[]
  focusTitle: string
  focusBlocks: { title: string; text: string }[]
  metrics: { label: string; value: string }[]
}

export const Hero: React.FC = () => {
  const slides: HeroSlide[] = [
    {
      kicker: 'VK Labs Tech',
      titlePrefix: 'VK Labs —',
      accent: 'Agenda, Ponto e Sistema 2D',
      description:
        'Três sistemas para a operação real: agenda com confirmações, ponto do colaborador e o Sistema 2D para loja de calçados — estoque por numeração, vendas e condicional.',
      tags: [
        'Agenda com confirmações e lembretes',
        'Ponto com jornada e relatórios',
        'Sistema 2D com grade, vendas e condicional',
      ],
      products: ['VK Labs Agenda', 'Ponto do Colaborador', 'Sistema 2D'],
      focusTitle: 'Três produtos para organizar atendimento, jornada e o varejo de calçados.',
      focusBlocks: [
        {
          title: 'VK Labs Agenda',
          text: 'Gestão de agenda, equipe e lembretes para reduzir faltas e manter o calendário alinhado à operação.',
        },
        {
          title: 'Ponto do Colaborador',
          text: 'Registro de ponto e acompanhamento da jornada com base para espelho e decisões de RH.',
        },
        {
          title: 'Sistema 2D',
          text: 'ERP para loja de calçados: grade de numeração, vendas, condicional e dashboard gerencial.',
        },
      ],
      metrics: [
        { label: 'Sistemas', value: '3 produtos' },
        { label: 'Calçados', value: 'Grade e condicional' },
        { label: 'Operação', value: 'Agenda e ponto' },
      ],
    },
    {
      kicker: 'Novo produto',
      titlePrefix: 'Sistema 2D —',
      accent: 'loja de calçados',
      description:
        'Feito para o balcão: cadastro por modelo, cor e numeração, baixa de estoque na venda, condicional controlada e visão gerencial do que gira e do que falta.',
      tags: [
        'Estoque por numeração e cor',
        'Vendas e condicional no mesmo fluxo',
        'Dashboard e relatórios da loja',
      ],
      products: ['Estoque', 'Vendas', 'Condicional', 'Clientes', 'Dashboard'],
      focusTitle: 'O sistema da loja, pensado para grade — não para planilha.',
      focusBlocks: [
        {
          title: 'Grade de numeração',
          text: 'Veja pares por número, cor e modelo. Saiba o que está na vitrine, no depósito e o que precisa repor.',
        },
        {
          title: 'Vendas e condicional',
          text: 'Registre venda e condicional com baixa correta do estoque, sem perder o controle dos pares que saíram.',
        },
        {
          title: 'Gestão da loja',
          text: 'Clientes, dashboard gerencial e relatórios operacionais para decidir reposição e compra de coleção.',
        },
      ],
      metrics: [
        { label: 'Estoque', value: 'Por numeração' },
        { label: 'Balcão', value: 'Venda + condicional' },
        { label: 'Gestão', value: 'Dashboard e giro' },
      ],
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

  const slide = slides[activeIndex]

  return (
    <section id="home" className="hero" aria-label="Apresentação">
      <div className="container h-slide-inner">
        <div className="hero-copy">
          <div className="kicker">{slide.kicker}</div>
          <h1>
            {slide.titlePrefix}{' '}
            <span className="accent carousel-title" key={slide.accent}>
              {slide.accent}
            </span>
          </h1>

          <p className="lead">{slide.description}</p>

          <ul className="hero-features">
            {slide.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="hero-products">
            <span className="hero-products-label">Produtos</span>
            <div className="hero-products-list">
              {slide.products.map((product) => (
                <span key={product} className="hero-product-pill">
                  {product}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <a className="btn primary" href="#sistema-2d">
              Ver Sistema 2D
            </a>
            <a className="btn ghost" href="#contact">
              Falar com a VK Labs
            </a>
          </div>

          <div className="hero-carousel-nav">
            {slides.map((s, i) => (
              <button
                key={s.accent}
                type="button"
                className={`carousel-dot ${activeIndex === i ? 'active' : ''}`}
                aria-label={`Ir para ${s.accent}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
            <span className="carousel-hint">visão geral e Sistema 2D</span>
          </div>
        </div>

        <div
          className="hero-visual"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="hero-focus-panel is-active"
            style={panelStyle}
            key={slide.focusTitle}
          >
            <p className="hero-focus-overline">Foco de atuação</p>
            <h3>{slide.focusTitle}</h3>

            <div className="hero-focus-grid">
              {slide.focusBlocks.map((block) => (
                <article key={block.title} className="hero-focus-card">
                  <span>{block.title}</span>
                  <p>{block.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-metrics-grid" aria-label="Métricas e atributos">
            {slide.metrics.map((metric) => (
              <article key={metric.label} className="hero-metric-card">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
