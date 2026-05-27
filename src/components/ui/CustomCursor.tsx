'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

/**
 * CustomCursor — pink dot with delayed follow + state morphs.
 *
 * Behaviour
 *   • idle:        10px pink dot, mix-blend-mode: difference
 *   • over link:   32px ring (data-variant="link")
 *   • over video:  64px pink filled circle with "PLAY" label (data-variant="play")
 *   • touch device: hidden by CSS @media query
 *
 * Magnetic pull
 *   Any element with [data-magnetic] applies a subtle attraction to the cursor
 *   while hovered (button slightly translates toward cursor position).
 *
 * Note: GSAP quickTo is used for compositor-thread smoothness.
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Hide on touch
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' })

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      xTo(mouseX)
      yTo(mouseY)

      // Magnetic pull — applied to nearest data-magnetic element under cursor
      const target = (e.target as HTMLElement)?.closest('[data-magnetic]') as HTMLElement | null
      if (target) {
        const rect = target.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (mouseX - cx) * 0.25
        const dy = (mouseY - cy) * 0.25
        gsap.to(target, { x: dx, y: dy, duration: 0.4, ease: 'power3.out' })
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (!el) return

      // Play state — videos, posters, case cards
      if (el.closest('[data-cursor="play"]')) {
        cursor.dataset.variant = 'play'
        return
      }
      // Link state — anchors, buttons, role="button"
      if (el.closest('a, button, [role="button"], [data-cursor="link"]')) {
        cursor.dataset.variant = 'link'
        return
      }
      cursor.dataset.variant = 'default'
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-magnetic]') as HTMLElement | null
      if (target) {
        gsap.to(target, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      }
    }

    const handleMouseLeave = () => {
      cursor.dataset.variant = 'hidden'
    }
    const handleMouseEnter = () => {
      cursor.dataset.variant = 'default'
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
    document.addEventListener('mouseout', handleMouseOut, { passive: true })
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div ref={cursorRef} className="custom-cursor" data-variant="default" aria-hidden="true">
      <span className="custom-cursor-label">Play</span>
    </div>
  )
}
