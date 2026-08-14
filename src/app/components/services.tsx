import React from 'react'

export const Services: React.FC = () => {
  const items = [
    {
      icon: '📅',
      title: 'Agenda e atendimento',
      desc: 'Agendamento, confirmações e gestão de equipe para clínicas, salões e negócios de serviço.',
    },
    {
      icon: '⏱️',
      title: 'Jornada e RH',
      desc: 'Registro de ponto, acompanhamento da jornada e base para espelho ponto da equipe.',
    },
    {
      icon: '👟',
      title: 'Varejo de calçados',
      desc: 'Sistema 2D com grade de numeração, vendas, condicional e estoque da loja no mesmo fluxo.',
    },
    {
      icon: '📊',
      title: 'Painéis e implantação',
      desc: 'Dashboards operacionais, relatórios e acompanhamento contínuo depois do go-live.',
    },
  ]

  return (
    <section id="services" className="services" aria-label="Serviços">
      <div className="container">
        <p className="section-overline reveal">O que entregamos</p>
        <h2 className="gradient-heading reveal reveal-delay-1">Sistemas para a operação do dia a dia</h2>
        <p className="section-description reveal reveal-delay-2">
          Da agenda ao ponto, e agora também o varejo de calçados: software pensado para o balcão, a equipe e a gestão.
        </p>

        <div className="services-grid">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`service-card reveal reveal-scale reveal-delay-${index + 1}`}
            >
              <div className="service-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
