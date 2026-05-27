import type { Metadata } from 'next'
import { SectorHero } from '@/components/sector/SectorHero'
import { SubsectorNav } from '@/components/sector/SubsectorNav'
import { PainPoints } from '@/components/sector/PainPoints'
import { SectorCaseGrid } from '@/components/sector/SectorCaseGrid'
import { Testimonials } from '@/components/sector/Testimonials'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Video for Tech — Cybersecurity, Fintech, Software, SaaS',
  description:
    'Premium video, motion design and animation for cybersecurity, fintech, software and SaaS brands. Hard-to-visualise products, made legible.',
}

const subsectorAnchors = [
  { label: 'Cybersecurity', href: '#cybersecurity' },
  { label: 'Fintech',       href: '#fintech' },
  { label: 'Software & SaaS', href: '#software-saas' },
]

// PLACEHOLDER — replace with sector-specific pain-point research
const painPoints = [
  {
    title: 'Hard-to-visualise products.',
    body: 'Cybersecurity, infrastructure, API platforms — buyers can\'t hold the product. Generic stock won\'t cut it. The work has to make abstract systems legible.',
  },
  {
    title: 'Brand and legal review at every stage.',
    body: 'Enterprise tech buyers route every asset through brand guidelines, legal, and compliance. The work has to pass review on the first round.',
  },
  {
    title: 'Recurring content, not single films.',
    body: 'Product launches, feature releases, integration partners, customer stories, event content. The need is constant. Single-vendor friction adds up fast.',
  },
]

// PLACEHOLDER — replace with real case study data
const cases = [
  {
    brand: 'Outpost24',
    title: 'Attack surface management explainer',
    summary: 'Cybersecurity platform launch film for a global audience.',
    poster: '/videos/case-outpost24-poster.jpg',
    href: '/portfolio/outpost24',
    subsector: 'Cybersecurity',
  },
  {
    brand: 'Alacriti',
    title: 'Real-time payments overview',
    summary: 'Fintech infrastructure explainer for enterprise banks.',
    poster: '/videos/case-alacriti-poster.jpg',
    href: '/portfolio/alacriti',
    subsector: 'Fintech',
  },
  {
    brand: 'AWS',
    title: 'Cloud migration case film',
    summary: 'Enterprise migration story produced under brand guidelines.',
    poster: '/videos/case-aws-poster.jpg',
    href: '/portfolio/aws',
    subsector: 'Software & SaaS',
  },
]

// PLACEHOLDER — replace with permitted client quotes
const quotes = [
  {
    text: 'They turned a deeply technical platform into a film our sales team could actually use.',
    name: 'Placeholder Name',
    title: 'Head of Brand',
    company: 'Placeholder Company',
  },
]

export default function TechPage() {
  return (
    <>
      <SectorHero
        sector="Tech"
        headline="Premium video for hard-to-visualise tech."
        intro="Cybersecurity. Fintech. Software. SaaS. We turn abstract systems into films your sales team, board, and analyst community actually use."
        posterUrl="/videos/sector-tech-poster.jpg"
        placeholderVariant="tech"
      />

      <SubsectorNav anchors={subsectorAnchors} />

      <PainPoints
        eyebrow="Why this is hard"
        heading="What enterprise tech buyers actually need."
        points={painPoints}
      />

      {/* Sub-sector anchors */}
      <Section id="cybersecurity" spacing="loose">
        <Eyebrow rule>Cybersecurity</Eyebrow>
        <h2 className="mt-4 max-w-readable font-display text-content-primary">
          Make the invisible legible.
        </h2>
        <p className="mt-4 max-w-readable text-lead text-content-secondary">
          Replace this with cybersecurity-specific copy: vocabulary, recurring content
          categories, regulatory framing, and named anchor brands.
        </p>
      </Section>

      <Section id="fintech" spacing="loose" surface="soft">
        <Eyebrow rule>Fintech</Eyebrow>
        <h2 className="mt-4 max-w-readable font-display text-content-primary">
          Trust earned in every frame.
        </h2>
        <p className="mt-4 max-w-readable text-lead text-content-secondary">
          Replace with fintech-specific copy: payments, infrastructure, regulated B2B,
          and the brand discipline required for buyers from card networks, banks, and
          processors.
        </p>
      </Section>

      <Section id="software-saas" spacing="loose">
        <Eyebrow rule>Software & SaaS</Eyebrow>
        <h2 className="mt-4 max-w-readable font-display text-content-primary">
          Launch velocity, premium finish.
        </h2>
        <p className="mt-4 max-w-readable text-lead text-content-secondary">
          Replace with SaaS copy: product launches, feature explainers, customer
          stories, integration partners, in-app onboarding films, and event content.
        </p>
      </Section>

      <SectorCaseGrid
        eyebrow="Selected tech work"
        heading="Films that pass review on the first round."
        cases={cases}
      />

      <Testimonials eyebrow="In their words" quotes={quotes} />

      {/* Studio Access teaser */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Studio Access</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              Ongoing partnership for tech brands.
            </h2>
            <p className="mt-4 max-w-readable text-lead text-content-secondary">
              Monthly cadence. Predictable output. Editing, motion, AI cinematic
              generation, animated explainers, product content — scoped to volume.
            </p>
            <Button variant="text" href="/studio-access" className="mt-6">
              See how Studio Access works
            </Button>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="loose">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Next step</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              Talk to Szymon about a tech project.
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
