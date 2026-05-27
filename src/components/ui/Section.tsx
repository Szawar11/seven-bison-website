import { type ReactNode } from 'react'
import { Container } from '@/components/layout/Container'

type Spacing = 'tight' | 'default' | 'loose' | 'hero'
type Surface = 'canvas' | 'soft' | 'dark'

interface Props {
  spacing?: Spacing
  surface?: Surface
  className?: string
  id?: string
  children: ReactNode
}

const spacings: Record<Spacing, string> = {
  tight:   'py-10 md:py-14',
  default: 'py-14 md:py-20',
  loose:   'py-20 md:py-28',
  hero:    'pt-10 pb-16 md:pt-16 md:pb-24',
}

/*
 * Surface variants:
 *   canvas — default page background (var resolves to #F7F5F2 in light)
 *   soft   — one step warmer/darker than canvas
 *   dark   — adds .dark-zone scope → Dark Cinematic Mode
 *             Use for: selected work mosaic, any deliberate dark section
 */
const surfaces: Record<Surface, string> = {
  canvas: 'bg-canvas',
  soft:   'bg-canvas-soft',
  dark:   'bg-canvas dark-zone',  // bg-canvas inside dark-zone = black
}

export function Section({
  spacing = 'default',
  surface = 'canvas',
  className = '',
  id,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={`${spacings[spacing]} ${surfaces[surface]} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}
