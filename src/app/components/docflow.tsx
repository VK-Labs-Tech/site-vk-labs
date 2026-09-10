import { FileIcon, SearchIcon, ShieldIcon, SignatureIcon } from './icons'
import { Badge, Button, Container, GradientHeading } from './ui'

const features = [
  {
    icon: FileIcon,
    title: 'Criação de contratos',
    text: 'Modelos prontos e cláusulas reutilizáveis. O contrato nasce padronizado, sem copiar o último Word.',
  },
  {
    icon: SearchIcon,
    title: 'Gestão no mesmo fluxo',
    text: 'Status, partes, prazos e versão vigente em um só lugar — o que está vigente, o que vence e o que falta assinar.',
  },
  {
    icon: SignatureIcon,
    title: 'Assinatura eletrônica',
    text: 'Envio para as partes, acompanhamento de quem já assinou e trilha do documento assinado.',
  },
  {
    icon: ShieldIcon,
    title: 'Histórico e conferência',
    text: 'Quem criou, quem assinou e quando. Menos contrato perdido no e-mail e menos dúvida na hora da cobrança.',
  },
]

const contracts = [
  { name: 'Prestação de serviços · Studio Norte', status: 'Aguardando assinatura', tone: 'warm' },
  { name: 'Contrato de locação · Loja Centro', status: 'Assinado', tone: 'success' },
  { name: 'Termo de parceria · Fornecedor 2D', status: 'Vence em 12 dias', tone: 'doc' },
]

export const DocFlow = () => {
  return (
    <section id="docflow" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="DocFlow">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Badge>DocFlow</Badge>
          <GradientHeading>Contratos: criar, gerir e assinar no mesmo lugar</GradientHeading>
          <p className="mt-4 text-base leading-7 text-mute">
            SaaS para o ciclo do contrato — da minuta à assinatura. Menos arquivo solto, menos follow-up no
            WhatsApp e mais clareza do que está vigente.
          </p>
          <a
            className="mt-3 inline-block text-sm font-medium text-doc no-underline hover:text-[#c2d0ff]"
            href="https://docflow.vklabs.online"
            target="_blank"
            rel="noopener noreferrer"
          >
            docflow.vklabs.online
          </a>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-white/8 bg-surface-soft p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-xs font-semibold tracking-[0.1em] text-mute-dark uppercase">Contratos</p>
                <h3 className="mt-1 mb-0 text-lg font-semibold">Fila de assinatura</h3>
              </div>
              <span className="rounded-full border border-doc/25 bg-doc/[0.08] px-3 py-1 text-xs font-semibold text-doc">
                3 ativos
              </span>
            </div>

            <div className="mt-5 grid gap-2">
              {contracts.map((item) => (
                <div key={item.name} className="rounded-lg border border-white/8 bg-surface px-3 py-3">
                  <strong className="block text-sm font-semibold text-white">{item.name}</strong>
                  <span
                    className={`mt-1 block text-xs font-medium ${
                      item.tone === 'success' ? 'text-success' : item.tone === 'warm' ? 'text-warm' : 'text-doc'
                    }`}
                  >
                    {item.status}
                  </span>
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
                <div className="mb-1.5 flex items-center gap-2 text-doc">
                  <feature.icon className="h-4 w-4" />
                  <h3 className="m-0 text-base font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="m-0 text-sm leading-6 text-mute">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-start gap-4 rounded-xl border border-white/8 bg-surface-soft p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 max-w-xl text-ink-soft">Quer centralizar criação, gestão e assinatura de contratos?</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="https://docflow.vklabs.online" target="_blank" rel="noopener noreferrer">
              Acessar o DocFlow
            </Button>
            <Button href="#contact" variant="ghost">
              Falar sobre o DocFlow
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DocFlow
