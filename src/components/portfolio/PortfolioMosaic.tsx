'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'

/**
 * PortfolioMosaic — full-bleed dark cinematic mosaic.
 * Larger and more varied than the home Selected Work block — this is the full archive.
 *
 * Layout: 12-col grid with mixed spans ("big", "wide", "tall", "square", "huge").
 * Each tile supports videoLoop autoplay on hover (paused otherwise).
 */
type Span = 'huge' | 'big' | 'wide' | 'tall' | 'square'

interface Work {
  brand: string
  title: string
  sector: string
  service: string
  span: Span
  poster?: string
  videoLoop?: string
  href: string
}

const works: Work[] = [
  { brand: 'Roche',        title: 'Mechanism of action animation', sector: 'Pharma',         service: 'Character Anim.', span: 'huge',   href: '/portfolio' },
  { brand: 'Aramco',       title: 'Energy infrastructure overview', sector: 'Energy',        service: 'Cinematic AI',    span: 'tall',   href: '/portfolio' },
  { brand: 'Hilti',        title: 'Product launch series',          sector: 'Manufacturing', service: 'Motion Design',    span: 'wide',   href: '/portfolio' },
  { brand: 'Outpost24',    title: 'Attack surface management',      sector: 'Cybersecurity', service: 'Motion Design',    span: 'square', href: '/portfolio' },
  { brand: 'Alacriti',     title: 'Real-time payments',             sector: 'Fintech',       service: 'Cinematic AI',    span: 'square', href: '/portfolio' },
  { brand: 'AWS',          title: 'Cloud migration case film',      sector: 'SaaS',          service: 'Editing',          span: 'big',    href: '/portfolio' },
  { brand: 'Bayer',        title: 'Patient education series',       sector: 'Pharma',        service: 'Motion Design',    span: 'tall',   href: '/portfolio' },
  { brand: 'TF Kable',     title: 'Subsea cable installation',      sector: 'Infrastructure', service: 'Editing',         span: 'wide',   href: '/portfolio' },
  { brand: 'Santen',       title: 'Ophthalmic product launch',      sector: 'Medtech',       service: 'Cinematic AI',    span: 'square', href: '/portfolio' },
  { brand: 'Sherwin Williams', title: 'Manufacturing showcase',     sector: 'Manufacturing', service: 'Motion Design',    span: 'square', href: '/portfolio' },
  { brand: 'Daikin',       title: 'Climate systems overview',       sector: 'Manufacturing', service: 'Cinematic AI',    span: 'square', href: '/portfolio' },
  { brand: 'R3',           title: 'Enterprise blockchain explainer', sector: 'Fintech',     service: 'Motion Design',    span: 'wide',   href: '/portfolio' },
]

const spanClasses: Record<Span, string> = {
  huge:   'col-span-12 md:col-span-12 aspect-[21/9]',
  big:    'col-span-12 md:col-span-8 aspect-[16/9]',
  wide:   'col-span-12 md:col-span-8 aspect-[16/9]',
  tall:   'col-span-12 md:col-span-4 aspect-[3/4]',
  square: 'col-span-12 sm:col-span-6 md:col-span-4 aspect-square',
}

function specBySpanPortfolio(span: Span): string {
  switch (span) {
    case 'huge':   return '21:9 · 2560×1097'
    case 'big':    return '16:9 · 1920×1080'
    case 'wide':   return '16:9 · 1920×1080'
    case 'tall':   return '3:4 · 1080×1440'
    case 'square': return '1:1 · 1080×1080'
  }
}

export function PortfolioMosaic() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('.portfolio-tile', {
        y: 56,
        opacity: 0,
        scale: 0.97,
        stagger: { each: 0.06, from: 'start' },
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.portfolio-grid',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const v = e.currentTarget.querySelector<HTMLVideoElement>('video[data-loop]')
    if (v) { v.currentTime = 0; void v.play().catch(() => {}) }
  }
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const v = e.currentTarget.querySelector<HTMLVideoElement>('video[data-loop]')
    if (v) v.pause()
  }

  return (
    <section ref={ref} className="dark-zone bg-canvas py-16 md:py-20">
      <div className="container-site">
        <ul className="portfolio-grid grid grid-cols-12 gap-3 md:gap-4">
          {works.map((work) => (
            <li
              key={`${work.brand}-${work.title}`}
              className={`portfolio-tile group relative overflow-hidden border border-hairline bg-canvas-muted ${spanClasses[work.span]}`}
            >
              <Link
                href={work.href}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="relative block h-full w-full"
                data-cursor="play"
              >
                {/* Video layer */}
                {work.videoLoop && (
                  <video
                    data-loop
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover"
                  >
                    <source src={work.videoLoop} type="video/mp4" />
                  </video>
                )}

                {/* Static poster fallback */}
                {work.poster ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url(${work.poster})` }}
                    role="img"
                    aria-label={`${work.brand} — ${work.title}`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-canvas-muted">
                    <MediaPlaceholder
                      kind="video-loop"
                      spec={specBySpanPortfolio(work.span)}
                      format="MP4 H.264 · upload"
                      hint="5–15s · muted · loop"
                      size="md"
                      dark
                    />
                  </div>
                )}

                {/* Gradient + captions */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                />
                <span className="absolute top-4 left-4 eyebrow text-[10px] !text-white bg-black/60 px-2 py-1 backdrop-blur-sm">
                  {work.sector}
                </span>
                <span className="absolute top-4 right-4 eyebrow text-[10px] !text-white/70">
                  {work.service}
                </span>
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <p className="eyebrow text-[10px] !text-pink mb-1">{work.brand}</p>
                  <p className="font-display text-[20px] font-medium leading-tight text-white md:text-[26px]">
                    {work.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
