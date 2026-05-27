'use client'

import { useRef, type ReactNode } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

interface Props {
  children: ReactNode
  className?: string
  /** Starting Y offset in px (default 36) */
  y?: number
  /** GSAP delay before animation fires (default 0) */
  delay?: number
  /** Stagger children individually instead of the wrapper (default false) */
  stagger?: boolean
  /** Threshold — how far into viewport before triggering (default '86%') */
  start?: string
}

/**
 * ScrollReveal — wraps any content and animates it in as it enters the viewport.
 * Server-Component-safe: import from page.tsx and pass SC children as slots.
 *
 * Usage:
 *   <ScrollReveal>
 *     <Section>...</Section>
 *   </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className = '',
  y = 36,
  delay = 0,
  stagger = false,
  start = 'top 86%',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (stagger) {
        /* Animate direct children individually */
        gsap.from(ref.current!.children, {
          y,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        })
      } else {
        /* Animate the wrapper as one unit */
        gsap.from(ref.current, {
          y,
          opacity: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        })
      }
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={`sr-wrap ${className}`}>
      {children}
    </div>
  )
}
