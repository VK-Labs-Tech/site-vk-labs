import { products } from '../../data/products'
import { ArrowRightIcon, ClockIcon, ShoeIcon } from './icons'
import { Badge, Container, GradientHeading } from './ui'

const icons = {
  ponto: ClockIcon,
  'sistema-2d': ShoeIcon,
}

export const Projects = () => {
  return (
    <section id="projects" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="Produtos">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Badge>Produtos</Badge>
          <GradientHeading>Dois sistemas, dois problemas de operação</GradientHeading>
          <p className="mt-4 text-base leading-7 text-mute">
            Cada produto cobre um fluxo completo. Escolha o que a sua operação precisa agora — ou os dois.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {products.map((item) => {
            const Icon = icons[item.id]
            const featured = item.id === 'sistema-2d'

            return (
              <article
                key={item.id}
                className={`rounded-2xl border bg-surface-soft p-6 transition duration-200 hover:border-white/16 ${
                  featured ? 'border-warm/18' : 'border-white/8'
                }`}
              >
                <div
                  className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg border ${
                    featured ? 'border-warm/20 bg-warm/[0.08] text-warm' : 'border-brand/20 bg-brand/[0.08] text-brand'
                  }`}
                >
                  <Icon />
                </div>

                <span
                  className={`text-xs font-semibold tracking-[0.08em] uppercase ${
                    featured ? 'text-warm' : 'text-brand'
                  }`}
                >
                  {item.category}
                </span>

                <h3 className="mt-2 mb-2 text-xl font-semibold text-white">{item.name}</h3>
                <p className="m-0 leading-6 text-mute">{item.description}</p>

                <p className="mt-4 mb-0 border-l-2 border-white/12 pl-3 text-sm leading-6 text-ink-soft">
                  {item.result}
                </p>

                <ul className="mt-4 mb-0 flex list-none flex-wrap gap-2 p-0">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/8 px-3 py-1 text-xs font-medium text-mute"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold no-underline transition duration-200 hover:gap-2.5 ${
                    featured ? 'text-warm hover:text-[#f0d09a]' : 'text-brand hover:text-brand-soft'
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
