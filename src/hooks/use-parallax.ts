import { useEffect } from 'react'

export function useParallax() {
  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      document.documentElement.style.setProperty('--scroll-y', `${y}`)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
}
