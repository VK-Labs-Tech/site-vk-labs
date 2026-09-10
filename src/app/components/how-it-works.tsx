import { RocketIcon, SearchIcon, TrendIcon } from './icons'
import { Badge, Container, GradientHeading } from './ui'

export const HowItWorks = () => {
  const steps = [
    {
      icon: SearchIcon,
      title: 'Diagnóstico',
      description:
        'Mapeamos a jornada da equipe ou o fluxo da loja — ponto, grade, vendas e condicional — para priorizar o que entra primeiro.',
    },
    {
      icon: RocketIcon,
      title: 'Implantação',
      description:
        'Configuramos Ponto do Colaborador ou Sistema 2D em ciclos curtos, com validação no uso real do RH ou do balcão.',
    },
    {
      icon: TrendIcon,
      title: 'Operação e evolução',
      description:
        'Acompanhamos o uso, os relatórios e as melhorias para o sistema seguir a rotina — não o contrário.',
    },
  ]

  return (
    <section id="process" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="Como trabalhamos">
      <Container>
        <Badge>Como trabalhamos</Badge>
        <GradientHeading className="max-w-2xl">Do diagnóstico à operação, em três etapas</GradientHeading>
        <p className="mt-4 max-w-xl text-base leading-7 text-mute">
          Processo direto, com quem usa o sistema no dia a dia. Sem projeto interminável e sem caixa-preta.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`reveal reveal-scale reveal-delay-${index + 1} rounded-2xl border border-white/8 bg-surface-soft p-6`}
            >
              <span className="mb-5 block text-xs font-semibold tracking-[0.14em] text-mute-dark">
                0{index + 1}
              </span>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-brand/20 bg-brand/[0.08] text-brand">
                <step.icon />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="m-0 leading-6 text-mute">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
