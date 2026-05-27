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

// Placeholder team members — replace with real data when available
const teamPlaceholders = [
  { role: 'Motion Designer', speciality: '2D / 3D Animation' },
  { role: 'AI Production Lead', speciality: 'Cinematic & VFX' },
  { role: 'Creative Strategist', speciality: 'Concept & Script' },
]

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
            <Eyebrow rule>The studio</Eyebrow>
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

      {/* Founder — photo placeholder + bio */}
      <Section spacing="loose" surface="soft">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Founder</Eyebrow>
          </div>

          {/* Bio column */}
          <div className="md:col-span-5">
            <h2 className="font-display text-content-primary">
              Szymon Wojewski.
            </h2>
            <p className="mt-4 text-lead text-content-secondary">
              Bloomberg UK news editor. Getty Images.
              Then — Seven Bison.
            </p>
            <p className="mt-4 text-body text-content-secondary">
              Background in news editing at Bloomberg UK and Getty Images before
              building Seven Bison. That background shapes how the studio works:
              editorial discipline, deadline reliability, and real comfort with
              complex subject matter.
            </p>
            <p className="mt-4 text-body text-content-secondary">
              Every intro call goes through Szymon directly — no discovery-call
              relay, no sales handoff.
            </p>
            <div className="mt-8">
              <Button variant="primary" href={contact.calendly} external>
                Book a call with Szymon →
              </Button>
            </div>
          </div>

          {/* Photo placeholder — replace <div> with <Image> when photo is ready */}
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-hairline bg-canvas-muted">
              {/* Placeholder grid lines — remove once real photo is in */}
              <svg
                className="absolute inset-0 h-full w-full opacity-20"
                viewBox="0 0 4 5"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="0" y1="2.5" x2="4" y2="2.5" stroke="#E80787" strokeWidth="0.04" />
                <line x1="2" y1="0" x2="2" y2="5"   stroke="#E80787" strokeWidth="0.04" />
              </svg>
              <p className="absolute inset-0 flex items-center justify-center text-caption text-content-disabled">
                Founder photo
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Team — placeholder cards */}
      <Section spacing="loose">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule>Team</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 className="max-w-readable font-display text-content-primary">
              A small core. Specialist depth.
            </h2>
            <p className="mt-5 max-w-readable text-lead text-content-secondary">
              Core team and specialist collaborators. Chosen for sector depth,
              not headcount.
            </p>

            {/* Team placeholder cards — replace with real team data when ready */}
            <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {teamPlaceholders.map((member, i) => (
                <li key={i} className="border border-hairline bg-canvas-soft">
                  {/* Photo placeholder */}
                  <div className="relative aspect-square overflow-hidden bg-canvas-muted">
                    <svg
                      className="absolute inset-0 h-full w-full opacity-15"
                      viewBox="0 0 1 1"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <line x1="0" y1="0.5" x2="1" y2="0.5" stroke="#E80787" strokeWidth="0.01" />
                      <line x1="0.5" y1="0" x2="0.5" y2="1" stroke="#E80787" strokeWidth="0.01" />
                    </svg>
                    <p className="absolute inset-0 flex items-center justify-center text-caption text-content-disabled">
                      Photo
                    </p>
                  </div>
                  {/* Name + role */}
                  <div className="p-5">
                    <p className="font-display font-medium text-content-disabled">
                      Team member {i + 1}
                    </p>
                    <p className="mt-1 text-caption text-content-disabled">
                      {member.role}
                    </p>
                    <p className="mt-0.5 eyebrow text-[10px] text-content-disabled">
                      {member.speciality}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
