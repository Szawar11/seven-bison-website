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
  title: 'Video for Heavy Industry — Manufacturing, Energy, Infrastructure',
  description:
    'Premium video, motion design and animation for manufacturing, energy, and infrastructure brands. Complex operations, made compelling.',
}

const painPoints = [
  {
    title: 'Operations that can\'t be filmed.',
    body: 'Offshore platforms, blast furnaces, cleanrooms, subsea pipelines — access is restricted, dangerous, or simply impossible. AI-native production removes the constraint.',
  },
  {
    title: 'Long approval chains.',
    body: 'Safety, legal, brand, and communications teams all review before anything goes public. Work that fails the first review costs weeks. We build it right the first time.',
  },
  {
    title: 'Complex systems for non-technical audiences.',
    body: 'Board presentations, investor decks, customer education — the same product needs to communicate across audiences. Motion design bridges the gap.',
  },
]

const cases = [
  {
    brand: 'Aramco',
    title: 'Energy infrastructure overview',
    summary: 'Large-scale operation explainer for global stakeholder communications.',
    poster: '/videos/case-aramco-poster.jpg',
    href: '/portfolio',
    subsector: 'Energy',
  },
  {
    brand: 'Hilti',
    title: 'Product launch series',
    summary: 'Multi-asset launch campaign for the construction tools market.',
    poster: '/videos/case-hilti-poster.jpg',
    href: '/portfolio',
    subsector: 'Manufacturing',
  },
  {
    brand: 'TF Kable',
    title: 'Subsea cable installation film',
    summary: 'Documenting a complex offshore infrastructure project.',
    poster: '/videos/case-tfkable-poster.jpg',
    href: '/portfolio',
    subsector: 'Infrastructure',
  },
]

const quotes = [
  {
    text: 'The level of technical understanding they brought was unlike any production partner we\'d worked with before.',
    name: 'Placeholder Name',
    title: 'Head of Marketing',
    company: 'Placeholder Company',
  },
]

export default function HeavyIndustryPage() {
  return (
    <>
      <SectorHero
        sector="Heavy Industry"
        headline="Video for operations that can't be filmed."
        intro="Manufacturing. Energy. Infrastructure. Logistics. We make complex industrial operations legible — for investors, customers, and internal teams."
        posterUrl="/videos/sector-heavy-poster.jpg"
        placeholderVariant="heavy"
      />

      <PainPoints
        eyebrow="Why this is hard"
        heading="The real challenges of industrial content."
        points={painPoints}
      />

      <SectorCaseGrid
        eyebrow="Selected heavy industry work"
        heading="Technical depth. Premium finish."
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
              Ongoing production for industrial brands.
            </h2>
            <p className="mt-4 max-w-readable text-lead text-content-secondary">
              Product launches, internal communications, safety training, investor
              relations — on a monthly cadence that scales with your content calendar.
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
              Talk to Szymon about a heavy industry project.
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
