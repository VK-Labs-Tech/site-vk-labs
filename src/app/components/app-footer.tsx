import { Container } from './ui'

export const AppFooter = () => {
  return (
    <footer id="footer" className="border-t border-white/[0.06] py-9">
      <Container className="flex flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col">
          <strong>VKLabs Tech</strong>
          <span className="text-mute">© {new Date().getFullYear()} — Todos os direitos reservados</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Links do rodapé">
          <a className="text-mute no-underline transition duration-200 hover:text-brand" href="#ponto">
            Ponto
          </a>
          <a className="text-mute no-underline transition duration-200 hover:text-brand" href="#sistema-2d">
            Sistema 2D
          </a>
          <a className="text-mute no-underline transition duration-200 hover:text-brand" href="#process">
            Como funciona
          </a>
          <a className="text-mute no-underline transition duration-200 hover:text-brand" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex flex-col md:items-end">
          <a
            className="text-mute no-underline transition duration-200 hover:text-brand"
            href="mailto:contato@vklabs.tech"
          >
            contato@vklabs.tech
          </a>
          <a
            className="text-mute no-underline transition duration-200 hover:text-brand"
            href="https://wa.me/5565992823707"
            target="_blank"
            rel="noopener noreferrer"
          >
            +55 65 99282-3707
          </a>
        </div>
      </Container>
    </footer>
  )
}
