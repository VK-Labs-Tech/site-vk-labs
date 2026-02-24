import logo from '../../assets/logo.svg'

import { useState } from 'react'

export const AppHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="app-header">
      <div className="container header-inner">
        <div className="brand">
          <img src={logo} alt="VKLabs Tech" className="brand-logo" />
        </div>

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
  );
};