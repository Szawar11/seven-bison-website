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

// Placeholder cases — replace with real data + poster paths when available
const placeholderCases = [
  { brand: 'Outpost24',       title: 'Attack surface management explainer', sector: 'Tech',             service: 'Motion Design' },
  { brand: 'Alacriti',        title: 'Real-time payments overview',          sector: 'Tech',             service: 'Cinematic AI' },
  { brand: 'AWS',             title: 'Cloud migration case film',            sector: 'Tech',             service: 'Editing' },
  { brand: 'Aramco',          title: 'Energy infrastructure overview',       sector: 'Heavy Industry',   service: 'Cinematic AI' },
  { brand: 'Hilti',           title: 'Product launch series',                sector: 'Heavy Industry',   service: 'Motion Design' },
  { brand: 'TF Kable',        title: 'Subsea cable installation film',       sector: 'Heavy Industry',   service: 'Editing' },
  { brand: 'Roche / Genentech', title: 'Mechanism of action animation',      sector: 'Healthcare',       service: 'Character Anim.' },
  { brand: 'Bayer',           title: 'Patient education series',             sector: 'Healthcare',       service: 'Motion Design' },
  { brand: 'Santen',          title: 'Ophthalmic product launch',            sector: 'Healthcare',       service: 'Cinematic AI' },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero — Dark Cinematic */}
      <section className="relative min-h-[65vh] dark-zone bg-canvas overflow-hidden">
        <div className="container-site flex min-h-[65vh] flex-col justify-end pb-16 pt-20">
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

      {/* Work grid — placeholder until real case studies are ready */}
      <Section spacing="loose">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>All work</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-content-primary">
              Films that pass review on the first round.
            </h2>
            <p className="mt-4 text-lead text-content-secondary">
              Video assets arriving shortly. Each piece opens to a full case study.
            </p>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {placeholderCases.map((c, i) => (
            <li key={i} className="group border border-hairline bg-canvas overflow-hidden surface-interactive hover:border-pink card-lift">
              {/* Thumbnail placeholder */}
              <div className="relative aspect-card w-full overflow-hidden bg-canvas-muted flex flex-col items-center justify-center gap-2">
                <svg viewBox="0 0 80 60" className="w-14 opacity-20" fill="none" aria-hidden="true">
                  <rect x="0.5" y="0.5" width="79" height="59" stroke="currentColor" strokeDasharray="5 3"/>
                  <line x1="0" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5"/>
                  <line x1="40" y1="0" x2="40" y2="60" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="40" cy="30" r="11" stroke="#E80787" strokeWidth="1.2" fill="none"/>
                  <polygon points="37,25.5 37,34.5 46,30" fill="#E80787" opacity="0.5"/>
                </svg>
                <p className="text-[10px] text-content-disabled tracking-wide uppercase">Video coming soon</p>
                {/* Sector badge */}
                <span className="absolute top-3 left-3 eyebrow text-[10px] bg-canvas px-2 py-1">
                  {c.sector}
                </span>
              </div>
              {/* Text */}
              <div className="flex flex-col gap-2 p-5">
                <p className="eyebrow text-[10px]">{c.brand}</p>
                <h3 className="font-display font-medium text-content-primary transition-colors duration-micro group-hover:text-pink">
                  {c.title}
                </h3>
                <p className="mt-1 text-caption text-content-muted">{c.service}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

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
