import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Page not found',
  description: 'The page you were looking for does not exist.',
}

export default function NotFound() {
  return (
    <Section spacing="loose">
      <div className="min-h-[60vh] grid grid-cols-1 gap-10 md:grid-cols-12 items-center">
        <div className="md:col-span-3">
          <Eyebrow rule>Error 404</Eyebrow>
        </div>

        <div className="md:col-span-9">
          {/* Big stylized 404 — uses brand cinematic feel */}
          <p
            aria-hidden="true"
            className="font-display text-[clamp(120px,18vw,220px)] leading-none font-bold tracking-tighter text-content-primary"
          >
            4<span className="text-pink">0</span>4
          </p>

          <h1 className="mt-6 max-w-readable font-display text-content-primary">
            This page hit the cutting room floor.
          </h1>

          <p className="mt-5 max-w-readable text-lead text-content-secondary">
            The URL doesn&apos;t match any of our work. Maybe one of these takes you where you meant to go:
          </p>

          {/* Helpful links */}
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { href: '/',           label: 'Homepage' },
              { href: '/portfolio',  label: 'Portfolio' },
              { href: '/tech',       label: 'Tech sector' },
              { href: '/heavy-industry',     label: 'Heavy Industry' },
              { href: '/healthcare-pharma',  label: 'Healthcare & Pharma' },
              { href: '/studio-access',      label: 'Studio Access' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-center justify-between border border-hairline bg-canvas-soft px-4 py-3 surface-interactive hover:border-pink"
                >
                  <span className="font-medium text-content-primary transition-colors duration-micro group-hover:text-pink">
                    {item.label}
                  </span>
                  <span aria-hidden="true" className="text-content-muted transition-all duration-micro group-hover:text-pink group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button variant="primary" href="/">
              Back to homepage →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
