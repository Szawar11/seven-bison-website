import { ImageResponse } from 'next/og'
import { site } from '@/lib/config'

/**
 * Dynamic OG image — generated at request time, cached at edge.
 * 1200×630 (LinkedIn / Twitter / Slack standard).
 *
 * Brand-on-brand: cream canvas, ink type, pink brand-mark "SB" lock-up.
 */
export const runtime = 'edge'
export const alt = `${site.name} — ${site.tagline}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#F7F5F2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            color: '#E80787',
            fontSize: 18,
            letterSpacing: 4,
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          <span>Seven Bison</span>
          <div style={{ height: 1, width: 320, background: '#E80787', opacity: 0.4 }} />
          <span style={{ color: '#6F6F6F' }}>Premium B2B Video Studio</span>
        </div>

        {/* Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              color: '#111111',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              maxWidth: 950,
            }}
          >
            Video craft and art,{' '}
            <span style={{ color: '#E80787' }}>delivered at scale.</span>
          </div>
          <div
            style={{
              marginTop: 18,
              color: '#2A2A2A',
              fontSize: 26,
              lineHeight: 1.4,
              maxWidth: 820,
            }}
          >
            Tech · Heavy Industry · Healthcare &amp; Pharma. AI-native production. Human craft.
          </div>
        </div>

        {/* Bottom row — domain + brand mark */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #E8E8E8',
            paddingTop: 24,
          }}
        >
          <span
            style={{
              color: '#6F6F6F',
              fontSize: 18,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            {site.domain}
          </span>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                background: '#E80787',
              }}
            />
            <span style={{ color: '#111111', fontSize: 22, fontWeight: 600 }}>
              SB
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
