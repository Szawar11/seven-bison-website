'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function EndToEndPartner() {
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
    },
    { scope: ref },
  )

  return (
    <Section spacing="default">
      <div ref={ref} className="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <Eyebrow rule data-reveal>02 · End-to-end partner</Eyebrow>
        </div>
        <div className="md:col-span-9">
          <h2
            data-reveal
            className="max-w-readable text-content-primary font-display"
          >
            Your end-to-end creative partner — from research and strategy,
            through concept and production, to final delivery.
          </h2>
          <p data-reveal className="mt-5 max-w-readable text-lead text-content-secondary">
            Available project-by-project, or on an ongoing basis through{' '}
            <a
              href="/studio-access"
              className="text-content-accent underline-offset-2 hover:underline"
            >
              Studio Access
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  )
}
