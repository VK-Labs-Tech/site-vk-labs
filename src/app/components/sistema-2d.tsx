import { CartIcon, ChartIcon, FileIcon, GridIcon, ShieldIcon, UsersIcon } from './icons'
import { Badge, Button, Container, GradientHeading } from './ui'

const sizes = [
  { n: '34', q: 2 },
  { n: '35', q: 5 },
  { n: '36', q: 8 },
  { n: '37', q: 12, hot: true },
  { n: '38', q: 9 },
  { n: '39', q: 4 },
  { n: '40', q: 1, low: true },
]

const features = [
  {
    icon: GridIcon,
    title: 'Estoque por numeração',
    text: 'Cadastro de produtos com modelo, cor e grade. Saldo da vitrine e do depósito no mesmo lugar.',
  },
  {
    icon: CartIcon,
    title: 'Vendas no balcão',
    text: 'Baixa automática do par certo. Menos erro de número e menos tempo procurando no estoque.',
  },
  {
    icon: ShieldIcon,
    title: 'Condicional controlada',
    text: 'Pares que saíram, prazo e devolução — sem caderno e sem perder o rastro do que está na rua.',
  },
  {
    icon: UsersIcon,
    title: 'Clientes da loja',
    text: 'Histórico de compras e numeração do cliente para atender rápido na próxima visita.',
  },
  {
    icon: ChartIcon,
    title: 'Dashboard gerencial',
    text: 'Vendas do dia, giro por modelo e visão do que falta repor antes de perder a venda.',
  },
  {
    icon: FileIcon,
    title: 'Relatórios operacionais',
    text: 'Estoque, vendas, condicional e desempenho para compra de coleção com base no que realmente gira.',
  },
]

export const Sistema2D = () => {
  return (
    <section
      id="sistema-2d"
      className="border-t border-white/[0.06] py-20 sm:py-24"
      aria-label="Sistema 2D para loja de calçados"
    >
      <Container>
        <div className="mb-12 max-w-2xl">
          <Badge>Sistema 2D</Badge>
          <GradientHeading>ERP para loja de calçados, pensado para grade</GradientHeading>
          <p className="mt-4 text-base leading-7 text-mute">
            Cadastro por modelo, cor e numeração, baixa de estoque na venda, condicional controlada e visão
            gerencial do que gira e do que falta — do balcão ao relatório, sem planilha no meio.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="reveal rounded-2xl border border-white/8 bg-surface-soft p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="m-0 text-xs font-semibold tracking-[0.1em] text-mute-dark uppercase">Estoque em grade</p>
                <h3 className="mt-1 mb-0 text-lg font-semibold">Tênis Runner Pro · Preto</h3>
              </div>
              <span className="rounded-full border border-warm/20 bg-warm/[0.08] px-3 py-1 text-xs font-semibold text-warm">
                41 pares
              </span>
            </div>

            <div
              className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-7 max-[420px]:grid-cols-4"
              role="img"
              aria-label="Grade de numeração de 34 a 40"
            >
              {sizes.map((item) => (
                <div
                  key={item.n}
                  className={`rounded-lg border p-2 text-center ${
                    item.hot
                      ? 'border-success/25 bg-success/[0.08]'
                      : item.low
                        ? 'border-warm/25 bg-warm/[0.08]'
                        : 'border-white/8 bg-surface'
                  }`}
                >
                  <span className="block text-xs text-mute-dark">{item.n}</span>
                  <strong className="text-sm font-semibold text-white">{item.q}</strong>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { label: 'Condicional', value: '3 pares' },
                { label: 'Vitrine', value: '18 pares' },
                { label: 'Depósito', value: '23 pares' },
              ].map((item) => (
                <article key={item.label} className="rounded-lg border border-white/8 bg-surface p-3 text-center">
                  <span className="block text-xs text-mute-dark">{item.label}</span>
                  <strong className="text-sm font-semibold text-white">{item.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className={`reveal reveal-delay-${(index % 3) + 1} rounded-xl border border-white/8 bg-surface-soft p-4`}
              >
                <div className="mb-1.5 flex items-center gap-2 text-warm">
                  <feature.icon className="h-4 w-4" />
                  <h3 className="m-0 text-base font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="m-0 text-sm leading-6 text-mute">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 flex flex-col items-start gap-4 rounded-xl border border-white/8 bg-surface-soft p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0 max-w-xl text-ink-soft">Quer ver o Sistema 2D na operação da sua loja?</p>
          <Button href="#contact">Agendar demonstração</Button>
        </div>
      </Container>
    </section>
  )
}

export default Sistema2D
