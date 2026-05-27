import type { Metadata } from 'next'
import { SectorHero } from '@/components/sector/SectorHero'
import { PainPoints } from '@/components/sector/PainPoints'
import { SectorCaseGrid } from '@/components/sector/SectorCaseGrid'
import { Testimonials } from '@/components/sector/Testimonials'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Video for Healthcare & Pharma — Medtech, Biotech, Pharma',
  description:
    'Premium video, motion design and animation for healthcare and pharma brands. MLR-aware production. Brand-safe. Built for omnichannel HCP deployment.',
}

const painPoints = [
  {
    title: 'MLR review at every stage.',
    body: 'Medical, legal, and regulatory review makes every piece of content a multi-approval process. Work that fails review costs weeks. We build it right the first time.',
  },
  {
    title: 'Complex science for multiple audiences.',
    body: 'MOA animations for HCPs, patient education for general audiences, investor communications for analysts — the same molecule needs to communicate across all three.',
  },
  {
    title: 'Omnichannel content at volume.',
    body: 'Congress content, HCP portals, patient apps, rep detail aids, social. The channel count is growing. Single-asset production doesn\'t scale. Studio Access does.',
  },
]

const cases = [
  {
    brand: 'Roche / Genentech',
    title: 'Mechanism of action animation',
    summary: 'Scientific explainer for HCP education across global markets.',
    poster: '/videos/case-roche-poster.jpg',
    href: '/portfolio/roche',
    subsector: 'Pharma',
  },
  {
    brand: 'Bayer',
    title: 'Patient education series',
    summary: 'Multi-asset patient education campaign across therapeutic areas.',
    poster: '/videos/case-bayer-poster.jpg',
    href: '/portfolio/bayer',
    subsector: 'Pharma',
  },
  {
    brand: 'Santen',
    title: 'Ophthalmic product launch',
    summary: 'Product launch film for specialty ophthalmology market.',
    poster: '/videos/case-santen-poster.jpg',
    href: '/portfolio/santen',
    subsector: 'Medtech',
  },
]

const quotes = [
  {
    text: 'They understood the MLR process without us having to explain it. That alone saved us two review rounds.',
    name: 'Placeholder Name',
    title: 'Head of Digital',
    company: 'Placeholder Company',
  },
]

export default function HealthcarepharmaPage() {
  return (
    <>
      <SectorHero
        sector="Healthcare & Pharma"
        headline="MLR-aware production for complex science."
        intro="Medtech. Biotech. Pharma. Health Systems. Brand-safe video built for HCP education, patient communication, and omnichannel deployment."
        posterUrl="/videos/sector-healthcare-poster.jpg"
        placeholderVariant="healthcare"
      />

      <PainPoints
        eyebrow="Why this is hard"
        heading="The real challenges of healthcare content."
        points={painPoints}
      />

      <SectorCaseGrid
        eyebrow="Selected healthcare & pharma work"
        heading="Science made clear. Audiences engaged."
        cases={cases}
      />

      <Testimonials eyebrow="In their words" quotes={quotes} />

      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Studio Access</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              Ongoing production for pharma and healthcare brands.
            </h2>
            <p className="mt-4 max-w-readable text-lead text-content-secondary">
              Congress content, HCP education, patient materials, social — on a
              monthly cadence built for the realities of regulated content.
            </p>
            <Button variant="text" href="/studio-access" className="mt-6">
              See how Studio Access works
            </Button>
          </div>
        </div>
      </Section>

      <Section spacing="loose">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Next step</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              Talk to Szymon about a healthcare or pharma project.
            </h2>
            <p className="mt-4 max-w-readable text-lead text-content-secondary">
              Every intro call goes through the founder directly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" href={contact.calendly} external>
                Book a call →
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
