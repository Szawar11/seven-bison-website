'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  to: number
  duration?: number          // ms
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
  trigger?: 'mount' | 'view' // when to start the count
}

/**
 * CountUp — animates from 0 to `to`. Fires on viewport entry by default.
 * Uses requestAnimationFrame for smooth 60fps numerical interpolation.
 * Ease-out cubic for that "settling" feel.
 */
export function CountUp({
  to,
  duration = 1400,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  trigger = 'view',
}: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    const animate = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const elapsed = now - start
        const t = Math.min(elapsed / duration, 1)
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3)
        setValue(to * eased)
        if (t < 1) requestAnimationFrame(tick)
        else setValue(to)
      }
      requestAnimationFrame(tick)
    }

    if (trigger === 'mount') {
      animate()
      return
    }

    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate()
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration, trigger])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
