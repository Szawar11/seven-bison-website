import Link from 'next/link'
import { type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'text'

interface Props {
  variant?: Variant
  href?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
}

/* Shared base — structure only, no colors */
const base =
  'group inline-flex items-center gap-2 font-body text-cta tracking-cta' +
  ' transition-all duration-micro ease-brand focus-visible:outline-2' +
  ' focus-visible:outline-offset-4 focus-visible:outline-pink' +
  ' disabled:pointer-events-none disabled:opacity-40'

const variants: Record<Variant, string> = {
  /*
   * Primary — filled pink, inverse text
   * Light mode: off-white text on pink. Dark mode: ink text on pink.
   * text-content-inverse resolves via CSS var to the correct value per mode.
   */
  primary:
    'bg-pink text-content-inverse px-6 py-3 hover:bg-pink-hover btn-glow' +
    ' active:translate-y-px',

  /*
   * Secondary — pink outline
   */
  secondary:
    'border border-pink text-content-accent px-6 py-3 hover:bg-pink-10' +
    ' active:translate-y-px',

  /*
   * Tertiary — neutral outline (utility / admin actions)
   */
  tertiary:
    'border border-hairline text-content-primary px-6 py-3' +
    ' hover:border-[#8A8A8A] active:translate-y-px',

  /*
   * Ghost — dashed pink outline
   */
  ghost:
    'border border-dashed border-pink text-content-accent px-6 py-3' +
    ' hover:border-solid active:translate-y-px',

  /*
   * Text — inline action with arrow
   */
  text:
    'text-content-accent hover:gap-3 p-0',
}

export function Button({
  variant = 'primary',
  href,
  external = false,
  type = 'button',
  className = '',
  onClick,
  children,
  disabled,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`

  // Primary / secondary CTAs get magnetic pull (subtle attraction to cursor)
  const magneticAttr = (variant === 'primary' || variant === 'secondary') ? { 'data-magnetic': '' } : {}

  if (href) {
    if (external || href.startsWith('http') || href.startsWith('mailto')) {
      return (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={classes}
          {...magneticAttr}
        >
          {children}
          {variant === 'text' && <ArrowRight size={14} strokeWidth={2} aria-hidden="true" className="transition-transform duration-micro group-hover:translate-x-1" />}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} {...magneticAttr}>
        {children}
        {variant === 'text' && <ArrowRight size={14} strokeWidth={2} aria-hidden="true" className="transition-transform duration-micro group-hover:translate-x-1" />}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...magneticAttr}
    >
      {children}
      {variant === 'text' && <span aria-hidden="true">→</span>}
    </button>
  )
}
