export const HowItWorks = () => {
  const steps = [
    {
      title: 'Diagnóstico estratégico',
      description: 'Mapeamos operação, metas e oportunidades para priorizar o que traz resultado rápido.',
    },
    {
      title: 'Entrega com qualidade',
      description: 'Desenvolvemos em ciclos curtos com validação contínua de UX, performance e negócio.',
    },
    {
      title: 'Escala orientada por dados',
      description: 'Monitoramos métricas, evoluímos o produto e aceleramos crescimento com previsibilidade.',
    },
  ]

  return (
    <section id="process" className="how-it-works" aria-label="Como funciona">
      <div className="container">
        <p className="section-overline">Como funciona</p>
        <h2>Do diagnóstico ao crescimento em 3 etapas</h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="step-card">
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
