import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to Seven Bison. Every intro call goes through the founder directly.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-canvas overflow-hidden">
        <div className="container-site flex min-h-[50vh] flex-col justify-end pb-16 pt-20">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-[16ch] font-display text-content-primary text-balance">
            Tell us about your project.
          </h1>
          <p className="mt-5 max-w-readable text-lead text-content-secondary">
            Every intro call goes through Szymon directly.
            No discovery-call relay, no sales handoff.
          </p>
        </div>
      </section>

      {/* Two ways to talk */}
      <Section spacing="loose">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow>Two ways to talk</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <div className="flex flex-col gap-8">

              {/* Calendly */}
              <div className="border-t border-pink pt-7">
                <h3 className="font-display font-medium text-content-primary">
                  Book a call
                </h3>
                <p className="mt-3 text-body text-content-secondary">
                  30 minutes with Szymon. Calendly opens in a new tab.
                </p>
                <div className="mt-5">
                  <Button variant="primary" href={contact.calendly} external>
                    Open Calendly →
                  </Button>
                </div>
              </div>

              {/* Email */}
              <div className="border-t border-hairline pt-7">
                <h3 className="font-display font-medium text-content-primary">
                  Email
                </h3>
                <p className="mt-3 text-body text-content-secondary">
                  Prefer to write? We reply within one working day.
                </p>
                <div className="mt-5">
                  <Button
                    variant="secondary"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
