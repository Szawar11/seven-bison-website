'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { sectors, contact } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { AnimatedPlaceholder } from '@/components/ui/AnimatedPlaceholder'

interface Props {
  /** Vimeo player embed URL — autoplay + muted + loop + background=1 */
  vimeoUrl?: string
  /** Static poster fallback while reel loads */
  posterUrl?: string
}

export function Hero({
  vimeoUrl = '',
  posterUrl = '/videos/reel-poster.jpg',
}: Props) {
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      /* ── Entrance timeline ──────────────────────────────────────────── */
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.3,
      })

      tl.from('.hero-eyebrow', { y: 12, opacity: 0, duration: 0.5 })
        .from('.hero-headline',  { y: 48, opacity: 0, duration: 0.9 }, '-=0.2')
        .from('.hero-lead',      { y: 24, opacity: 0, duration: 0.7 }, '-=0.5')
        .from('.hero-cta',       { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-industries > *', {
          y: 28, opacity: 0, stagger: 0.08, duration: 0.6,
        }, '-=0.35')
        .from('.hero-reel', { opacity: 0, duration: 1.4, ease: 'power2.out' }, 0.1)

      /* ── Scroll parallax — reel inner drifts at 85% of scroll speed ── */
      /*
       * .parallax-inner sits at top:-15% / bottom:-15% (extra bleed).
       * As the hero exits viewport, it moves DOWN by yPercent so the reel
       * appears to scroll slower than the rest of the page (depth illusion).
       */
      gsap.to('.hero-reel-inner', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    },
    { scope: heroRef },
  )

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] bg-canvas"
    >
      <div className="grid min-h-[92vh] grid-cols-1 md:grid-cols-12">

        {/* ── Left column — Light Corporate ────────────────────────────── */}
        <div className="flex flex-col justify-center px-6 py-16 md:col-span-7 md:py-20 md:pl-[var(--site-margin)] md:pr-12 lg:pr-20">

          <p className="hero-eyebrow eyebrow">
            Industry-specific · B2B · Premium
          </p>

          <h1 className="hero-headline mt-4 max-w-[16ch] text-content-primary font-display">
            Video craft and art,{' '}
            <span className="text-pink">delivered at scale.</span>
          </h1>

          <p className="hero-lead mt-6 max-w-readable text-lead text-content-secondary">
            Premium video, motion design and animation for B2B brands
            with complex, regulated, or hard-to-photograph subject matter.
          </p>

          <div className="hero-cta mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={contact.calendly} external>
              Book a call →
            </Button>
            <Button variant="secondary" href="/portfolio">
              See our work
            </Button>
          </div>

          {/* Industry tiles — border-based separators, no overflow-hidden */}
          <nav
            aria-label="Industries"
            className="hero-industries mt-10 grid grid-cols-1 border border-hairline sm:grid-cols-3"
          >
            {sectors.map((sector, i) => (
              <Link
                key={sector.slug}
                href={sector.href}
                className={[
                  'group flex flex-col gap-2 bg-canvas px-4 py-5',
                  'surface-interactive hover:bg-canvas-soft',
                  // Mobile: bottom divider between stacked tiles
                  i < sectors.length - 1 ? 'border-b border-hairline' : '',
                  // Desktop: swap bottom→right divider, remove from last tile
                  i < sectors.length - 1 ? 'sm:border-b-0 sm:border-r sm:border-hairline' : 'sm:border-b-0',
                ].filter(Boolean).join(' ')}
              >
                <span className="eyebrow text-[11px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-h3 font-semibold text-content-primary transition-colors duration-micro group-hover:text-pink text-balance">
                  {sector.title}
                </span>
                <span className="text-caption text-content-muted">
                  {sector.subtitle}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Right column — Dark Cinematic reel ───────────────────────── */}
        <div className="hero-reel relative dark-zone md:col-span-5 bg-canvas border-l border-[#E80787] overflow-hidden">
          {/*
           * .parallax-inner has top:-15% / bottom:-15% bleed.
           * GSAP ScrollTrigger moves it +yPercent as hero scrolls off,
           * making the reel appear to scroll at 85% of page speed.
           */}
          <div className="hero-reel-inner parallax-inner">
            {vimeoUrl ? (
              <iframe
                src={`${vimeoUrl}?autoplay=1&loop=1&muted=1&background=1&controls=0`}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Seven Bison reel"
                className="absolute inset-0 h-full w-full"
                style={{ pointerEvents: 'none' }}
              />
            ) : (
              <>
                {/* Animated brand placeholder — visible until real reel loads */}
                <AnimatedPlaceholder variant="reel" dark />
                {/* Poster image layers on top once the asset exists */}
                {posterUrl && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${posterUrl})` }}
                    role="img"
                    aria-label="Seven Bison showreel"
                  />
                )}
              </>
            )}
          </div>

          {/* Vignette — bottom edge only, sits above parallax-inner */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/40 to-transparent"
          />

          {/* Mobile aspect placeholder */}
          <div className="aspect-[4/3] w-full md:hidden" />
        </div>
      </div>
    </section>
  )
}
