import type { ReactNode } from 'react'

export const Layout = ({ children }: { children?: ReactNode }) => {
  return <div className="flex min-h-screen flex-col">{children}</div>
}

export default Layout
