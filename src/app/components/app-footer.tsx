import logo from '../../assets/logo.svg'
import { Container } from './ui'

export const AppFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="border-t border-white/[0.06] py-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block no-underline" aria-label="VK Labs Tech — início">
              <img src={logo} alt="VK Labs Tech" className="h-8 w-auto" />
            </a>
            <p className="mt-4 mb-0 max-w-xs text-sm leading-6 text-mute">
              Software house em Cuiabá. SaaS para jornada, contratos, cobrança e varejo de calçados.
            </p>
          </div>

          <div>
            <p className="m-0 text-xs font-semibold tracking-[0.1em] text-mute-dark uppercase">Produtos</p>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Produtos">
              <a
                className="text-sm text-mute no-underline transition hover:text-white"
                href="https://ponto.vklabs.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ponto do Colaborador
              </a>
              <a className="text-sm text-mute no-underline transition hover:text-white" href="#sistema-2d">
                Sistema 2D
              </a>
              <a
                className="text-sm text-mute no-underline transition hover:text-white"
                href="https://docflow.vklabs.online"
                target="_blank"
                rel="noopener noreferrer"
              >
                DocFlow
              </a>
              <a className="text-sm text-mute no-underline transition hover:text-white" href="#cobraflow">
                CobraFlow
              </a>
            </nav>
          </div>

          <div>
            <p className="m-0 text-xs font-semibold tracking-[0.1em] text-mute-dark uppercase">Empresa</p>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Empresa">
              <a className="text-sm text-mute no-underline transition hover:text-white" href="#about">
                A empresa
              </a>
              <a className="text-sm text-mute no-underline transition hover:text-white" href="#process">
                Como trabalhamos
              </a>
              <a className="text-sm text-mute no-underline transition hover:text-white" href="#faq">
                FAQ
              </a>
            </nav>
          </div>

          <div>
            <p className="m-0 text-xs font-semibold tracking-[0.1em] text-mute-dark uppercase">Contato</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                className="text-sm text-mute no-underline transition hover:text-white"
                href="mailto:contato@vklabs.tech"
              >
                contato@vklabs.tech
              </a>
              <a
                className="text-sm text-mute no-underline transition hover:text-white"
                href="https://wa.me/5565992823707"
                target="_blank"
                rel="noopener noreferrer"
              >
                +55 65 99282-3707
              </a>
              <span className="text-sm text-mute">Cuiabá, Mato Grosso</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-sm text-mute-dark sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} VK Labs Tech. Todos os direitos reservados.</span>
          <a className="text-mute-dark no-underline transition hover:text-mute" href="#home">
            vklabs.tech
          </a>
        </div>
      </Container>
    </footer>
  )
}
