import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { LogoWall } from '@/components/home/LogoWall'
import { EndToEndPartner } from '@/components/home/EndToEndPartner'
import { ServicesStrip } from '@/components/home/ServicesStrip'
import { SectorCards } from '@/components/home/SectorCards'
import { HowWeWork } from '@/components/home/HowWeWork'
import { FounderTeaser } from '@/components/home/FounderTeaser'
import { CapabilitiesMarquee } from '@/components/home/CapabilitiesMarquee'
import { AIPipelineSequence } from '@/components/home/AIPipelineSequence'
import { Testimonials } from '@/components/sector/Testimonials'
import { Section } from '@/components/ui/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Industry-specific video craft and art, delivered at scale',
  description:
    'Premium video, motion design and animation for B2B brands with complex, regulated, or hard-to-photograph subject matter.',
}

// Placeholder quotes — replace with real client quotes + full attribution
const homeQuotes = [
  {
    text: 'They turned a deeply technical cybersecurity platform into a film our sales team could actually use. Passed legal and brand review on the first round.',
    name: 'Placeholder Name',
    title: 'Head of Brand',
    company: 'Outpost24',
  },
  {
    text: 'The level of technical understanding they brought was unlike any production partner we had worked with before. They spoke the language of the buyer.',
    name: 'Placeholder Name',
    title: 'Head of Marketing',
    company: 'Hilti',
  },
  {
    text: 'They understood the MLR process without us having to explain it. That alone saved us two full review rounds.',
    name: 'Placeholder Name',
    title: 'Head of Digital',
    company: 'Roche',
  },
  {
    text: 'From brief to delivery in 48 hours — and the finish was premium. We have never moved that fast on content this regulated.',
    name: 'Placeholder Name',
    title: 'Global Content Lead',
    company: 'Bayer',
  },
]

export default function HomePage() {
  return (
    <>
      {/* §4.1 Hero — split frame (Light left, Dark reel right) */}
      <Hero />

      {/* §4.3 Ratings trust strip */}
      <TrustStrip />

      {/* §4.2 End-to-end partner positioning */}
      <EndToEndPartner />

      {/* Client logo wall — 18 anchor brands */}
      <LogoWall />

      {/* Capabilities marquee — infinite ticker between hero/logos and services */}
      <CapabilitiesMarquee />

      {/* §4.4 Services */}
      <ServicesStrip />

      {/* §4.5 Three industries — most important content block */}
      <SectorCards />

      {/* Studio Access teaser — between sectors and how-we-work */}
      <ScrollReveal>
        <Section spacing="loose">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow rule>Studio Access</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <h2 className="max-w-readable font-display text-content-primary">
                Ongoing production, not one-off friction.
              </h2>
              <p className="mt-4 max-w-readable text-lead text-content-secondary">
                Monthly cadence. Predictable output. Editing, motion design, AI cinematic
                generation, animated explainers, product content — scoped to volume and
                built around your content calendar.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="primary" href="/studio-access">
                  See how Studio Access works →
                </Button>
                <Button variant="secondary" href={contact.calendly} external>
                  Book a scoping call
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </ScrollReveal>

      {/* §4.7 How we work */}
      <HowWeWork />

      {/* AI Pipeline — scroll-scrubbed 4-stage transformation (dark zone) */}
      <AIPipelineSequence />

      {/*
        §4.6 Selected work mosaic — Dark Cinematic zone
        TODO: build 6–9 piece grid with autoplay on hover + Vimeo lightbox
      */}
      <ScrollReveal y={24}>
        <Section spacing="loose" surface="dark">
          <Eyebrow rule className="!text-content-accent">05 · Selected work</Eyebrow>
          <h2 className="mt-4 max-w-readable font-display text-content-primary">
            Less noise. More signal.
          </h2>
          <p className="mt-4 max-w-readable text-lead text-content-secondary">
            Selected pieces across sectors — autoplay on hover, click opens case study.
            Video assets arriving shortly.
          </p>
          <div className="mt-10">
            <Button variant="secondary" href="/portfolio">
              Browse portfolio →
            </Button>
          </div>
        </Section>
      </ScrollReveal>

      {/* §4.8 Testimonials */}
      <Testimonials eyebrow="07 · In their words" quotes={homeQuotes} />

      {/* §4.9 Founder signal */}
      <FounderTeaser />

      {/* Final CTA */}
      <ScrollReveal y={28} start="top 88%">
        <Section spacing="loose" surface="soft">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow rule>08 · Talk to us</Eyebrow>
            </div>
            <div className="md:col-span-9">
              <h2 className="max-w-readable font-display text-content-primary">
                Tell us about your project.
              </h2>
              <p className="mt-4 max-w-readable text-lead text-content-secondary">
                Every intro call goes through the founder directly.
                No discovery-call relay, no sales handoff.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button variant="primary" href={contact.calendly} external>
                  Book a call →
                </Button>
                <Button variant="secondary" href="/portfolio">
                  Review portfolio
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </ScrollReveal>
    </>
  )
}
