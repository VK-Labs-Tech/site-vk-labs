import logo from '../../assets/logo.svg'
import { useState } from 'react'
import { useHeaderScroll } from '../../hooks/use-header-scroll'
import { Button, Container } from './ui'

const links = [
  { href: '#about', label: 'A empresa' },
  { href: '#projects', label: 'Produtos' },
  { href: '#process', label: 'Como trabalhamos' },
  { href: '#faq', label: 'FAQ' },
]

export const AppHeader = () => {
  const [open, setOpen] = useState(false)
  const scrolled = useHeaderScroll(12)

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl transition duration-200 ${
        scrolled
          ? 'border-white/8 bg-surface/90 shadow-[0_10px_30px_rgba(0,0,0,0.22)]'
          : 'border-transparent bg-surface/70'
      }`}
    >
      <Container className="flex min-h-[68px] items-center gap-6">
        <a href="#home" className="shrink-0 no-underline" aria-label="VK Labs Tech — início">
          <img
            src={logo}
            alt="VK Labs Tech"
            className="h-8 w-auto opacity-95 transition duration-200 hover:opacity-100"
          />
        </a>

        <button
          className="ml-auto flex h-10 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-transparent hover:bg-white/[0.04] md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-ink transition duration-200 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span className={`h-0.5 w-5 rounded-full bg-ink transition duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-5 rounded-full bg-ink transition duration-200 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>

        <nav
          className={`absolute top-[68px] right-4 left-4 z-50 flex-col items-stretch rounded-xl border border-white/10 bg-surface-soft p-2 shadow-panel md:static md:z-auto md:flex md:flex-1 md:flex-row md:items-center md:justify-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? 'flex' : 'hidden md:flex'
          }`}
          role="navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-mute no-underline transition duration-200 hover:bg-white/[0.04] hover:text-white md:px-3 md:py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-md px-3 py-2.5 text-sm font-medium text-mute no-underline transition duration-200 hover:bg-white/[0.04] hover:text-white md:hidden"
          >
            Contato
          </a>
        </nav>

        <div className="ml-auto hidden md:block">
          <Button href="#contact">Falar com a VK Labs</Button>
        </div>
      </Container>
    </header>
  )
}
