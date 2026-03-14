export const AppFooter = () => {
  return (
    <footer id="footer" className="app-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <strong>VKLabs Tech</strong>
          <span>© {new Date().getFullYear()} — Todos os direitos reservados</span>
        </div>

        <nav className="footer-links" aria-label="Links do rodapé">
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
          <a href="#process">Como funciona</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="footer-contact">
          <a href="mailto:contato@vklabs.tech">contato@vklabs.tech</a>
          <a href="https://wa.me/5565992823707" target="_blank" rel="noopener noreferrer">
            +55 65 99282-3707
          </a>
        </div>
      </div>
    </footer>
  )
}
