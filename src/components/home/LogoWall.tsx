'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

/**
 * LogoWall — 18 client brand names as placeholder text.
 * Replace the <span> text elements with <Image> SVG logos once assets arrive.
 * Kept deliberately low-key: 35% opacity, hover bumps to 65%.
 */

const brands = [
  'Aramco', 'Hilti', 'Roche', 'Bayer', 'Pfizer', 'Daikin',
  'AWS', 'Outpost24', 'Alacriti', 'Santen', 'Sherwin Williams', 'R3',
  'TF Kable', 'Harris Health', 'BT', 'KPMG', 'Paramount', 'MTV',
]

export function LogoWall() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('.logo-item', {
        opacity: 0,
        y: 8,
        stagger: 0.04,
        duration: 0.6,
        ease: 'power2.out',
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
    <section ref={ref} className="border-b border-hairline bg-canvas py-12">
      <div className="container-site">
        <div className="mb-8 flex items-baseline justify-between">
          <p className="eyebrow">Trusted by</p>
          <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-content-disabled">
            18 logos · SVG · monochrome · ~120×40
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {brands.map((name) => (
            <li
              key={name}
              className="logo-item flex aspect-[3/1] items-center justify-center border border-dashed border-hairline bg-canvas-soft px-2 transition-colors duration-micro hover:border-pink/40"
            >
              {/*
               * Placeholder box — replace whole <li> contents with:
               * <Image src={`/images/logos/clients/${slug}.svg`} alt={name}
               *        width={120} height={40} className="object-contain opacity-50 hover:opacity-80 transition-opacity" />
               */}
              <span className="font-display text-[11px] font-semibold uppercase tracking-label text-content-disabled select-none text-center">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
