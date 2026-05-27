import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'

/**
 * Route-level loading skeleton — shown during async data fetches
 * or route transitions before content is streamed in.
 *
 * Skeleton mirrors the homepage hero rhythm: eyebrow row, big headline,
 * lead paragraph, CTA row. Pink shimmer hairline indicates progress.
 */
export default function Loading() {
  return (
    <Section spacing="loose">
      <div className="grid min-h-[60vh] grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <Eyebrow rule>Loading</Eyebrow>
        </div>
        <div className="md:col-span-9">
          {/* Skeleton lines pulse via CSS animation */}
          <div className="space-y-6" aria-label="Loading content" role="status">
            <div className="h-12 w-[80%] animate-pulse rounded-sm bg-canvas-muted" />
            <div className="h-12 w-[65%] animate-pulse rounded-sm bg-canvas-muted" />
            <div className="mt-8 space-y-3">
              <div className="h-4 w-[60%] animate-pulse rounded-sm bg-canvas-muted" />
              <div className="h-4 w-[45%] animate-pulse rounded-sm bg-canvas-muted" />
            </div>
            <div className="mt-10 flex gap-3">
              <div className="h-12 w-40 animate-pulse rounded-sm bg-canvas-muted" />
              <div className="h-12 w-32 animate-pulse rounded-sm bg-canvas-muted" />
            </div>
          </div>
          <span className="sr-only">Loading…</span>
        </div>
      </div>
    </Section>
  )
}
