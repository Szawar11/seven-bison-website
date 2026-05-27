import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Portfolio — Selected work',
  description:
    'Selected video, motion design and animation work by Seven Bison across Tech, Heavy Industry, and Healthcare & Pharma.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero — Dark Cinematic (portfolio hero is dark per DESIGN.md) */}
      <section className="relative min-h-[65vh] dark-zone bg-canvas overflow-hidden">
        <div className="container-site flex min-h-[65vh] flex-col justify-end pb-16 pt-20">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 max-w-[16ch] font-display text-content-primary text-balance">
            Selected work.
          </h1>
          <p className="mt-5 max-w-readable text-lead text-content-secondary">
            Video, motion design and animation across three sectors.
            Craft at the brief's service, not for its own sake.
          </p>
        </div>
      </section>

      {/* Filterable grid — TODO: implement with real case studies */}
      <Section spacing="loose">
        <Eyebrow>All work</Eyebrow>
        <h2 className="mt-4 max-w-readable font-display text-content-primary">
          Filterable portfolio grid goes here.
        </h2>
        <p className="mt-4 max-w-readable text-lead text-content-secondary">
          Filter by sector (Tech, Heavy Industry, Healthcare & Pharma) and by service
          (motion design, character animation, AI cinematic, VFX, editing).
          Each piece opens to a full case study.
        </p>
      </Section>

      {/* Agency CTA */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow>Agencies</Eyebrow>
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
