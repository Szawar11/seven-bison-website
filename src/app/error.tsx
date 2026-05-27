'use client'

import { useEffect } from 'react'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

/**
 * Global error boundary. Renders on any uncaught exception in a route segment.
 * Provides a graceful "something broke" screen with a retry CTA.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to whatever observability tool we wire up later (Sentry, Datadog, etc.)
    if (typeof console !== 'undefined') console.error('Route error:', error)
  }, [error])

  return (
    <Section spacing="loose">
      <div className="min-h-[60vh] grid grid-cols-1 gap-10 md:grid-cols-12 items-center">
        <div className="md:col-span-3">
          <Eyebrow rule>Error</Eyebrow>
        </div>
        <div className="md:col-span-9">
          <h1 className="font-display text-content-primary">
            Something broke on the cutting bay.
          </h1>
          <p className="mt-5 max-w-readable text-lead text-content-secondary">
            We hit an unexpected error rendering this page. Try again in a moment, or head back to the homepage.
          </p>
          {error.digest && (
            <p className="mt-3 text-caption text-content-muted">
              Error ref: <span className="font-mono">{error.digest}</span>
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" onClick={reset}>
              Try again →
            </Button>
            <Button variant="secondary" href="/">
              Back to homepage
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
