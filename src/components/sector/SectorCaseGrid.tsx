'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'

export interface CaseStudy {
  brand: string
  title: string
  summary: string
  poster: string
  href: string
  subsector?: string
}

interface Props {
  eyebrow?: string
  heading: string
  cases: CaseStudy[]
}

export function SectorCaseGrid({ eyebrow = 'Selected work', heading, cases }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
      gsap.from('.case-card', {
        y: 44,
        opacity: 0,
        scale: 0.98,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.case-grid',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  return (
    <Section spacing="loose">
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

        <ul className="case-grid grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <li key={c.brand} className="case-card">
              <Link
                href={c.href}
                className="group flex h-full flex-col border border-hairline bg-canvas overflow-hidden surface-interactive hover:border-pink card-lift"
              >
                {/* Poster */}
                <div className="relative aspect-card w-full overflow-hidden bg-canvas-muted">
                  {/* Spec placeholder until real poster lands */}
                  <MediaPlaceholder
                    kind="video-poster"
                    spec="4:3 · 1280×960"
                    format="JPG poster + optional MP4 loop"
                    hint={c.brand}
                    size="md"
                  />
                  {c.poster && (
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url(${c.poster})` }}
                      role="img"
                      aria-label={`${c.brand} — ${c.title}`}
                    />
                  )}
                  {c.subsector && (
                    <span className="absolute top-3 left-3 eyebrow text-[10px] bg-canvas px-2 py-1">
                      {c.subsector}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <p className="eyebrow text-[10px]">{c.brand}</p>
                  <h3 className="font-display font-medium text-content-primary text-h4 transition-colors duration-micro group-hover:text-pink">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-body-sm text-content-muted">{c.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
