'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

const pillars = [
  {
    title: 'From brief to film, fast.',
    body: 'Launch-ready video in 48 hours when the brief is tight. End-to-end production without the months-long timeline.',
  },
  {
    title: 'No expensive shoots required.',
    body: 'AI-native production removes the cost and logistics of location shoots, talent, and travel — without compromising finish.',
  },
  {
    title: 'AI-native production, human craft.',
    body: 'AI is the engine. Strategy, judgment, taste and storytelling stay human. The result is craft at speed.',
  },
]

export function HowWeWork() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.hww-header [data-reveal]', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.hww-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.hww-pillar', {
        y: 36,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.hww-pillars',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  return (
    <Section spacing="loose" surface="soft">
      <div ref={ref}>
        <div className="hww-header mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule data-reveal>06 · How we work</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 data-reveal className="max-w-readable font-display text-content-primary">
              Performance without compromise.
            </h2>
          </div>
        </div>

        <ul className="hww-pillars grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <li key={i} className="hww-pillar group border-t-[1px] border-pink pt-7 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
              <span className="eyebrow text-[11px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display font-medium text-content-primary transition-colors duration-micro group-hover:text-pink">
                {p.title}
              </h3>
              <p className="mt-4 text-body text-content-secondary">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
