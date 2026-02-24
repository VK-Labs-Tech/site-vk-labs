export const SocialProof = () => {
  const logos = ['NeoClinic', 'FitHouse', 'Dental Prime', 'Studio Vitta']

  const highlights = [
    { metric: '+32%', text: 'aumento de agendamentos em 60 dias' },
    { metric: '-41%', text: 'redução de faltas com lembretes automáticos' },
  ]

  return (
    <section className="social-proof" aria-label="Prova social">
      <div className="container">
        <p className="section-overline">Empresas que confiam na VKLabs</p>

        <div className="logo-row" role="list" aria-label="Clientes atendidos">
          {logos.map((logo) => (
            <span key={logo} role="listitem" className="logo-pill">
              {logo}
            </span>
          ))}
        </div>

        <div className="proof-grid">
          {highlights.map((item) => (
            <article key={item.metric} className="proof-card">
              <strong>{item.metric}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof
