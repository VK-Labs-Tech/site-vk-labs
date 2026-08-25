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
    <section id="faq" className="py-16 sm:py-24" aria-label="Perguntas frequentes">
      <Container>
        <Badge>FAQ</Badge>
        <GradientHeading>Perguntas frequentes</GradientHeading>

        <div className="mt-12 grid gap-3">
          {items.map((item, i) => (
            <details
              key={item.q}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-200 open:border-brand/16 open:bg-brand/[0.035]`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-white [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  className="shrink-0 text-brand transition duration-200 group-open:rotate-180"
                  aria-hidden="true"
                >
                  ▾
                </span>
              </summary>
              <p className="mt-4 leading-6 text-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQ
