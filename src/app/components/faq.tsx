import { Badge, Container, GradientHeading } from './ui'

export const FAQ = () => {
  const items = [
    {
      q: 'Em quanto tempo o projeto entra no ar?',
      a: 'Projetos de média complexidade normalmente entram em produção entre 4 e 8 semanas, conforme o produto e o ritmo da implantação.',
    },
    {
      q: 'O Ponto do Colaborador atende à minha política de jornada?',
      a: 'O sistema registra marcações e apoia a gestão da jornada. Detalhes de política e conformidade legal são alinhados ao seu contexto na implantação.',
    },
    {
      q: 'O Ponto funciona no celular?',
      a: 'Sim. O colaborador registra o ponto no mobile; a gestão acompanha jornada e relatórios no web.',
    },
    {
      q: 'O Sistema 2D serve para loja de calçados com várias numerações?',
      a: 'Sim. O cadastro é por modelo, cor e grade de numeração, com saldo de vitrine e depósito. Vendas e condicional baixam o par certo, sem planilha.',
    },
    {
      q: 'O Sistema 2D controla condicional?',
      a: 'Sim. Pares que saíram, prazo e devolução ficam no mesmo fluxo da venda, para a loja não perder o rastro do estoque.',
    },
    {
      q: 'Tem suporte após o lançamento?',
      a: 'Sim. Oferecemos acompanhamento contínuo com melhorias, monitoramento e suporte técnico para Ponto e Sistema 2D.',
    },
  ]

  return (
    <section id="faq" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="Perguntas frequentes">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <Badge>FAQ</Badge>
            <GradientHeading>Perguntas frequentes</GradientHeading>
            <p className="mt-4 max-w-sm text-base leading-7 text-mute">
              Se a sua dúvida não estiver aqui, fale com a gente. Respondemos por WhatsApp ou e-mail.
            </p>
          </div>

          <div className="grid gap-2">
            {items.map((item, i) => (
              <details
                key={item.q}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} group border-b border-white/8 py-4`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="shrink-0 text-mute-dark transition duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-6 text-mute">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQ
