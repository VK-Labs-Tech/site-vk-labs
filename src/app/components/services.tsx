import { ChartIcon, ClockIcon, ShoeIcon } from './icons'
import { Badge, Container, GradientHeading } from './ui'

export const Services = () => {
  const items = [
    {
      icon: ClockIcon,
      title: 'Jornada e RH',
      desc: 'Registro de ponto, acompanhamento da jornada e base para espelho ponto da equipe.',
    },
    {
      icon: ShoeIcon,
      title: 'Varejo de calçados',
      desc: 'Sistema 2D com grade de numeração, vendas, condicional e estoque da loja no mesmo fluxo.',
    },
    {
      icon: ChartIcon,
      title: 'Painéis e implantação',
      desc: 'Dashboards operacionais, relatórios e acompanhamento contínuo depois do go-live.',
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-24" aria-label="Serviços">
      <Container>
        <Badge>O que entregamos</Badge>
        <GradientHeading>Sistemas para a operação do dia a dia</GradientHeading>
        <p className="mt-4 max-w-2xl text-base leading-7 text-mute">
          Do ponto ao varejo de calçados: software pensado para o balcão, a equipe e a gestão.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`reveal reveal-scale reveal-delay-${index + 1} rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0d1e32]/72 to-[#07111e]/62 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-1 hover:border-brand/20`}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/[0.075] text-brand">
                <item.icon />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="m-0 leading-6 text-mute">{item.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Services
