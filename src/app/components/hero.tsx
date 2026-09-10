import { ArrowRightIcon, ClockIcon, ShoeIcon } from './icons'
import { Badge, Button, Container } from './ui'

export const Hero = () => {
  return (
    <section id="home" className="pt-16 pb-20 sm:pt-24 sm:pb-28" aria-label="Apresentação">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Badge>VK Labs Tech · Cuiabá, MT</Badge>
          <h1 className="text-[2.35rem] leading-[1.08] font-semibold tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.08] lg:text-[3.5rem]">
            Software para a operação que não cabe em planilha
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-mute sm:text-lg sm:leading-8">
            A VK Labs desenvolve sistemas para jornada de equipe e varejo de calçados. Dois produtos prontos
            para implantar: Ponto do Colaborador e Sistema 2D.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="#contact">
              Agendar conversa
              <ArrowRightIcon />
            </Button>
            <Button href="#projects" variant="ghost">
              Conhecer os produtos
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          <a
            href="#ponto"
            className="group rounded-2xl border border-white/8 bg-surface-soft p-6 no-underline transition duration-200 hover:border-brand/25"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-brand uppercase">
              <ClockIcon className="h-3.5 w-3.5" />
              RH e jornada
            </span>
            <h2 className="mt-3 mb-0 text-xl font-semibold text-white">Ponto do Colaborador</h2>
            <p className="mt-2 mb-0 text-sm leading-6 text-mute">
              Marcações, jornada e relatórios para colaborador e gestão — com base para o espelho ponto.
            </p>
            <span className="mt-4 inline-flex text-sm font-semibold text-brand transition group-hover:gap-2">
              Ver produto →
            </span>
          </a>

          <a
            href="#sistema-2d"
            className="group rounded-2xl border border-white/8 bg-surface-soft p-6 no-underline transition duration-200 hover:border-warm/30"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] text-warm uppercase">
              <ShoeIcon className="h-3.5 w-3.5" />
              Varejo de calçados
            </span>
            <h2 className="mt-3 mb-0 text-xl font-semibold text-white">Sistema 2D</h2>
            <p className="mt-2 mb-0 text-sm leading-6 text-mute">
              Estoque por numeração, vendas, condicional e dashboard — ERP pensado para o balcão da loja.
            </p>
            <span className="mt-4 inline-flex text-sm font-semibold text-warm transition group-hover:gap-2">
              Ver produto →
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default Hero
