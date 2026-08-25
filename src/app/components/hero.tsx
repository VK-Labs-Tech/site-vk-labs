import { ArrowRightIcon, ClockIcon, ShoeIcon } from './icons'
import { Badge, Button, Container } from './ui'

export const Hero = () => {
  return (
    <section id="home" className="pt-10 pb-20 sm:pt-14 sm:pb-24" aria-label="Apresentação">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Badge>VK Labs Tech</Badge>
          <h1 className="mb-6 max-w-4xl text-[2.35rem] leading-[1.04] font-black tracking-[-0.035em] sm:text-6xl sm:leading-[1.03] lg:text-7xl">
            Ponto do colaborador e{' '}
            <span className="bg-gradient-to-br from-brand via-accent to-warm bg-clip-text text-transparent">
              Sistema 2D
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-mute">
            Dois produtos para a operação real: jornada da equipe no Ponto do Colaborador, e estoque por
            numeração, vendas e condicional no Sistema 2D — para loja de calçados.
          </p>

          <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
            {['Ponto com jornada e relatórios', 'Sistema 2D com grade, vendas e condicional'].map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-1.5 text-xs font-semibold text-[#b9cde0] max-[420px]:w-full"
              >
                <span className="mr-1.5 text-brand">✦</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="#ponto">
              Conhecer o Ponto
              <ArrowRightIcon />
            </Button>
            <Button href="#sistema-2d" variant="ghost">
              Ver Sistema 2D
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          <a
            href="#ponto"
            className="group rounded-3xl border border-white/9 bg-gradient-to-br from-[#0d233d]/78 to-[#071222]/68 p-5 no-underline shadow-panel shadow-glow backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-brand/20 sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/16 bg-brand/[0.045] px-3 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-[#bceeff] uppercase">
                <ClockIcon className="h-3.5 w-3.5" />
                RH e jornada
              </span>
              <span className="text-xs font-semibold text-mute-dark transition group-hover:text-brand">
                Ver produto →
              </span>
            </div>
            <h2 className="m-0 text-2xl font-bold">Ponto do Colaborador</h2>
            <p className="mt-2 mb-0 text-sm leading-6 text-[#b5c8da]">
              Marcações, jornada e relatórios para colaborador e gestão — com base para o espelho ponto.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                { title: 'Registro de ponto', text: 'Entrada, intervalos e saída com histórico confiável.' },
                { title: 'Visão de gestão', text: 'Acompanhe a equipe e gere a base para o RH.' },
              ].map((block) => (
                <article
                  key={block.title}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-200 group-hover:border-brand/16"
                >
                  <span className="mb-2 block text-xs font-bold tracking-[0.14em] text-brand uppercase">
                    {block.title}
                  </span>
                  <p className="m-0 text-sm leading-6 text-[#b5c8da]">{block.text}</p>
                </article>
              ))}
            </div>
          </a>

          <a
            href="#sistema-2d"
            className="group rounded-3xl border border-warm/16 bg-gradient-to-br from-warm/[0.09] to-white/[0.025] p-5 no-underline shadow-panel transition duration-200 hover:-translate-y-1 hover:border-warm/30 sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-warm/18 bg-warm/[0.05] px-3 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-[#ffe0a4] uppercase">
                <ShoeIcon className="h-3.5 w-3.5" />
                Varejo de calçados
              </span>
              <span className="text-xs font-semibold text-mute-dark transition group-hover:text-warm">
                Ver produto →
              </span>
            </div>
            <h2 className="m-0 text-2xl font-bold">Sistema 2D</h2>
            <p className="mt-2 mb-0 text-sm leading-6 text-[#b5c8da]">
              Grade de numeração, vendas, condicional e dashboard — o ERP pensado para o balcão da loja.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 max-sm:grid-cols-1">
              {[
                { label: 'Estoque', value: 'Por numeração' },
                { label: 'Balcão', value: 'Venda + condicional' },
                { label: 'Gestão', value: 'Dashboard e giro' },
              ].map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-xl border border-white/[0.07] bg-black/16 p-4 max-sm:flex max-sm:items-center max-sm:justify-between"
                >
                  <span className="mb-2 block text-xs font-bold tracking-[0.14em] text-warm uppercase max-sm:mb-0">
                    {metric.label}
                  </span>
                  <strong className="text-sm font-bold text-white">{metric.value}</strong>
                </article>
              ))}
            </div>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Hero
