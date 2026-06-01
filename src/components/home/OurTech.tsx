'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * OurTech — simple editorial section about AI approach and tools.
 * No diagrams, no pipelines, no scroll-scrub. Per Szymonek feedback:
 * just "jak podchodzimy do technologii i jakie wykorzystujemy".
 */

const stack = [
  { name: 'StreamDiffusion', use: 'Real-time AI video' },
  { name: 'Runway',          use: 'Generative scenes' },
  { name: 'ComfyUI',         use: 'Custom AI pipelines' },
  { name: 'Adobe Suite',     use: 'Editorial finishing' },
  { name: 'Cinema 4D',       use: '3D modelling & motion' },
  { name: 'After Effects',   use: 'Compositing & VFX' },
  { name: 'DaVinci Resolve', use: 'Color grading' },
  { name: 'Houdini',         use: 'Procedural effects' },
]

export function OurTech() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        y: 28,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
      gsap.from('.tech-tool', {
        y: 16,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.tech-grid',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  return (
    <Section spacing="loose">
      <div ref={ref} className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Label */}
        <div className="md:col-span-3">
          <Eyebrow rule data-reveal>Our tech</Eyebrow>
        </div>

        {/* Narrative */}
        <div className="md:col-span-9">
          <h2 data-reveal className="max-w-readable font-display text-content-primary">
            AI as engine. Craft as direction.
          </h2>
          <p data-reveal className="mt-5 max-w-readable text-lead text-content-secondary">
            We use AI where it removes constraints — location shoots that can&apos;t happen,
            timelines too tight for traditional pipelines, products that are too abstract,
            too regulated, or too sensitive to film. Everything else stays human:
            concept, story, taste, the cut.
          </p>
          <p data-reveal className="mt-4 max-w-readable text-body text-content-secondary">
            The stack moves fast. We pick what fits the brief — open-source where it gives
            us control, commercial tools where finish matters.
          </p>

          {/* Tools list — editorial typography, no logos, no boxes */}
          <ul className="tech-grid mt-12 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-2">
            {stack.map((t) => (
              <li
                key={t.name}
                className="tech-tool group flex items-baseline justify-between gap-4 border-b border-hairline pb-3"
              >
                <span className="font-display text-[18px] font-medium text-content-primary transition-colors duration-micro group-hover:text-pink">
                  {t.name}
                </span>
                <span className="text-caption text-content-muted tracking-wide">
                  {t.use}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
