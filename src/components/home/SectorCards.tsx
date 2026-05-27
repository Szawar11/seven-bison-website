'use client'

import { useRef, useCallback } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { sectors } from '@/lib/config'
import { AnimatedPlaceholder, PlaceholderVariant } from '@/components/ui/AnimatedPlaceholder'
import { ArrowRight } from 'lucide-react'

// TODO: replace with real sector reel poster paths when available
const sectorMedia: Record<string, { poster: string; vimeo?: string }> = {
  'tech':               { poster: '/videos/sector-tech-poster.jpg' },
  'heavy-industry':     { poster: '/videos/sector-heavy-poster.jpg' },
  'healthcare-pharma':  { poster: '/videos/sector-healthcare-poster.jpg' },
}

// Maps sector slug → AnimatedPlaceholder variant
const variantMap: Record<string, PlaceholderVariant> = {
  'tech':              'tech',
  'heavy-industry':    'heavy',
  'healthcare-pharma': 'healthcare',
}

export function SectorCards() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      /* Section header */
      gsap.from('.sector-header [data-reveal]', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.sector-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      /* Cards — stagger from bottom with subtle scale */
      gsap.from('.sector-card', {
        y: 48,
        opacity: 0,
        scale: 0.98,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sectors-grid',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  /*
   * 2.5D mouse-tracking tilt — applied to the thumbnail (.card-thumb).
   * During tracking: transition = 0ms for fluid feel.
   * On leave:        transition = 600ms spring-back.
   * Text content stays flat; only the image tilts → true 2.5D depth effect.
   */
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const thumb = e.currentTarget.querySelector<HTMLElement>('.card-thumb')
    if (!thumb) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 → +0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5  // -0.5 → +0.5
    thumb.style.transition = 'transform 0ms'
    thumb.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.04)`
  }, [])

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const thumb = e.currentTarget.querySelector<HTMLElement>('.card-thumb')
    if (!thumb) return
    thumb.style.transition = 'transform 650ms cubic-bezier(0.16, 1, 0.3, 1)'
    thumb.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)'
  }, [])

  return (
    <Section spacing="loose">
      <div ref={ref}>
        {/* Header */}
        <div className="sector-header mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule data-reveal>04 · Three industries</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 data-reveal className="max-w-readable font-display text-content-primary">
              Engineered for precision.
            </h2>
            <p data-reveal className="mt-4 max-w-readable text-lead text-content-secondary">
              Deep sector knowledge. The vocabulary of the buyer&apos;s world.
              Work that passes legal, brand, and technical review on the first round.
            </p>
          </div>
        </div>

        {/* Cards */}
        <ul className="sectors-grid grid grid-cols-1 gap-6 md:grid-cols-3">
          {sectors.map((sector) => {
            const media = sectorMedia[sector.slug]
            return (
              <li key={sector.slug} className="sector-card">
                <Link
                  href={sector.href}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className={[
                    'group flex h-full flex-col',
                    'border border-hairline bg-canvas',
                    'surface-interactive hover:border-pink card-lift',
                    'overflow-hidden',
                  ].join(' ')}
                >
                  {/* Thumbnail — receives 2.5D tilt via JS */}
                  <div className="card-thumb relative aspect-card w-full overflow-hidden bg-canvas-muted">
                    {/* Thematic animation — visible until real poster asset exists */}
                    <AnimatedPlaceholder
                      variant={variantMap[sector.slug] ?? 'reel'}
                      dark={false}
                    />
                    {/* Poster layers on top once the file is present */}
                    {media.poster && (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-brand group-hover:scale-[1.03]"
                        style={{ backgroundImage: `url(${media.poster})` }}
                        role="img"
                        aria-label={`${sector.title} sector work`}
                      />
                    )}
                  </div>

                  {/* Body — stays flat while thumbnail tilts */}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <span className="eyebrow text-[11px]">{sector.subtitle}</span>
                    <h3 className="font-display font-semibold text-content-primary transition-colors duration-micro group-hover:text-pink">
                      {sector.title}
                    </h3>
                    <p className="text-caption text-content-muted">
                      {sector.anchorBrands.join(' · ')}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-2 text-cta font-medium tracking-cta text-content-accent transition-all duration-micro group-hover:gap-3">
                      See our {sector.title.toLowerCase()} work
                      <ArrowRight size={14} strokeWidth={2} aria-hidden="true" className="transition-transform duration-micro group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
