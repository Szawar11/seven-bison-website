'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

interface Props {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
  alt?: string
  className?: string
}

/**
 * BeforeAfterSlider — drag-to-reveal compositor for source-vs-AI comparison.
 * Pointer events (mouse + touch via Pointer Events API).
 * Keyboard accessible: focus + arrow keys move handle 5% at a time.
 *
 * Built for AI video studios — proves the transformation visually.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Source',
  afterLabel = 'AI output',
  alt = 'Before / after comparison',
  className = '',
}: Props) {
  const [position, setPosition] = useState(50)
  const dragging = useRef(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback((clientX: number) => {
    if (!wrapRef.current) return
    const rect = wrapRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updatePosition(e.clientX)
  }

  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false
    ;(e.target as HTMLElement).releasePointerCapture(e.pointerId)
  }

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (document.activeElement !== wrapRef.current) return
      if (e.key === 'ArrowLeft')  { e.preventDefault(); setPosition((p) => Math.max(0, p - 5)) }
      if (e.key === 'ArrowRight') { e.preventDefault(); setPosition((p) => Math.min(100, p + 5)) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div
      ref={wrapRef}
      role="slider"
      tabIndex={0}
      aria-label={alt}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative aspect-video w-full select-none overflow-hidden border border-hairline bg-canvas-muted ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      data-cursor="play"
    >
      {/* After image — full bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${after})` }}
        aria-hidden="true"
      />
      {/* Before image — clipped by position */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${before})`, clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      />

      {/* Labels */}
      <span className="absolute top-4 left-4 eyebrow text-[10px] bg-canvas/90 px-2 py-1">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 eyebrow text-[10px] bg-canvas/90 px-2 py-1">
        {afterLabel}
      </span>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-px bg-pink"
        style={{ left: `${position}%`, transform: 'translateX(-0.5px)' }}
        aria-hidden="true"
      >
        <button
          type="button"
          aria-label="Drag to compare"
          className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-pink bg-canvas shadow-md transition-transform duration-200 ease-brand hover:scale-110"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L2 8l3 5M11 3l3 5-3 5" stroke="#E80787" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
