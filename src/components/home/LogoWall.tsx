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
    <section ref={ref} className="border-b border-hairline bg-canvas py-10">
      <div className="container-site">
        <p className="eyebrow mb-7 text-center">Trusted by</p>
        <ul className="grid grid-cols-3 gap-x-6 gap-y-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {brands.map((name) => (
            <li
              key={name}
              className="logo-item flex items-center justify-center"
            >
              {/*
               * TODO: replace this <span> with:
               * <Image src={`/images/logos/clients/${slug}.svg`} alt={name}
               *        width={96} height={32} className="object-contain opacity-35 hover:opacity-60 transition-opacity" />
               */}
              <span className="font-display text-[11px] font-semibold uppercase tracking-label text-content-primary opacity-35 transition-opacity duration-micro hover:opacity-65 select-none">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
