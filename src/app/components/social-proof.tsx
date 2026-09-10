import { Container } from './ui'

const items = [
  { value: 'Software house', text: 'Sistemas pensados para a rotina da empresa, não para o catálogo genérico.' },
  { value: 'Dois produtos', text: 'Ponto do Colaborador e Sistema 2D — cada um no problema certo.' },
  { value: 'Cuiabá, MT', text: 'Atendimento próximo, implantação acompanhada e suporte contínuo.' },
]

export const SocialProof = () => {
  return (
    <section className="border-y border-white/[0.06] py-10 sm:py-12" aria-label="Posicionamento">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
          {items.map((item) => (
            <article key={item.value}>
              <strong className="block text-sm font-semibold tracking-[0.04em] text-white uppercase">
                {item.value}
              </strong>
              <p className="mt-2 mb-0 text-sm leading-6 text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default SocialProof
