import { Button, Container } from './ui'

export const CTA = () => {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-black tracking-[-0.025em] sm:text-4xl">
            Pronto para implantar Ponto ou Sistema 2D?
          </h2>
          <p className="mt-2 max-w-xl text-mute">
            Agende uma conversa com a VK Labs e veja o que faz sentido para a sua operação.
          </p>
        </div>
        <Button href="mailto:contato@vklabs.tech" size="lg">
          Entrar em contato
        </Button>
      </Container>
    </section>
  )
}

export default CTA
