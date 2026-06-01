'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { services } from '@/lib/config'

export function ServicesStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.services-header [data-reveal]', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      gsap.from('.service-row', {
        y: 24,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-list',
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
        {/* Header */}
        <div className="services-header mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule data-reveal>What we do</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 data-reveal className="max-w-readable font-display text-content-primary">
              Eight disciplines. One creative partner.
            </h2>
          </div>
        </div>

        {/* List — no icons, no boxes. Editorial line items with hairline dividers. */}
        <ul className="services-list border-t border-hairline">
          {services.map((service, i) => {
            const desc = 'description' in service ? service.description : undefined
            return (
              <li
                key={service.title}
                className="service-row group grid grid-cols-12 items-baseline gap-6 border-b border-hairline py-6 transition-colors duration-micro hover:bg-canvas"
              >
                {/* Number — small, monospace, no icon */}
                <span className="col-span-2 eyebrow tabular-nums text-[11px] md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 className="col-span-10 font-display text-[24px] font-medium leading-tight text-content-primary transition-colors duration-micro group-hover:text-pink md:col-span-5 md:text-[28px]">
                  {service.title}
                </h3>

                {/* Description — hidden on small screens, inline on desktop */}
                {desc && (
                  <p className="col-span-10 col-start-3 text-body text-content-secondary md:col-span-6 md:col-start-auto">
                    {desc}
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
