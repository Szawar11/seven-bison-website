'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

export interface Quote {
  text: string
  name: string
  title: string
  company: string
}

interface Props {
  eyebrow?: string
  quotes: Quote[]
}

export function Testimonials({ eyebrow = 'In their words', quotes }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.testimonial-card', {
        y: 36,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
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
    <Section spacing="loose" surface="soft">
      <div ref={ref}>
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>{eyebrow}</Eyebrow>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {quotes.map((q, i) => (
            <li key={i} className="testimonial-card">
              <blockquote className="h-full bg-white/60 backdrop-blur-md border border-white/80 shadow-sm p-8 flex flex-col">
                {/* Opening quote mark */}
                <span className="mb-4 block font-display text-[3rem] leading-none text-pink/30 select-none" aria-hidden="true">&ldquo;</span>
                <p className="font-body text-[1.1rem] italic leading-relaxed text-content-primary flex-1">
                  {q.text}
                </p>
                <footer className="mt-6 border-t border-hairline pt-5">
                  <p className="text-body-sm font-semibold text-content-primary">
                    {q.name}
                  </p>
                  <p className="mt-0.5 text-caption text-content-muted">
                    {q.title} · {q.company}
                  </p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
