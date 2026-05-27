'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { CountUp } from '@/components/ui/CountUp'

interface Props {
  google?: { rating: number; count: number }
  clutch?: { rating: number; count: number }
}

// TODO: replace with actual SVG logos from /public/images/logos/clients/
const logos = ['BT', 'KPMG', 'AWS', 'Paramount', 'MTV']

export function TrustStrip({
  google = { rating: 5.0, count: 24 },
  clutch = { rating: 4.9, count: 18 },
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.trust-logo', {
        y: 10,
        opacity: 0,
        stagger: 0.07,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })
      gsap.from('.trust-rating', {
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="border-y border-hairline bg-canvas py-6">
      <div className="container-site">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Ratings */}
          <div className="trust-rating flex items-center gap-5 text-caption text-content-muted">
            <span className="flex items-center gap-1.5">
              <span className="text-pink">★</span>
              <CountUp
                to={google.rating}
                decimals={1}
                duration={1200}
                className="font-medium tabular-nums text-content-primary"
              />
              <span>Google (<CountUp to={google.count} duration={1400} className="tabular-nums" />)</span>
            </span>
            <span className="h-4 w-px bg-hairline" aria-hidden="true" />
            <span className="flex items-center gap-1.5">
              <span className="text-pink">★</span>
              <CountUp
                to={clutch.rating}
                decimals={1}
                duration={1200}
                className="font-medium tabular-nums text-content-primary"
              />
              <span>Clutch (<CountUp to={clutch.count} duration={1400} className="tabular-nums" />)</span>
            </span>
          </div>

          {/* Client name placeholders — replace with <Image> tags when SVGs are ready */}
          <ul className="flex items-center gap-7">
            {logos.map((name) => (
              <li
                key={name}
                className="trust-logo font-display text-h4 font-semibold uppercase tracking-label text-content-primary opacity-40 transition-opacity duration-micro hover:opacity-70"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
