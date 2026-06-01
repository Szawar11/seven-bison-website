'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder'
import { contact } from '@/lib/config'

/**
 * FounderTeaser — compact homepage founder signal.
 * Full bio lives on /about. This is just the credential hook + direct CTA.
 * Replace the photo placeholder div with <Image> when Szymon's photo arrives.
 */

export function FounderTeaser() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-reveal]', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 83%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  return (
    <Section spacing="loose" surface="soft">
      <div ref={ref} className="grid grid-cols-1 gap-10 md:grid-cols-12">

        {/* Label column */}
        <div className="md:col-span-3">
          <Eyebrow rule data-reveal>Founder</Eyebrow>
        </div>

        {/* Text column */}
        <div className="md:col-span-5">
          <h2 data-reveal className="font-display text-content-primary">
            Szymon Wojewski.
          </h2>
          <p data-reveal className="mt-4 text-lead text-content-secondary">
            Bloomberg UK news editor. Getty Images.
            Then — Seven Bison.
          </p>
          <p data-reveal className="mt-4 text-body text-content-secondary">
            That background shapes how the studio works: editorial discipline,
            deadline reliability, and real comfort with complex subject matter.
            Every intro call goes through Szymon directly — no discovery-call
            relay, no sales handoff.
          </p>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={contact.calendly} external>
              Book a call with Szymon →
            </Button>
            <Button variant="text" href="/about">
              About the studio
            </Button>
          </div>
        </div>

        {/* Photo placeholder — swap for <Image src="/images/founder.jpg"> when asset is ready */}
        <div data-reveal className="md:col-span-4">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-canvas-muted">
            <MediaPlaceholder
              kind="portrait"
              spec="4:5 · 1600×2000 (recommended)"
              format="JPG / WebP · upload"
              hint="Szymon Wojewski — portrait"
              size="lg"
            />
          </div>
        </div>

      </div>
    </Section>
  )
}
