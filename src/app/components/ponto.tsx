import { ChartIcon, ClockIcon, ShieldIcon, UsersIcon } from './icons'
import { Badge, Button, Container, GradientHeading } from './ui'

const features = [
  {
    icon: ClockIcon,
    title: 'Registro de ponto',
    text: 'Entrada, intervalos e saída com histórico por colaborador — no web e no mobile.',
  },
  {
    icon: UsersIcon,
    title: 'Colaborador e gestão',
    text: 'Cada pessoa vê a própria jornada. O RH acompanha a equipe sem planilha paralela.',
  },
  {
    icon: ShieldIcon,
    title: 'Base para espelho ponto',
    text: 'Marcações organizadas para conferência de jornada e conformidade da política da empresa.',
  },
  {
    icon: ChartIcon,
    title: 'Relatórios de RH',
    text: 'Visão da jornada, atrasos e horas para decidir com dado — não com recado no grupo.',
  },
]

const punches = [
  { label: 'Entrada', value: '08:02', done: true },
  { label: 'Intervalo', value: '12:00 – 13:01', done: true },
  { label: 'Saída', value: 'Pendente', done: false },
]

export const Ponto = () => {
  return (
    <section id="ponto" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="Ponto do Colaborador">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Badge>Ponto do Colaborador</Badge>
          <GradientHeading>Jornada da equipe, do registro ao relatório</GradientHeading>
          <p className="mt-4 text-base leading-7 text-mute">
            Sistema para marcar ponto e acompanhar a jornada — com visão para o colaborador e para a gestão,
            e base para o espelho ponto.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-white/8 bg-surface-soft p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-xs font-semibold tracking-[0.1em] text-mute-dark uppercase">Jornada de hoje</p>
                <h3 className="mt-1 mb-0 text-lg font-semibold">Ana Souza · Atendimento</h3>
              </div>
              <span className="rounded-full border border-success/25 bg-success/[0.08] px-3 py-1 text-xs font-semibold text-success">
                Em expediente
              </span>
            </div>

            <div className="mt-5 grid gap-2">
              {punches.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between rounded-lg border px-3 py-3 ${
                    item.done ? 'border-white/8 bg-surface' : 'border-warm/25 bg-warm/[0.06]'
                  }`}
                >
                  <span className="text-sm text-mute">{item.label}</span>
                  <strong className="text-sm font-semibold text-white">{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: 'Trabalhadas', value: '4h 18m' },
                { label: 'Intervalo', value: '1h 01m' },
                { label: 'Previsto', value: '08h' },
              ].map((item) => (
                <article key={item.label} className="rounded-lg border border-white/8 bg-surface p-3 text-center">
                  <span className="block text-xs text-mute-dark">{item.label}</span>
                  <strong className="text-sm font-semibold text-white">{item.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`reveal reveal-delay-${(index % 3) + 1} rounded-xl border border-white/8 bg-surface-soft p-4`}
              >
                <div className="mb-1.5 flex items-center gap-2 text-brand">
                  <feature.icon className="h-4 w-4" />
                  <h3 className="m-0 text-base font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="m-0 text-sm leading-6 text-mute">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-start gap-4 rounded-xl border border-white/8 bg-surface-soft p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 max-w-xl text-ink-soft">
            Quer organizar o ponto da equipe com jornada e relatórios no mesmo lugar?
          </p>
          <Button href="#contact">Falar sobre o Ponto</Button>
        </div>
      </Container>
    </section>
  )
}

export default Ponto
