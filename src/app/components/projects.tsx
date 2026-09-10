import { products } from '../../data/products'
import { ArrowRightIcon, BellIcon, ClockIcon, ShoeIcon, SignatureIcon } from './icons'
import { Badge, Container, GradientHeading } from './ui'

const icons = {
  ponto: ClockIcon,
  'sistema-2d': ShoeIcon,
  docflow: SignatureIcon,
  cobraflow: BellIcon,
}

const tones = {
  brand: { text: 'text-brand', hover: 'hover:text-brand-soft', icon: 'border-brand/20 bg-brand/[0.08] text-brand' },
  warm: { text: 'text-warm', hover: 'hover:text-[#f0d09a]', icon: 'border-warm/20 bg-warm/[0.08] text-warm' },
  doc: { text: 'text-doc', hover: 'hover:text-[#c2d0ff]', icon: 'border-doc/20 bg-doc/[0.08] text-doc' },
  success: { text: 'text-success', hover: 'hover:text-[#8ee0bd]', icon: 'border-success/20 bg-success/[0.08] text-success' },
}

export const Projects = () => {
  return (
    <section id="projects" className="border-t border-white/[0.06] py-20 sm:py-24" aria-label="Produtos">
      <Container>
        <div className="mb-12 max-w-2xl">
          <Badge>Produtos</Badge>
          <GradientHeading>Quatro sistemas, cada um no problema certo</GradientHeading>
          <p className="mt-4 text-base leading-7 text-mute">
            Ponto, varejo, contratos e cobrança. Escolha o fluxo que a operação precisa agora — o CobraFlow
            entra em breve.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {products.map((item) => {
            const Icon = icons[item.id]
            const tone = tones[item.tone]
            const developing = item.status === 'development'

            return (
              <article
                key={item.id}
                className="rounded-2xl border border-white/8 bg-surface-soft p-6 transition duration-200 hover:border-white/16"
              >
                <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg border ${tone.icon}`}>
                  <Icon />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-semibold tracking-[0.08em] uppercase ${tone.text}`}>{item.category}</span>
                  {developing && (
                    <span className="rounded-full border border-success/25 bg-success/[0.08] px-2 py-0.5 text-[0.62rem] font-semibold tracking-[0.06em] text-success uppercase">
                      Em desenvolvimento
                    </span>
                  )}
                </div>

                <h3 className="mt-2 mb-1 text-xl font-semibold text-white">{item.name}</h3>
                {item.url && (
                  <p className="mb-2 text-xs font-medium text-mute-dark">{item.url.replace('https://', '')}</p>
                )}
                <p className="m-0 leading-6 text-mute">{item.description}</p>

                <p className="mt-4 mb-0 border-l-2 border-white/12 pl-3 text-sm leading-6 text-ink-soft">{item.result}</p>

                <ul className="mt-4 mb-0 flex list-none flex-wrap gap-2 p-0">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-white/8 px-3 py-1 text-xs font-medium text-mute">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    className={`inline-flex items-center gap-2 text-sm font-semibold no-underline transition duration-200 hover:gap-2.5 ${tone.text} ${tone.hover}`}
                    href={item.href}
                  >
                    {developing ? `Ver prévia do ${item.name}` : `Ver detalhes`}
                    {!item.url && <ArrowRightIcon />}
                  </a>
                  {item.url && (
                    <a
                      className={`inline-flex items-center gap-2 text-sm font-semibold no-underline transition duration-200 hover:gap-2.5 ${tone.text} ${tone.hover}`}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar
                      <ArrowRightIcon />
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
