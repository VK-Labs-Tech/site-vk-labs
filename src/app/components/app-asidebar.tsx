export const AppSidebar = () => {
  return (
    <aside className="border-r border-line p-4">
      <nav>
        <ul className="m-0 flex list-none flex-col gap-2 p-0">
          <li>
            <a className="text-mute no-underline hover:text-brand" href="#home">
              Início
            </a>
          </li>
          <li>
            <a className="text-mute no-underline hover:text-brand" href="#ponto">
              Ponto
            </a>
          </li>
          <li>
            <a className="text-mute no-underline hover:text-brand" href="#sistema-2d">
              Sistema 2D
            </a>
          </li>
          <li>
            <a className="text-mute no-underline hover:text-brand" href="#contact">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
