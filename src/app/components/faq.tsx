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
      q: 'O Ponto do Colaborador atende à minha política de jornada?',
      a: 'O sistema é pensado para registrar marcações e apoiar a gestão da jornada; detalhes de política e conformidade legal devem ser alinhados ao seu contexto na implantação.',
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
        <p className="section-overline reveal">FAQ</p>
        <h2 className="gradient-heading reveal reveal-delay-1">Perguntas frequentes</h2>

        <div className="faq-list">
          {items.map((item, i) => (
            <details key={item.q} className={`faq-item reveal reveal-delay-${i + 1}`}>
              <summary>
                {item.q}
                <span className="faq-chevron" aria-hidden="true">▾</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
