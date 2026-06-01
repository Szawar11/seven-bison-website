'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'
import { AnimatedPlaceholder, PlaceholderVariant } from '@/components/ui/AnimatedPlaceholder'
import { VideoModal } from '@/components/ui/VideoModal'

interface Props {
  sector: string
  headline: string
  intro: string
  /** Short 5–15s autoplay teaser (mp4). */
  teaserSrc?: string
  /** Static poster while teaser loads. */
  posterUrl?: string
  /** Full sector reel — opens in modal on click. */
  showreelVimeoUrl?: string
  showreelVimeoId?: string
  showreelSrc?: string
  ctaLabel?: string
  placeholderVariant?: PlaceholderVariant
  /** @deprecated use teaserSrc + showreel* props */
  vimeoUrl?: string
}

/**
 * SectorHero v2 — full-width cinematic video panel with overlaid copy + CTAs.
 * Same architecture as homepage Hero (per Szymon feedback 2026-05-29).
 *
 * Click on video panel → opens modal with full sector reel.
 */
export function SectorHero({
  sector,
  headline,
  intro,
  teaserSrc,
  posterUrl,
  showreelVimeoUrl,
  showreelVimeoId,
  showreelSrc,
  ctaLabel,
  placeholderVariant = 'reel',
  vimeoUrl,
}: Props) {
  const heroRef = useRef<HTMLElement>(null)
  const [modalOpen, setModalOpen] = useState(false)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.2,
      })
      tl.from('.sh-panel', { opacity: 0, scale: 0.98, duration: 1.0, ease: 'expo.out' })
        .from('.sh-eyebrow', { y: 10, opacity: 0, duration: 0.5 }, '-=0.6')
        .from('.sh-headline', { y: 32, opacity: 0, duration: 0.9 }, '-=0.4')
        .from('.sh-intro', { y: 18, opacity: 0, duration: 0.7 }, '-=0.6')
        .from('.sh-cta > *', { y: 14, opacity: 0, stagger: 0.08, duration: 0.6 }, '-=0.4')
    },
    { scope: heroRef },
  )

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const handlePanelClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) return
    openModal()
  }

  // Backward compat — if old vimeoUrl prop passed, treat it as showreel URL
  const effectiveShowreelUrl = showreelVimeoUrl ?? vimeoUrl

  return (
    <section ref={heroRef} className="relative bg-canvas pt-6 md:pt-10">
      <div className="container-site">
        <div
          className="sh-panel dark-zone relative aspect-[16/9] w-full overflow-hidden border border-hairline bg-black cursor-pointer md:aspect-[21/9]"
          onClick={handlePanelClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal() } }}
          aria-label={`Watch ${sector} reel`}
          data-cursor="play"
        >
          {/* Video / placeholder background */}
          <div className="absolute inset-0">
            {teaserSrc ? (
              <video
                autoPlay muted loop playsInline poster={posterUrl}
                className="h-full w-full object-cover"
              >
                <source src={teaserSrc} type="video/mp4" />
              </video>
            ) : (
              <>
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
          </div>

          {/* Vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)' }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/50 to-transparent"
          />

          {/* Live indicator */}
          <div className="absolute top-5 right-5 flex items-center gap-2.5 text-[11px] text-white/80 tracking-widest uppercase z-10">
            <span className="h-2 w-2 rounded-full bg-pink animate-pulse" />
            {sector} reel
          </div>

          {/* Overlay copy */}
          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 md:px-12 md:pb-16 lg:px-20 lg:pb-20">
            <p className="sh-eyebrow eyebrow !text-pink">{sector}</p>
            <h1 className="sh-headline mt-3 max-w-[22ch] font-display text-white md:text-[clamp(40px,6vw,80px)]">
              {headline}
            </h1>
            <p className="sh-intro mt-5 max-w-[60ch] text-lead text-white/85">
              {intro}
            </p>
            <div className="sh-cta mt-7 flex flex-wrap items-center gap-4">
              <Button variant="primary" href={contact.calendly} external>
                {ctaLabel ?? `Talk to us about a ${sector} project →`}
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
                Watch reel
              </button>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        open={modalOpen}
        onClose={closeModal}
        vimeoUrl={effectiveShowreelUrl}
        vimeoId={showreelVimeoId}
        videoSrc={showreelSrc}
        title={`${sector} — full reel`}
      />
    </section>
  )
}
