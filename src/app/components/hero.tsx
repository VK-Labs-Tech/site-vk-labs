import React, {useState} from 'react'

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

            accent: 'Agenda e Ponto do Colaborador',

            description:
                'A VK Labs oferece dois sistemas focados na sua operação: agenda inteligente com confirmações e lembretes, e ponto do colaborador com registro de jornada e visão para gestão.',

            tags: [
                'Agenda com confirmações e lembretes',
                'Ponto do colaborador com jornada e relatórios',
                'Painéis prontos para equipe e gestão',
            ],

            products: ['VK Labs Agenda', 'Ponto do Colaborador'],

            focusTitle: 'Dois produtos para organizar agenda e jornada de trabalho.',
            focusBlocks: [
                {
                    title: 'VK Labs Agenda',
                    text: 'Gestão de agenda, equipe e lembretes para reduzir faltas e manter o calendário alinhado à operação.',
                },
                {
                    title: 'Ponto do Colaborador',
                    text: 'Registro de ponto e acompanhamento da jornada com base para espelho e decisões de RH.',
                },
            ],
            metrics: [
                { label: 'Sistemas VK Labs', value: '2' },
                { label: 'Agenda', value: 'Confirmações e equipe' },
                { label: 'Ponto', value: 'Jornada e relatórios' },
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

    const goToSlide = (index: number) => {
        setActiveIndex(index)
    }

    const translateX = -(activeIndex * 100)

    return (
        <section id="services">
            <div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
                <div className="h-scroll-track" style={{transform: `translate3d(${translateX}vw, 0, 0)`}}>
                    {slides.map((slide, index) => (
                        <article key={slide.accent} className="h-slide">
                            <div className="container h-slide-inner">
                                <div className="hero-copy">
                                    <div className="kicker">{slide.kicker}</div>
                                    <h1>
                                        {slide.titlePrefix}{' '}
                                        <span className="accent carousel-title">{slide.accent}</span>
                                    </h1>

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
                                        <span className="carousel-hint">navegue pelos destaques</span>
                                    </div>
                                </div>

                                <div className="hero-visual">
                                    <div className={`hero-focus-panel ${activeIndex === index ? 'is-active' : ''}`}
                                         style={activeIndex === index ? panelStyle : undefined}>
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

                                    <div className="hero-metrics-grid" aria-label="Metricas e atributos">
                                        {slide.metrics.map((metric) => (
                                            <article key={metric.label} className="hero-metric-card">
                                                <span>{metric.label}</span>
                                                <strong>{metric.value}</strong>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

               </div>
        </section>
    )
}

export default Hero
