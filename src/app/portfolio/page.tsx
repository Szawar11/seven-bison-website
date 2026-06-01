import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { PortfolioMosaic } from '@/components/portfolio/PortfolioMosaic'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Portfolio — Selected work',
  description:
    'Selected video, motion design and animation work by Seven Bison across Tech, Heavy Industry, and Healthcare & Pharma.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero — Dark Cinematic, full bleed */}
      <section className="relative min-h-[55vh] dark-zone bg-canvas overflow-hidden">
        <div className="container-site flex min-h-[55vh] flex-col justify-end py-16 md:py-20">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 max-w-[16ch] font-display text-content-primary text-balance">
            Selected work.
          </h1>
          <p className="mt-5 max-w-readable text-lead text-content-secondary">
            Video, motion design and animation across three sectors.
            Craft at the brief&apos;s service, not for its own sake.
          </p>
        </div>
      </section>

      {/* Full-bleed mosaic — large mixed tiles, video loop on hover */}
      <PortfolioMosaic />

      {/* Agency CTA */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Agencies</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              White-label production partner.
            </h2>
            <p className="mt-4 max-w-readable text-lead text-content-secondary">
              We work with agencies as a white-label production partner for overflow,
              specialist work, or retained capacity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" href={contact.calendly} external>
                Talk to us →
              </Button>
              <Button variant="secondary" href={`mailto:${contact.email}`}>
                Email us
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
