export const AppFooter = () => {
  return (
    <footer id="footer" className="app-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} VKLabs Tech — Todos os direitos reservados</div>
        <div className="footer-links">
          <a href="#services">Serviços</a>
          <a href="#process">Como funciona</a>
        </div>
      </div>
    </footer>
  );
}