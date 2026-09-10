import { BuildingIcon, CheckIcon, PinIcon } from './icons'
import { Badge, Container, GradientHeading } from './ui'

const principles = [
  {
    icon: BuildingIcon,
    title: 'Empresa, não template',
    text: 'A VK Labs é uma software house: entendemos o processo, implantamos o produto e acompanhamos o uso real.',
  },
  {
    icon: CheckIcon,
    title: 'Produto no problema certo',
    text: 'Ponto para jornada. DocFlow para contratos. CobraFlow para cobrança. Sistema 2D para loja de calçados.',
  },
  {
    icon: PinIcon,
    title: 'Perto da operação',
    text: 'Diagnóstico, go-live e evolução com quem usa o sistema no dia a dia — de Cuiabá para o restante do Brasil.',
  },
]

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24" aria-label="A empresa">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <Badge>A empresa</Badge>
            <GradientHeading>Sistemas feitos para o dia a dia, não para a apresentação</GradientHeading>
            <p className="mt-5 max-w-xl text-base leading-7 text-mute">
              A VK Labs Tech constrói software operacional. O objetivo é simples: registrar o que acontece,
              organizar equipe, contrato, cobrança ou estoque, e entregar relatório sem retrabalho em planilha.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-mute">
              Trabalhamos com ciclo curto: diagnóstico da operação, implantação do produto e evolução com
              base no uso. Ponto, Sistema 2D, DocFlow e CobraFlow nascem desse jeito de trabalhar.
            </p>
          </div>

          <div className="grid gap-4">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className={`reveal reveal-delay-${index + 1} rounded-xl border border-white/8 bg-surface-soft p-5`}
              >
                <div className="mb-2 flex items-center gap-2 text-brand">
                  <item.icon className="h-4 w-4" />
                  <h3 className="m-0 text-base font-semibold text-white">{item.title}</h3>
                </div>
                <p className="m-0 text-sm leading-6 text-mute">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About
