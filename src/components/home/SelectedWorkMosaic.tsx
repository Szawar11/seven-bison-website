'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

/**
 * SelectedWorkMosaic — full-bleed cinematic mosaic per Szymon's feedback.
 * Large tiles, mixed sizes, dark cinematic zone.
 *
 * Each tile supports static poster OR autoplay loop video.
 * On hover: video starts playing (if defined).
 * Click: opens full case study (or portfolio page).
 *
 * Layout: 12-col grid with mixed row spans (BIG / wide / square).
 */
type Span = 'big' | 'wide' | 'tall' | 'square'

interface Work {
  brand: string
  title: string
  span: Span
  poster?: string         // image URL — placeholder layout when empty
  videoLoop?: string      // mp4/webm URL for autoplay on hover
  href: string
  sector: string
}

const works: Work[] = [
  { brand: 'Roche',        title: 'Mechanism of action',        sector: 'Pharma',      span: 'big',    href: '/portfolio' },
  { brand: 'Aramco',       title: 'Energy infrastructure',      sector: 'Energy',      span: 'tall',   href: '/portfolio' },
  { brand: 'Hilti',        title: 'Product launch series',      sector: 'Manufacturing', span: 'wide',  href: '/portfolio' },
  { brand: 'Outpost24',    title: 'Attack surface explainer',   sector: 'Cybersecurity', span: 'square', href: '/portfolio' },
  { brand: 'Alacriti',     title: 'Real-time payments',         sector: 'Fintech',     span: 'square', href: '/portfolio' },
  { brand: 'Bayer',        title: 'Patient education',          sector: 'Pharma',      span: 'wide',   href: '/portfolio' },
  { brand: 'AWS',          title: 'Cloud migration story',      sector: 'SaaS',        span: 'big',    href: '/portfolio' },
  { brand: 'Santen',       title: 'Ophthalmic launch',          sector: 'Medtech',     span: 'square', href: '/portfolio' },
  { brand: 'TF Kable',     title: 'Subsea installation',        sector: 'Infrastructure', span: 'square', href: '/portfolio' },
]

const spanClasses: Record<Span, string> = {
  big:    'col-span-12 md:col-span-8 md:row-span-2 aspect-[16/10]',
  wide:   'col-span-12 md:col-span-8 aspect-[16/9]',
  tall:   'col-span-12 md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-auto',
  square: 'col-span-12 sm:col-span-6 md:col-span-4 aspect-square',
}

export function SelectedWorkMosaic() {
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
      gsap.from('.mosaic-tile', {
        y: 48,
        opacity: 0,
        scale: 0.97,
        stagger: 0.06,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.mosaic-grid',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const v = e.currentTarget.querySelector<HTMLVideoElement>('video[data-loop]')
    if (v) {
      v.currentTime = 0
      void v.play().catch(() => {})
    }
  }
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const v = e.currentTarget.querySelector<HTMLVideoElement>('video[data-loop]')
    if (v) v.pause()
  }

  return (
    <section ref={ref} className="dark-zone bg-canvas py-20 md:py-28">
      {/* Header — wide container, not full bleed */}
      <div className="container-site mb-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-3">
            <Eyebrow rule className="!text-content-accent" data-reveal>Selected work</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 data-reveal className="font-display text-content-primary">
              Less noise. More signal.
            </h2>
            <p data-reveal className="mt-4 max-w-readable text-lead text-content-secondary">
              Hover for autoplay. Click for the full case study.
            </p>
          </div>
        </div>
      </div>

      {/* Full-bleed mosaic — edge-to-edge */}
      <div className="container-site">
        <ul className="mosaic-grid grid grid-cols-12 gap-3 md:gap-4">
          {works.map((work) => (
            <li
              key={work.brand}
              className={`mosaic-tile group relative overflow-hidden border border-hairline bg-canvas-muted ${spanClasses[work.span]}`}
            >
              <Link
                href={work.href}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="relative block h-full w-full"
                data-cursor="play"
              >
                {/* Video loop layer (top) — pauses by default, plays on hover */}
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

                {/* Poster — static background when video isn't playing */}
                {work.poster ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-brand group-hover:scale-[1.04]"
                    style={{ backgroundImage: `url(${work.poster})` }}
                    role="img"
                    aria-label={`${work.brand} — ${work.title}`}
                  />
                ) : (
                  /* Placeholder until assets land */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-canvas-muted">
                    <svg viewBox="0 0 80 60" className="w-16 opacity-40" fill="none" aria-hidden="true">
                      <rect x="0.5" y="0.5" width="79" height="59" stroke="rgba(255,255,255,0.18)" strokeDasharray="4 3"/>
                      <circle cx="40" cy="30" r="12" stroke="#E80787" strokeWidth="1.2" fill="none"/>
                      <polygon points="37,25 37,35 47,30" fill="#E80787" opacity="0.7"/>
                    </svg>
                    <span className="text-[10px] uppercase tracking-wider text-content-disabled">
                      Video coming soon
                    </span>
                  </div>
                )}

                {/* Bottom gradient + caption — visible always, intensifies on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Sector chip — top-left */}
                <span className="absolute top-4 left-4 eyebrow text-[10px] !text-white bg-black/60 px-2 py-1 backdrop-blur-sm">
                  {work.sector}
                </span>

                {/* Caption — bottom-left */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <p className="eyebrow text-[10px] !text-pink mb-1">{work.brand}</p>
                  <p className="font-display text-[20px] font-medium leading-tight text-white md:text-[24px]">
                    {work.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA below mosaic */}
        <div className="mt-12 flex justify-center">
          <Button variant="secondary" href="/portfolio">
            Browse full portfolio →
          </Button>
        </div>
      </div>
    </section>
  )
}
