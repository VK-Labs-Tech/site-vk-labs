import { ClockIcon, GridIcon, ShieldIcon } from './icons'
import { Container } from './ui'

const items = [
  {
    value: '2 produtos',
    text: 'Ponto do Colaborador e Sistema 2D — cada um no problema certo, sem mistura genérica.',
    icon: ShieldIcon,
  },
  {
    value: 'Jornada',
    text: 'Marcações, acompanhamento da equipe e base para espelho ponto e decisões de RH.',
    icon: ClockIcon,
  },
  {
    value: 'Grade',
    text: 'Estoque por numeração, cor e modelo — o jeito certo de controlar calçados no balcão.',
    icon: GridIcon,
  },
]

export const SocialProof = () => {
  return (
    <section className="pt-4 pb-16 sm:pt-8 sm:pb-20" aria-label="Foco dos produtos">
      <Container>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={item.value}
              className={`reveal rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition duration-200 hover:-translate-y-1 hover:border-brand/18 hover:bg-white/[0.04] reveal-delay-${index + 1}`}
            >
              <item.icon className="mb-4 h-5 w-5 text-brand" />
              <strong className="mb-2 block text-3xl font-black text-brand sm:text-4xl">{item.value}</strong>
              <p className="m-0 leading-6 text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SocialProof
