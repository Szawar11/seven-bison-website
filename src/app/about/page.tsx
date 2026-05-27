import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import { contact } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Seven Bison is a premium B2B video and motion studio. AI-native production, human craft. Founder-led.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] bg-canvas overflow-hidden">
        <div className="container-site flex min-h-[50vh] flex-col justify-end pb-16 pt-20">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 max-w-[18ch] font-display text-content-primary text-balance">
            Editorial discipline. AI-native production.
          </h1>
        </div>
      </section>

      {/* Studio */}
      <Section spacing="loose">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow>The studio</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              A studio built for serious B2B.
            </h2>
            <p className="mt-5 max-w-readable text-lead text-content-secondary">
              Seven Bison is a premium B2B video, motion design and animation studio
              based in Gdańsk, working globally. We partner with brands in complex,
              regulated, and visually-challenged industries — explaining, persuading,
              and inspiring with confidence.
            </p>
            <p className="mt-4 max-w-readable text-body text-content-secondary">
              AI-native production. Human craft. Launch-ready in 48 hours when
              the brief demands it.
            </p>
          </div>
        </div>
      </Section>

      {/* Founder — heavy artillery, not buried */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow>Founder</Eyebrow>
          </div>
          <div className="md:col-span-9">
            {/* TODO: add Szymon's photo when available */}
            <h2 className="max-w-readable font-display text-content-primary">
              Szymon Wojewski.
            </h2>
            <p className="mt-5 max-w-readable text-lead text-content-secondary">
              Background in news editing at Bloomberg UK and Getty Images before
              building Seven Bison. That background shapes how the studio works:
              editorial discipline, deadline reliability, and comfort with complex
              subject matter.
            </p>
            <p className="mt-4 max-w-readable text-body text-content-secondary">
              Every intro call goes through Szymon directly.
            </p>
            <div className="mt-8">
              <Button variant="primary" href={contact.calendly} external>
                Book a call with Szymon →
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section spacing="loose">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow>Team</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              A small core. Specialist depth.
            </h2>
            <p className="mt-5 max-w-readable text-lead text-content-secondary">
              {/* TODO: add team blocks with photos and brief credentials */}
              Core team and specialist collaborators. Photos and credentials
              to follow. No headcount numbers — depth signals scale here,
              not headcount claims.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
