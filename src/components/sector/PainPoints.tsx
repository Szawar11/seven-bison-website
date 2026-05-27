'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

interface PainPoint {
  title: string
  body: string
}

interface Props {
  eyebrow?: string
  heading: string
  points: PainPoint[]
}

export function PainPoints({ eyebrow = 'Why this is hard', heading, points }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        y: 28,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })
      gsap.from('.pain-point', {
        y: 36,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.pain-grid',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  return (
    <Section spacing="loose" surface="soft">
      <div ref={ref}>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule data-reveal>{eyebrow}</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 data-reveal className="max-w-readable font-display text-content-primary">
              {heading}
            </h2>
          </div>
        </div>

        <ul className="pain-grid grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <li key={i} className="pain-point border-t border-pink pt-6">
              <span className="eyebrow text-[11px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display font-medium text-content-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-body text-content-secondary">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
