import { RocketIcon, SearchIcon, TrendIcon } from './icons'
import { Badge, Container, GradientHeading } from './ui'

export const HowItWorks = () => {
  const steps = [
    {
      icon: SearchIcon,
      title: 'Diagnóstico da operação',
      description:
        'Mapeamos jornada da equipe ou o fluxo da loja — ponto, grade, vendas e condicional — para priorizar o que entra primeiro.',
    },
    {
      icon: RocketIcon,
      title: 'Implantação do produto',
      description:
        'Configuramos Ponto do Colaborador ou Sistema 2D em ciclos curtos, com validação no uso real do RH ou do balcão.',
    },
    {
      icon: TrendIcon,
      title: 'Operação e evolução',
      description:
        'Acompanhamos o uso, relatórios e melhorias contínuas para o sistema acompanhar a rotina — não o contrário.',
    },
  ]

  return (
    <section id="process" className="py-16 sm:py-24" aria-label="Como funciona">
      <Container>
        <Badge>Como funciona</Badge>
        <GradientHeading className="max-w-3xl">Do diagnóstico à operação em três etapas</GradientHeading>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`reveal reveal-scale reveal-delay-${index + 1} relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0d1e32]/72 to-[#07111e]/62 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)]`}
            >
              <div className="pointer-events-none absolute top-4 right-5 text-4xl font-black text-white/[0.045]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/[0.075] text-brand">
                <step.icon />
              </div>
              <span className="mb-3 block text-xs font-bold tracking-[0.14em] text-brand uppercase">
                0{index + 1}
              </span>
              <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="m-0 leading-6 text-mute">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
