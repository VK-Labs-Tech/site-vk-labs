import { products } from '../../data/products'
import { ArrowRightIcon, BellIcon, ClockIcon, ShoeIcon, SignatureIcon } from './icons'
import { Badge, Button, Container } from './ui'

const icons = {
  ponto: ClockIcon,
  'sistema-2d': ShoeIcon,
  docflow: SignatureIcon,
  cobraflow: BellIcon,
}

const tones = {
  brand: { label: 'text-brand', border: 'hover:border-brand/25' },
  warm: { label: 'text-warm', border: 'hover:border-warm/30' },
  doc: { label: 'text-doc', border: 'hover:border-doc/30' },
  success: { label: 'text-success', border: 'hover:border-success/30' },
}

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
            A VK Labs desenvolve SaaS para jornada, contratos, cobrança e varejo de calçados. Produtos
            prontos para implantar — e o CobraFlow em construção.
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
          {products.map((item) => {
            const Icon = icons[item.id]
            const tone = tones[item.tone]
            const developing = item.status === 'development'

            return (
              <a
                key={item.id}
                href={item.url ?? item.href}
                target={item.url ? '_blank' : undefined}
                rel={item.url ? 'noopener noreferrer' : undefined}
                className={`group rounded-2xl border border-white/8 bg-surface-soft p-6 no-underline transition duration-200 ${tone.border}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase ${tone.label}`}>
                    <Icon className="h-3.5 w-3.5" />
                    {item.category}
                  </span>
                  {developing && (
                    <span className="rounded-full border border-success/25 bg-success/[0.08] px-2 py-0.5 text-[0.62rem] font-semibold tracking-[0.06em] text-success uppercase">
                      Em desenvolvimento
                    </span>
                  )}
                </div>
                <h2 className="mt-3 mb-0 text-xl font-semibold text-white">{item.name}</h2>
                {item.url && (
                  <span className="mt-1 block text-xs font-medium text-mute-dark">
                    {item.url.replace('https://', '')}
                  </span>
                )}
                <p className="mt-2 mb-0 text-sm leading-6 text-mute">{item.pitch}</p>
                <span className={`mt-4 inline-flex text-sm font-semibold transition group-hover:gap-2 ${tone.label}`}>
                  {developing ? 'Ver prévia →' : item.url ? 'Acessar produto →' : 'Ver produto →'}
                </span>
              </a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Hero
