'use client'

import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * CapabilitiesMarquee — CSS-only infinite scroll ticker.
 * 12 capability labels duplicated for seamless loop.
 * Pauses on hover (CSS rule). Edge mask softens the loop seam.
 * Zero JS overhead beyond initial render.
 */
const capabilities = [
  'Cinematic AI',
  'Motion Design',
  'Character Animation',
  'VFX & Compositing',
  'Editorial',
  'Pharma MLR',
  'Cybersecurity',
  'Heavy Industry',
  '3D Modelling',
  'Short-form Edit',
  'Brand Strategy',
  'Sound Design',
]

export function CapabilitiesMarquee() {
  // Duplicate the list so animation can shift by -50% seamlessly
  const items = [...capabilities, ...capabilities]

  return (
    <section className="border-t border-b border-hairline bg-canvas-soft py-7">
      <div className="container-site mb-5 flex items-center justify-between">
        <Eyebrow>What we cover</Eyebrow>
        <Eyebrow className="!text-content-muted">12 disciplines</Eyebrow>
      </div>

      <div className="marquee">
        <ul className="marquee-track">
          {items.map((label, i) => (
            <li
              key={i}
              className="group flex items-center gap-6 px-6 font-display text-[28px] font-medium leading-none text-content-primary md:text-[36px] lg:text-[42px]"
            >
              <span className="transition-colors duration-micro hover:text-pink">
                {label}
              </span>
              <span className="text-pink/40 select-none">·</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
