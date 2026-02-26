import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { useHeaderScroll } from '../../hooks/use-header-scroll'

export const AppHeader = () => {
  const [open, setOpen] = useState(false)
  const scrolled = useHeaderScroll(20)

  return (
    <header className={`app-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="brand" aria-label="VKLabs Tech — início">
          <img src={logo} alt="VKLabs Tech" className="brand-logo" />
        </a>

        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'open' : ''}`} role="navigation">
          <a href="#services" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#process" onClick={() => setOpen(false)}>Como funciona</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contato</a>
        </nav>

        <div className="header-cta desktop-only">
          <a className="btn primary" href="#contact">Entrar em contato</a>
        </div>
      </div>
    </header>
  )
}
