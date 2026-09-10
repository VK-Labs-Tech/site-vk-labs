import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ')

export const Container = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={cx('mx-auto w-full max-w-site px-5 sm:px-6 lg:px-8', className)}>{children}</div>
)

export const Badge = ({ children }: { children: ReactNode }) => (
  <p className="mb-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.12em] text-brand uppercase">
    <span className="h-px w-6 bg-brand/70" aria-hidden="true" />
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
      'text-[1.75rem] font-semibold tracking-[-0.03em] text-white sm:text-4xl sm:leading-[1.15]',
      className,
    )}
  >
    {children}
  </h2>
)

const buttonBase =
  'relative inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold no-underline transition duration-200 hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-brand/70'

const variants = {
  primary:
    'border-brand/30 bg-brand text-[#06202a] shadow-[0_8px_24px_rgba(78,196,232,0.16)] hover:bg-brand-soft',
  ghost:
    'border-white/12 bg-transparent text-ink-soft hover:border-white/20 hover:bg-white/[0.04] hover:text-white',
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
  const classes = cx(buttonBase, variants[variant], size === 'lg' && 'px-6 py-3 text-[0.95rem]', className)

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
