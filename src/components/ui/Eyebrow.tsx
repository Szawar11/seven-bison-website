import { type ElementType, type ReactNode } from 'react'

interface Props {
  as?: ElementType
  className?: string
  children: ReactNode
  /**
   * rule — adds a flex-1 hairline rule extending to the right of the label.
   * This is the Seven Bison "brand signature" eyebrow pattern from the design system:
   *
   *   03 · WHAT WE DO  ─────────────────────────────────────────────────────────
   *
   * Use for section headers. Omit for compact contexts (footer, badges, tags).
   */
  rule?: boolean
  /** Any extra HTML attributes (e.g. data-reveal for GSAP) */
  [key: string]: unknown
}

export function Eyebrow({
  as: Tag = 'p',
  className = '',
  children,
  rule = false,
  ...rest
}: Props) {
  if (rule) {
    return (
      <div className={`flex items-center gap-4 ${className}`} {...rest}>
        <Tag className="eyebrow shrink-0 whitespace-nowrap">{children}</Tag>
        <span className="flex-1 h-px bg-hairline" aria-hidden="true" />
      </div>
    )
  }

  return (
    <Tag className={`eyebrow ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
