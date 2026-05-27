'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'
import { AnimatedPlaceholder, PlaceholderVariant } from '@/components/ui/AnimatedPlaceholder'

interface Props {
  sector: string
  headline: string
  intro: string
  vimeoUrl?: string
  posterUrl?: string
  ctaLabel?: string
  /** Which animated placeholder to show before the real reel arrives */
  placeholderVariant?: PlaceholderVariant
}

export function SectorHero({
  sector,
  headline,
  intro,
  vimeoUrl = '',
  posterUrl = '',
  ctaLabel,
  placeholderVariant = 'reel',
}: Props) {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.2,
      })
      tl.from('.sh-eyebrow', { y: 10, opacity: 0, duration: 0.5 })
        .from('.sh-headline',  { y: 44, opacity: 0, duration: 0.9 }, '-=0.2')
        .from('.sh-intro',     { y: 22, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.sh-cta',       { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.sh-reel',      { opacity: 0, duration: 1.2 }, 0.15)
    },
    { scope: heroRef },
  )

  return (
    <section
      ref={heroRef}
      className="relative min-h-[78vh] bg-canvas overflow-hidden"
    >
      <div className="grid min-h-[78vh] grid-cols-1 md:grid-cols-12">

        {/* Left — Light content */}
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-7 md:py-20 md:pl-[var(--site-margin)] md:pr-12 lg:pr-20">
          <p className="sh-eyebrow eyebrow">{sector}</p>
          <h1 className="sh-headline mt-4 max-w-[18ch] font-display text-content-primary text-balance">
            {headline}
          </h1>
          <p className="sh-intro mt-5 max-w-readable text-lead text-content-secondary">
            {intro}
          </p>
          <div className="sh-cta mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={contact.calendly} external>
              {ctaLabel ?? `Talk to us about a ${sector} project →`}
            </Button>
          </div>
        </div>

        {/* Right — Dark reel */}
        <div className="sh-reel relative dark-zone md:col-span-5 bg-canvas border-l border-[#E80787]">
          {vimeoUrl ? (
            <iframe
              src={`${vimeoUrl}?autoplay=1&loop=1&muted=1&background=1&controls=0`}
              allow="autoplay; fullscreen"
              allowFullScreen
              title={`${sector} reel`}
              className="absolute inset-0 h-full w-full"
              style={{ pointerEvents: 'none' }}
            />
          ) : (
            <>
              {/* Sector-specific brand animation until reel arrives */}
              <AnimatedPlaceholder variant={placeholderVariant} dark />
              {posterUrl && (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${posterUrl})` }}
                  role="img"
                  aria-label={`${sector} sector reel`}
                />
              )}
            </>
          )}
          <div className="aspect-[4/3] w-full md:hidden" />
        </div>
      </div>
    </section>
  )
}
