type IconProps = {
  className?: string
}

export const ClockIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
    <path d="M12 7v5.2l3.2 1.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ShoeIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 15.5c2.2-.2 4.1.2 6 .9 1.6.6 3.2 1.1 5.2.9 2.4-.2 4.8-1.6 5.8-3.3.4-.7.2-1.4-.6-1.7-1.6-.6-3.1.1-4.4.4-1 .2-1.7-.2-2.1-1.1L12.4 8H8.2C5.6 8 3.8 10.2 4 12.8v2.7Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <path d="M8 15.2v2.3M11.2 16v2.2M14.5 16.1v2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
)

export const ChartIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 19h16M7 16v-4M12 16V8M17 16v-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
)

export const UsersIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M4.5 18.5c.6-2.4 2.4-3.8 4.5-3.8s3.9 1.4 4.5 3.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <circle cx="16.5" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M15.2 14.8c1.8.2 3.3 1.3 3.8 3.4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
)

export const GridIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.75" />
  </svg>
)

export const CartIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 6h2.2l1.3 9.2h9.8L19.5 8H7.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="19" r="1.2" fill="currentColor" />
    <circle cx="16.5" cy="19" r="1.2" fill="currentColor" />
  </svg>
)

export const ShieldIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 4 6 6.5v5.2c0 3.6 2.4 6.5 6 7.8 3.6-1.3 6-4.2 6-7.8V6.5L12 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="m9.2 12 1.9 1.9 3.7-3.8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SearchIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.75" />
    <path d="m16 16 3.5 3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
)

export const RocketIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M14.5 9.5 9 15M12 4c3.2 1.2 6.2 4.2 7.2 7.5-2.2.6-4.4-.2-6.2-1.5C11.2 8.7 10.4 6.5 12 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    <path d="M8.5 15.5c-1.4.4-2.8 1.6-3.5 3.5 1.9-.7 3.1-2.1 3.5-3.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
  </svg>
)

export const TrendIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 16.5 10 10l3.5 3.5L20 7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 7H20v5.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowRightIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const WhatsAppIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 4.5A7.5 7.5 0 0 0 5.3 15.7L4.5 19.5l3.9-.8A7.5 7.5 0 1 0 12.04 4.5Zm4.3 10.6c-.18.5-1.04.92-1.45 1-.38.07-.86.12-1.38-.09-.32-.12-.73-.24-1.26-.47-2.22-.96-3.67-3.2-3.78-3.35-.11-.15-.9-1.2-.9-2.29 0-1.08.57-1.61.77-1.83.2-.22.44-.27.58-.27h.42c.13 0 .32-.05.5.38.18.45.62 1.55.68 1.66.05.11.09.25.02.4-.07.15-.11.25-.22.38-.11.13-.23.29-.33.39-.11.11-.22.22-.1.43.13.22.56.92 1.2 1.49.82.73 1.52.96 1.74 1.07.22.11.35.09.48-.05.13-.15.54-.63.68-.85.15-.22.29-.18.48-.11.2.07 1.24.58 1.45.69.22.11.36.16.41.25.06.09.06.52-.12 1.02Z" />
  </svg>
)

export const FileIcon = ({ className = 'h-5 w-5' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <path d="M9 9h6M9 12h6M9 15h3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
  </svg>
)

export const MailIcon = ({ className = 'h-4 w-4' }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <path d="m4.5 7.5 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
