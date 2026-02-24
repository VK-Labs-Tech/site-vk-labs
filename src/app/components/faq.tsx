export const FAQ = () => {
  const items = [
    {
      q: 'Em quanto tempo o projeto entra no ar?',
      a: 'Projetos de média complexidade normalmente entram em produção entre 4 e 8 semanas.',
    },
    {
      q: 'O SaaS de agendamento já vem pronto?',
      a: 'Sim. Você já começa com agenda, confirmações automáticas, gestão de equipe e painel operacional.',
    },
    {
      q: 'Vocês fazem integração com WhatsApp e e-mail?',
      a: 'Fazemos integrações para notificações, lembretes e fluxos de confirmação conforme sua operação.',
    },
    {
      q: 'Tem suporte após o lançamento?',
      a: 'Sim. Oferecemos acompanhamento contínuo com melhorias, monitoramento e suporte técnico.',
    },
  ]

  return (
    <section id="faq" className="faq" aria-label="Perguntas frequentes">
      <div className="container">
        <p className="section-overline">FAQ</p>
        <h2>Perguntas frequentes</h2>

        <div className="faq-list">
          {items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
