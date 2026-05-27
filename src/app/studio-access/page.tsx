import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { Testimonials } from '@/components/sector/Testimonials'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Studio Access — Ongoing video on a monthly cadence',
  description:
    'Studio Access — ongoing video, motion design and animation on a monthly cadence. For brands with recurring content needs.',
}

const included = [
  'Editing of existing footage (webinars, demos, founder clips, customer interviews)',
  'Motion design and animation',
  'Animated explainers and product walkthroughs',
  'Product content and launch assets',
  'Cinematic AI image and video generation',
  'Graphic design and illustration',
  'Asset libraries built for channel reuse',
  'Scoped to your content calendar volume',
]

const steps = [
  {
    title: 'Brief',
    body: 'Monthly brief aligned to your content calendar and channel mix. No kickoff theatre — we align on deliverables and move.',
  },
  {
    title: 'Produce',
    body: 'Dedicated team, AI-native pipeline, human craft on every deliverable. 48-hour turnaround when the brief allows it.',
  },
  {
    title: 'Deliver',
    body: 'Predictable output. Asset libraries built for reuse across channels. Monthly review, continuous refinement.',
  },
]

const quotes = [
  {
    text: 'Studio Access changed how we think about content. We went from quarterly bursts to a consistent weekly output — with no extra headcount.',
    name: 'Placeholder Name',
    title: 'Global Content Lead',
    company: 'Roche',
  },
  {
    text: 'The predictability is the product. We know what we get each month, and it consistently passes MLR review on the first round.',
    name: 'Placeholder Name',
    title: 'Head of Digital',
    company: 'Bayer',
  },
]

export default function StudioAccessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] bg-canvas overflow-hidden">
        <div className="container-site flex min-h-[60vh] flex-col justify-end pb-16 pt-20">
          <p className="eyebrow">Studio Access</p>
          <h1 className="mt-4 max-w-[18ch] font-display text-content-primary text-balance">
            Ongoing video on a monthly cadence.
          </h1>
          <p className="mt-5 max-w-readable text-lead text-content-secondary">
            For brands with recurring content needs — internal marketing and comms
            teams running multiple channels who don&apos;t want one-off vendor friction.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" href={contact.calendly} external>
              Book a scoping call →
            </Button>
          </div>
        </div>
      </section>

      {/* What's included */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>What&apos;s included</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              A studio on retainer.
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-pink"
                    aria-hidden="true"
                  />
                  <span className="text-body text-content-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section spacing="loose">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>How it works</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              Three steps. Every month.
            </h2>
          </div>
        </div>
        <ol className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={i} className="group border-t border-pink pt-6 transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
              <span className="eyebrow text-[11px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display font-medium text-content-primary transition-colors duration-micro group-hover:text-pink">
                {s.title}
              </h3>
              <p className="mt-3 text-body text-content-secondary">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Customer story teaser */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Customer story</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <p className="eyebrow text-[11px] mb-3">Roche / Genentech</p>
            <h2 className="max-w-readable font-display text-content-primary">
              From quarterly bursts to weekly output — without extra headcount.
            </h2>
            <p className="mt-5 max-w-readable text-lead text-content-secondary">
              Roche&apos;s global HCP education team moved to Studio Access after finding
              that one-off vendor relationships couldn&apos;t keep pace with their omnichannel
              content calendar. Monthly cadence, MLR-ready assets, no ramp-up overhead
              each time a new market needed content.
            </p>
            <p className="mt-4 max-w-readable text-body text-content-secondary">
              {/* TODO: replace with real case study data + Vimeo embed when available */}
              Full case study arriving shortly — contact us for a reference call in the
              meantime.
            </p>
            <div className="mt-8">
              <Button variant="secondary" href={contact.calendly} external>
                Request a reference call
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Testimonials eyebrow="In their words" quotes={quotes} />

      {/* CTA */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Next step</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              Talk to us about Studio Access.
            </h2>
            <p className="mt-4 max-w-readable text-lead text-content-secondary">
              Every Studio Access engagement starts with a scoping call with the founder.
              Bring your content calendar — we&apos;ll scope the volume and structure in one call.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" href={contact.calendly} external>
                Book a scoping call →
              </Button>
              <Button variant="text" href={`mailto:${contact.email}`}>
                Email us instead
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
