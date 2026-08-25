import { products } from '../../data/products'
import { ArrowRightIcon, ClockIcon, ShoeIcon } from './icons'
import { Badge, Container, GradientHeading } from './ui'

const icons = {
  ponto: ClockIcon,
  'sistema-2d': ShoeIcon,
}

export const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-24" aria-label="Produtos">
      <Container>
        <div className="mb-12 max-w-3xl">
          <Badge>Produtos</Badge>
          <GradientHeading>Dois sistemas, dois problemas de operação</GradientHeading>
          <p className="mt-4 max-w-2xl text-base leading-7 text-mute">
            Ponto do Colaborador para a jornada da equipe. Sistema 2D para a loja de calçados. Cada produto
            com o fluxo que o dia a dia pede.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((item) => {
            const Icon = icons[item.id]
            const featured = item.id === 'sistema-2d'

            return (
              <article
                key={item.id}
                className={`rounded-2xl border bg-gradient-to-br from-[#0d1e32]/72 to-[#07111e]/62 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)] ${
                  featured
                    ? 'border-warm/16 hover:border-warm/30'
                    : 'border-white/[0.07] hover:border-brand/20'
                }`}
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl border ${
                    featured
                      ? 'border-warm/20 bg-warm/[0.075] text-warm'
                      : 'border-brand/20 bg-brand/[0.075] text-brand'
                  }`}
                >
                  <Icon />
                </div>

                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-brand/16 bg-brand/[0.045] px-3 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-[#bceeff] uppercase">
                    {item.category}
                  </span>
                  {featured && (
                    <span className="inline-flex rounded-full border border-warm/18 bg-warm/[0.05] px-3 py-1 text-[0.65rem] font-bold tracking-[0.1em] text-[#ffe0a4] uppercase">
                      Novo
                    </span>
                  )}
                </div>

                <h3 className="mb-2 text-lg font-bold text-white">{item.name}</h3>
                <p className="m-0 leading-6 text-mute">{item.description}</p>

                <div className="my-4 rounded-xl border border-success/15 bg-success/[0.045] p-3">
                  <span className="text-[0.65rem] tracking-[0.1em] text-[#a4efcc]/70 uppercase">Resultado</span>
                  <strong className="mt-1 block text-sm font-semibold text-white">{item.result}</strong>
                </div>

                <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/8 bg-white/[0.025] px-3 py-1.5 text-xs font-semibold text-[#b9cde0]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-bold no-underline transition duration-200 hover:gap-2.5 ${
                    featured ? 'text-warm hover:text-[#ffe4b0]' : 'text-brand hover:text-brand-soft'
                  }`}
                  href={item.href}
                >
                  Ver {item.name}
                  <ArrowRightIcon />
                </a>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
