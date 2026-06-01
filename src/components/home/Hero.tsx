'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { sectors, contact } from '@/lib/config'
import { Button } from '@/components/ui/Button'
import { AnimatedPlaceholder } from '@/components/ui/AnimatedPlaceholder'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { VideoModal } from '@/components/ui/VideoModal'

interface Props {
  /**
   * Short 5–15 second teaser reel — autoplays muted as hero background.
   * MP4 url, served from /public/videos/ or CDN.
   */
  teaserSrc?: string
  /** Poster shown while teaser loads or autoplay blocked. */
  posterUrl?: string
  /** Full Vimeo / direct video link — opens in modal on click. */
  showreelVimeoUrl?: string
  showreelVimeoId?: string
  showreelSrc?: string
}

/**
 * Hero v2 — full-width cinematic video panel with overlaid headline + CTAs.
 *
 * Per Szymon feedback (2026-05-29):
 *   • full bleed wide video
 *   • headline + CTAs ON the video
 *   • click anywhere on the video → opens modal with full showreel
 *   • teaser autoplays muted/looped as background
 *   • industry tiles BELOW the video panel (not in split column)
 */
export function Hero({
  teaserSrc,
  posterUrl,
  showreelVimeoUrl,
  showreelVimeoId,
  showreelSrc,
}: Props) {
  const heroRef = useRef<HTMLElement>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.25,
      })

      tl.from('.hero-video-panel', { opacity: 0, scale: 0.98, duration: 1.2, ease: 'expo.out' })
        .from('.hero-eyebrow', { y: 12, opacity: 0, duration: 0.5 }, '-=0.8')
        .to('.hero-headline .line', {
          y: '0%',
          stagger: 0.1,
          duration: 1.0,
          ease: 'expo.out',
        }, '-=0.6')
        .from('.hero-lead', { y: 20, opacity: 0, duration: 0.7 }, '-=0.7')
        .from('.hero-cta > *', { y: 16, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.4')
        .from('.hero-industries > *', {
          y: 28, opacity: 0, stagger: 0.08, duration: 0.6,
        }, '-=0.2')

      /* Subtle parallax — video moves slower than page */
      gsap.to('.hero-video-inner', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      })
    },
    { scope: heroRef },
  )

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  // Click on video panel opens modal — UNLESS click came from a button/link (stopPropagation on those)
  const handlePanelClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) return
    openModal()
  }

  return (
    <section ref={heroRef} className="relative bg-canvas pt-6 md:pt-10">
      <div className="container-site">
        {/* ──────────────────────────────────────────────────────────────
         * MAIN VIDEO PANEL — full width, dark cinematic, overlaid content
         * Click anywhere outside CTAs → opens modal.
         * ──────────────────────────────────────────────────────────────*/}
        <div
          className="hero-video-panel dark-zone relative aspect-[16/9] w-full overflow-hidden border border-hairline bg-black cursor-pointer md:aspect-[21/9]"
          onClick={handlePanelClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal() } }}
          aria-label="Watch showreel"
          data-cursor="play"
        >
          {/* Video background — autoplays muted */}
          <div className="hero-video-inner absolute inset-x-0 -top-[8%] -bottom-[8%]">
            {teaserSrc ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={posterUrl}
                className="h-full w-full object-cover"
              >
                <source src={teaserSrc} type="video/mp4" />
              </video>
            ) : (
              <>
                {/* Animated brand placeholder until teaser arrives */}
                <AnimatedPlaceholder variant="reel" dark />
                {posterUrl && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${posterUrl})` }}
                    role="img"
                    aria-label="Seven Bison showreel preview"
                  />
                )}
                {/* Floating spec card — only visible until real teaser is wired in */}
                <div className="absolute top-1/2 left-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 border border-white/15 bg-black/55 px-5 py-4 backdrop-blur-sm">
                  <MediaPlaceholder
                    kind="showreel"
                    spec="21:9 · 1920×823 (recommended)"
                    format="Teaser MP4 H.264 · upload to /public/videos/"
                    hint="5–15s · muted · loop · ≤ 6 MB"
                    size="md"
                    dark
                  />
                  <p className="mt-3 text-center text-[10px] uppercase tracking-[0.18em] text-white/60 font-mono">
                    + full Vimeo URL for modal showreel
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Vignette — radial darkness around edges for content legibility */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
          />

          {/* Bottom gradient — strong dark fade for headline area */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/50 to-transparent"
          />

          {/* Top-right showreel timecode chip */}
          <div className="absolute top-5 right-5 flex items-center gap-2.5 text-[11px] text-white/80 tracking-widest uppercase z-10">
            <span className="h-2 w-2 rounded-full bg-pink animate-pulse" />
            Showreel · 2026
          </div>

          {/* Top-left play indicator */}
          <div className="absolute top-5 left-5 flex items-center gap-2.5 text-[11px] text-white/70 tracking-widest uppercase z-10">
            ● Live
          </div>

          {/* ── Overlaid content — bottom-left ── */}
          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 md:px-12 md:pb-16 lg:px-20 lg:pb-20">
            <p className="hero-eyebrow eyebrow !text-pink">
              Industry-specific · B2B · Premium
            </p>

            <h1 className="hero-headline mt-3 max-w-[24ch] font-display text-white md:text-[clamp(48px,7vw,96px)]">
              <span className="line-reveal">
                <span className="line">Enterprise video,</span>
              </span>
              <span className="line-reveal">
                <span className="line">faster. Safer.</span>
              </span>
              <span className="line-reveal">
                <span className="line text-pink">Better.</span>
              </span>
            </h1>

            <p className="hero-lead mt-5 max-w-[60ch] text-lead text-white/85">
              Premium video, motion design and animation for B2B brands with complex,
              regulated, or hard-to-photograph subject matter.
            </p>

            <div className="hero-cta mt-7 flex flex-wrap items-center gap-4">
              <Button variant="primary" href={contact.calendly} external>
                Talk to our team →
              </Button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); openModal() }}
                className="group inline-flex items-center gap-3 text-cta tracking-cta text-white transition-colors hover:text-pink"
              >
                <span className="flex h-12 w-12 items-center justify-center border border-white/40 transition-all group-hover:border-pink group-hover:bg-pink/10">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <polygon points="2,1 12,7 2,13" fill="currentColor" />
                  </svg>
                </span>
                Watch showreel
              </button>
            </div>
          </div>
        </div>

        {/* ── Industry tiles — BELOW the video panel ── */}
        <nav
          aria-label="Industries"
          className="hero-industries mt-6 grid grid-cols-1 border border-hairline sm:grid-cols-3"
        >
          {sectors.map((sector, i) => (
            <Link
              key={sector.slug}
              href={sector.href}
              className={[
                'group flex flex-col gap-2 bg-canvas px-5 py-6 md:px-7 md:py-8',
                'surface-interactive hover:bg-canvas-soft',
                i < sectors.length - 1 ? 'border-b border-hairline' : '',
                i < sectors.length - 1 ? 'sm:border-b-0 sm:border-r sm:border-hairline' : 'sm:border-b-0',
              ].filter(Boolean).join(' ')}
            >
              <span className="eyebrow text-[10px] text-content-muted tracking-widest">
                {sector.subtitle}
              </span>
              <span className="font-display text-[28px] font-semibold leading-tight text-content-primary transition-colors duration-micro group-hover:text-pink md:text-[34px] text-balance">
                {sector.title}
              </span>
              <span className="mt-1 flex items-center gap-2 text-cta font-medium tracking-cta text-content-accent">
                See work
                <span aria-hidden="true" className="transition-transform duration-micro group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Full showreel modal */}
      <VideoModal
        open={modalOpen}
        onClose={closeModal}
        vimeoUrl={showreelVimeoUrl}
        vimeoId={showreelVimeoId}
        videoSrc={showreelSrc}
        title="Seven Bison — full showreel"
      />
    </section>
  )
}
