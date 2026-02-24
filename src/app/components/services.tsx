import React from 'react'

export const Services: React.FC = () => {
  const items = [
    { title: 'Desenvolvimento Web', desc: 'Web apps rápidos, escaláveis e seguros.' },
    { title: 'Mobile & PWAs', desc: 'Apps nativos e progressivos para engajar clientes.' },
    { title: 'Design de Produto', desc: 'UX/UI focado em conversão e retenção.' },
    { title: 'SaaS de Agendamento', desc: 'Sistema completo para gestão de agenda, lembretes e equipe.' },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>O que fazemos</h2>
        <div className="services-grid">
          {items.map((it) => (
            <article key={it.title} className="service-card">
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
