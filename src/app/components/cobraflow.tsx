import { BellIcon, ChartIcon, ClockIcon, MailIcon } from './icons'
import { Button, Container, GradientHeading } from './ui'

const features = [
  {
    icon: BellIcon,
    title: 'Lembretes de cobrança',
    text: 'Avisos no vencimento e no atraso — para o follow-up não depender de quem lembrou de olhar a planilha.',
  },
  {
    icon: ClockIcon,
    title: 'Agenda de vencimentos',
    text: 'O que vence hoje, o que já passou e o que entra na semana. Visão da fila, não da conversa avulsa.',
  },
  {
    icon: MailIcon,
    title: 'Cobrança no canal certo',
    text: 'Lembrete para o cliente no momento combinado, com histórico do que já foi enviado.',
  },
  {
    icon: ChartIcon,
    title: 'Status da carteira',
    text: 'Quem pagou, quem deve e o que está em follow-up. Base para o financeiro agir com dado.',
  },
]

const reminders = [
  { name: 'Parcela 03 · Cliente Aurora', when: 'Vence hoje', amount: 'R$ 1.280' },
  { name: 'Mensalidade · Studio Norte', when: 'Atraso 4 dias', amount: 'R$ 890' },
  { name: 'Contrato 2D · Loja Centro', when: 'Lembrete em 3 dias', amount: 'R$ 2.450' },
]

export const CobraFlow = () => {
  return (
    <section id="cobraflow" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="CobraFlow">
      <Container>
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <p className="m-0 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.12em] text-brand uppercase">
              <span className="h-px w-6 bg-brand/70" aria-hidden="true" />
              CobraFlow
            </p>
            <span className="inline-flex rounded-full border border-success/25 bg-success/[0.08] px-3 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-success uppercase">
              Em desenvolvimento
            </span>
          </div>
          <GradientHeading>Lembretes de cobrança, no tempo certo</GradientHeading>
          <p className="mt-4 text-base leading-7 text-mute">
            SaaS em construção para organizar vencimentos e disparar lembretes de cobrança. A carteira deixa
            de viver só na planilha e no grupo do WhatsApp.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-dashed border-success/25 bg-surface-soft p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-xs font-semibold tracking-[0.1em] text-mute-dark uppercase">Prévia do produto</p>
                <h3 className="mt-1 mb-0 text-lg font-semibold">Fila de cobrança</h3>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-mute">
                Em breve
              </span>
            </div>

            <div className="mt-5 grid gap-2">
              {reminders.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-3 rounded-lg border border-white/8 bg-surface px-3 py-3">
                  <div>
                    <strong className="block text-sm font-semibold text-white">{item.name}</strong>
                    <span className="mt-1 block text-xs text-mute">{item.when}</span>
                  </div>
                  <strong className="shrink-0 text-sm font-semibold text-success">{item.amount}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`reveal reveal-delay-${(index % 3) + 1} rounded-xl border border-white/8 bg-surface-soft p-4`}
              >
                <div className="mb-1.5 flex items-center gap-2 text-success">
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
            Quer acompanhar o CobraFlow ou entrar na lista de primeiros usuários?
          </p>
          <Button href="#contact">Quero ser avisado</Button>
        </div>
      </Container>
    </section>
  )
}

export default CobraFlow
