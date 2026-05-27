'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * AIPipelineSequence — scroll-driven canvas transformation.
 *
 * Pins the section, then scrubs through 4 stages of the AI pipeline
 * as the user scrolls. Each stage is a CSS-styled SVG composition that
 * morphs into the next. Proves capability without needing real frames.
 *
 * When real frame assets arrive: replace each `Stage*` SVG with an
 * <Image> component and apply the same scroll-driven opacity logic.
 */
const stages = [
  { label: 'Brief',     copy: 'Brand goals + sector context + audience' },
  { label: 'Storyboard',copy: 'Concept frames + tone reference' },
  { label: 'AI gen',    copy: 'Cinematic AI rendering + iteration' },
  { label: 'Delivery',  copy: 'Color graded, sound designed, finished' },
]

export function AIPipelineSequence() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Pin the section and scrub stage opacity as user scrolls
      const stageEls = gsap.utils.toArray<HTMLElement>('.pipeline-stage')
      const labelEls = gsap.utils.toArray<HTMLElement>('.pipeline-label')

      // Initial state
      gsap.set(stageEls.slice(1), { opacity: 0, scale: 0.96 })
      gsap.set(labelEls.slice(1), { opacity: 0.3 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: '+=2400',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })

      stageEls.forEach((el, i) => {
        if (i === 0) return
        tl.to(stageEls[i - 1], { opacity: 0, scale: 0.96, duration: 1 }, i - 1)
        tl.to(el, { opacity: 1, scale: 1, duration: 1 }, i - 1)
        tl.to(labelEls[i - 1], { opacity: 0.3, duration: 0.6 }, i - 1)
        tl.to(labelEls[i], { opacity: 1, duration: 0.6 }, i - 1)
      })

      return () => {
        tl.kill()
      }
    },
    { scope: ref },
  )

  return (
    <Section spacing="loose" surface="dark">
      <div ref={ref}>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>The pipeline</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              From brief to film in four stages.
            </h2>
            <p className="mt-4 max-w-readable text-lead text-content-secondary">
              Scroll to walk the pipeline.
            </p>
          </div>
        </div>

        {/* Pinned viewport */}
        <div className="relative grid h-[80vh] grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
          {/* Stage visuals — overlapping, only one visible at a time */}
          <div className="relative aspect-[16/10] w-full md:col-span-8">
            {/* Stage 1 — Brief — grid + crosshair (planning) */}
            <div className="pipeline-stage absolute inset-0 flex items-center justify-center border border-hairline bg-canvas-muted">
              <svg viewBox="0 0 200 125" className="h-full w-full opacity-40" fill="none" aria-hidden="true">
                <defs>
                  <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="200" height="125" fill="url(#grid1)"/>
                <circle cx="100" cy="62.5" r="22" stroke="#E80787" strokeWidth="0.8" fill="none"/>
                <line x1="0" y1="62.5" x2="200" y2="62.5" stroke="#E80787" strokeWidth="0.3"/>
                <line x1="100" y1="0" x2="100" y2="125" stroke="#E80787" strokeWidth="0.3"/>
              </svg>
            </div>
            {/* Stage 2 — Storyboard — frame grid */}
            <div className="pipeline-stage absolute inset-0 flex items-center justify-center border border-hairline bg-canvas-muted">
              <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1 p-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="relative overflow-hidden border border-hairline bg-canvas-soft/30">
                    <span className="absolute top-1 left-1 text-[8px] text-content-disabled">F{i + 1}</span>
                    <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
                      <line x1="0" y1="0.5" x2="1" y2="0.5" stroke="#E80787" strokeWidth="0.01"/>
                      <line x1="0.5" y1="0" x2="0.5" y2="1" stroke="#E80787" strokeWidth="0.01"/>
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            {/* Stage 3 — AI gen — particle field + render glow */}
            <div className="pipeline-stage absolute inset-0 flex items-center justify-center overflow-hidden border border-hairline bg-canvas-muted">
              <svg viewBox="0 0 200 125" className="h-full w-full" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E80787" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#E80787" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="200" height="125" fill="url(#glow)"/>
                {Array.from({ length: 30 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={(i * 37) % 200}
                    cy={(i * 53) % 125}
                    r={0.5 + (i % 3) * 0.4}
                    fill="#E80787"
                    opacity={0.4 + (i % 5) * 0.12}
                  />
                ))}
                <circle cx="100" cy="62.5" r="35" stroke="#E80787" strokeWidth="0.5" fill="none" opacity="0.6"/>
                <circle cx="100" cy="62.5" r="50" stroke="#E80787" strokeWidth="0.3" fill="none" opacity="0.3"/>
              </svg>
            </div>
            {/* Stage 4 — Delivery — finished frame with title bar */}
            <div className="pipeline-stage absolute inset-0 flex flex-col border border-pink bg-canvas-muted">
              <div className="relative flex-1 overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(232,7,135,0.15) 0%, rgba(17,17,17,0.4) 60%, transparent 100%)' }} />
                <svg viewBox="0 0 200 90" className="h-full w-full" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
                  <circle cx="60" cy="45" r="22" fill="#E80787" opacity="0.85"/>
                  <circle cx="60" cy="45" r="35" stroke="#E80787" strokeWidth="0.4" fill="none" opacity="0.5"/>
                  <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                </svg>
                <span className="absolute top-3 left-3 eyebrow text-[10px] !text-white/80">Final · 4K H265</span>
              </div>
              <div className="border-t border-hairline bg-canvas-soft/40 px-4 py-2.5 flex items-center justify-between">
                <span className="text-[10px] text-content-muted tracking-wide uppercase">00:24 · Master</span>
                <span className="text-[10px] text-pink">● Approved</span>
              </div>
            </div>
          </div>

          {/* Stage labels — sidebar list */}
          <ol className="space-y-5 md:col-span-4">
            {stages.map((s, i) => (
              <li key={i} className="pipeline-label flex items-start gap-4 border-t border-hairline pt-4">
                <span className="eyebrow text-[11px] tabular-nums shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display text-[20px] font-medium leading-tight text-content-primary">
                    {s.label}
                  </p>
                  <p className="mt-1 text-caption text-content-muted">
                    {s.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
