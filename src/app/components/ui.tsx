import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ')

export const Container = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={cx('mx-auto w-full max-w-site px-5 sm:px-6', className)}>{children}</div>
)

export const Badge = ({ children }: { children: ReactNode }) => (
  <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/16 bg-brand/[0.045] px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.17em] text-brand uppercase">
    <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_12px_rgba(94,216,255,0.7)]" />
    {children}
  </p>
)

export const GradientHeading = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <h2
    className={cx(
      'bg-gradient-to-br from-white via-[#d9f8ff] to-[#79dfff] bg-clip-text text-3xl font-black tracking-[-0.025em] text-transparent sm:text-5xl sm:leading-[1.08]',
      className,
    )}
  >
    {children}
  </h2>
)

const buttonBase =
  'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border px-5 py-3 text-sm font-bold no-underline transition duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-brand/70'

const variants = {
  primary:
    'border-brand-soft/40 bg-gradient-to-br from-brand-soft to-brand text-[#04121d] shadow-[0_8px_30px_rgba(94,216,255,0.16)] hover:shadow-[0_14px_42px_rgba(94,216,255,0.28)]',
  ghost:
    'border-line bg-white/[0.025] text-ink-soft backdrop-blur-md hover:border-brand/25 hover:bg-brand/[0.055] hover:text-white',
}

type ButtonAsLink = {
  href: string
  variant?: keyof typeof variants
  size?: 'md' | 'lg'
  className?: string
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonAsButton = {
  href?: undefined
  variant?: keyof typeof variants
  size?: 'md' | 'lg'
  className?: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props
  const classes = cx(buttonBase, variants[variant], size === 'lg' && 'px-7 py-3.5 text-base', className)

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = rest as ButtonAsLink
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
