'use client'

/**
 * AnimatedPlaceholder — SVG + CSS keyframe animations
 * for hero reel and sector card areas before real video assets arrive.
 *
 * Zero extra dependencies — uses only SVG SMIL + CSS.
 * Only animates `opacity` and `transform` (GPU-composited).
 *
 * Variants:
 *   reel         — scanning pink line across horizontal grid (hero dark columns)
 *   tech         — circuit-board node network
 *   heavy        — industrial steel lattice with cross-bracing
 *   healthcare   — molecular orbital rings
 */

export type PlaceholderVariant = 'reel' | 'tech' | 'heavy' | 'healthcare'

interface Props {
  variant?: PlaceholderVariant
  /** true = dark-zone context (black bg), false = light card context (cream bg) */
  dark?: boolean
  className?: string
}

const PINK = '#E80787'

export function AnimatedPlaceholder({
  variant = 'reel',
  dark = true,
  className = '',
}: Props) {
  // Structural line colours tuned for each context
  const dim  = dark ? 'rgba(255,255,255,0.05)' : 'rgba(17,17,17,0.06)'
  const mid  = dark ? 'rgba(255,255,255,0.10)' : 'rgba(17,17,17,0.11)'
  const hi   = dark ? 'rgba(255,255,255,0.18)' : 'rgba(17,17,17,0.18)'

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Inject keyframes once — harmless if duplicated, browser deduplicates */}
      <style>{KEYFRAMES}</style>

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 160 90"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === 'reel'       && <ReelContent       dim={dim} mid={mid} hi={hi} dark={dark} />}
        {variant === 'tech'       && <TechContent       dim={dim} mid={mid} hi={hi} dark={dark} />}
        {variant === 'heavy'      && <HeavyContent      dim={dim} mid={mid} hi={hi} dark={dark} />}
        {variant === 'healthcare' && <HealthcareContent dim={dim} mid={mid} hi={hi} dark={dark} />}
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────
   REEL — scanning pink line across a fine horizontal grid
   Used for: homepage hero dark column, sector hero dark columns
   ───────────────────────────────────────────────────────────────── */

function ReelContent({ dim, mid, hi, dark }: ContentProps) {
  const scanOpacity = dark ? 0.45 : 0.28

  return (
    <>
      {/* Fine horizontal grid */}
      {Array.from({ length: 11 }, (_, i) => i + 1).map((i) => (
        <line
          key={i}
          x1="0" y1={i * 7.5} x2="160" y2={i * 7.5}
          stroke={i % 4 === 0 ? mid : dim}
          strokeWidth="0.35"
        />
      ))}

      {/* Film-frame corner marks */}
      <path d="M5,11 L5,5 L11,5"   stroke={hi} strokeWidth="0.9" fill="none" />
      <path d="M149,5 L155,5 L155,11" stroke={hi} strokeWidth="0.9" fill="none" />
      <path d="M5,79 L5,85 L11,85"   stroke={hi} strokeWidth="0.9" fill="none" />
      <path d="M149,85 L155,85 L155,79" stroke={hi} strokeWidth="0.9" fill="none" />

      {/* Pink scan — soft glow (wide, low opacity) */}
      <line x1="0" y1="0" x2="0" y2="90"
        stroke={PINK} strokeWidth="10" strokeOpacity={String(scanOpacity * 0.18)}>
        <animateTransform attributeName="transform" type="translate"
          values="-12,0; 172,0" dur="9s" repeatCount="indefinite" calcMode="linear" />
      </line>

      {/* Pink scan — sharp leading edge */}
      <line x1="0" y1="0" x2="0" y2="90"
        stroke={PINK} strokeWidth="0.8" strokeOpacity={String(scanOpacity)}>
        <animateTransform attributeName="transform" type="translate"
          values="-1,0; 161,0" dur="9s" repeatCount="indefinite" calcMode="linear" />
      </line>

      {/* Centre crosshair */}
      <g opacity={dark ? 0.35 : 0.25}>
        <line x1="75" y1="45" x2="85" y2="45" stroke={PINK} strokeWidth="0.4" />
        <line x1="80" y1="40" x2="80" y2="50" stroke={PINK} strokeWidth="0.4" />
        <circle cx="80" cy="45" r="0.9" fill={PINK}>
          <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────
   TECH — circuit-board node network with pulsing edges
   ───────────────────────────────────────────────────────────────── */

const TECH_NODES = [
  { x: 18,  y: 16 },  // 0
  { x: 55,  y: 10 },  // 1
  { x: 100, y: 16 },  // 2  ← pink hub
  { x: 145, y: 20 },  // 3
  { x: 30,  y: 48 },  // 4
  { x: 78,  y: 46 },  // 5  ← pink hub
  { x: 118, y: 50 },  // 6
  { x: 20,  y: 76 },  // 7
  { x: 88,  y: 74 },  // 8
  { x: 142, y: 70 },  // 9
] as const

const PINK_NODES = new Set([2, 5])

const TECH_EDGES: [number, number][] = [
  [0,1],[1,2],[2,3],
  [0,4],[1,5],[2,5],[2,6],[3,6],
  [4,5],[5,6],
  [4,7],[5,8],[6,9],
  [7,8],[8,9],
]

function TechContent({ dim, mid, hi }: ContentProps) {
  return (
    <>
      {TECH_EDGES.map(([a, b], i) => {
        const isPink = PINK_NODES.has(a) || PINK_NODES.has(b)
        const na = TECH_NODES[a], nb = TECH_NODES[b]
        return (
          <line key={i}
            x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
            stroke={isPink ? PINK : mid}
            strokeWidth={isPink ? '0.5' : '0.4'}
          >
            <animate
              attributeName="opacity"
              values={isPink ? '0.25;0.55;0.25' : '0.5;0.9;0.5'}
              dur={`${2.8 + i * 0.18}s`}
              begin={`${i * 0.12}s`}
              repeatCount="indefinite"
            />
          </line>
        )
      })}

      {TECH_NODES.map((n, i) => {
        const isPink = PINK_NODES.has(i)
        return (
          <circle key={i} cx={n.x} cy={n.y} r={isPink ? 2.8 : 1.5}
            fill={isPink ? PINK : hi}
          >
            <animate
              attributeName="opacity"
              values={isPink ? '0.55;1;0.55' : '0.45;0.85;0.45'}
              dur={`${2.2 + i * 0.28}s`}
              begin={`${i * 0.15}s`}
              repeatCount="indefinite"
            />
          </circle>
        )
      })}

      {/* Subtle outer frame hint */}
      <rect x="1" y="1" width="158" height="88"
        stroke={dim} strokeWidth="0.4" fill="none" />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────
   HEAVY INDUSTRY — steel lattice with cross-bracing
   ───────────────────────────────────────────────────────────────── */

// Grid: 3×2 cells divided by cols [0,53,107,160] × rows [0,45,90]
const H_COLS = [0, 53, 107, 160] as const
const H_ROWS = [0, 45, 90] as const

const CELLS = [
  [H_COLS[0], H_COLS[1], H_ROWS[0], H_ROWS[1]],
  [H_COLS[1], H_COLS[2], H_ROWS[0], H_ROWS[1]],
  [H_COLS[2], H_COLS[3], H_ROWS[0], H_ROWS[1]],
  [H_COLS[0], H_COLS[1], H_ROWS[1], H_ROWS[2]],
  [H_COLS[1], H_COLS[2], H_ROWS[1], H_ROWS[2]],
  [H_COLS[2], H_COLS[3], H_ROWS[1], H_ROWS[2]],
] as const

function HeavyContent({ dim, mid, hi }: ContentProps) {
  return (
    <>
      {/* Outer structural frame */}
      <rect x="0.5" y="0.5" width="159" height="89"
        stroke={hi} strokeWidth="0.9" fill="none" />

      {/* Inner vertical posts */}
      <line x1="53"  y1="0" x2="53"  y2="90" stroke={mid} strokeWidth="0.55" />
      <line x1="107" y1="0" x2="107" y2="90" stroke={mid} strokeWidth="0.55" />

      {/* Horizontal beam */}
      <line x1="0" y1="45" x2="160" y2="45" stroke={mid} strokeWidth="0.55" />

      {/* Cross-bracing in every cell */}
      {CELLS.map(([x1, x2, y1, y2], i) => (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={dim} strokeWidth="0.45">
            <animate attributeName="opacity"
              values="0.45;0.85;0.45"
              dur={`${3.2 + i * 0.35}s`}
              begin={`${i * 0.25}s`}
              repeatCount="indefinite"
            />
          </line>
          <line x1={x2} y1={y1} x2={x1} y2={y2} stroke={dim} strokeWidth="0.45">
            <animate attributeName="opacity"
              values="0.45;0.85;0.45"
              dur={`${3.5 + i * 0.35}s`}
              begin={`${i * 0.25 + 0.2}s`}
              repeatCount="indefinite"
            />
          </line>
        </g>
      ))}

      {/* Rivet dots at structural intersections */}
      {([
        [53, 0], [107, 0], [53, 90], [107, 90],
        [0, 45], [160, 45], [53, 45], [107, 45],
      ] as [number, number][]).map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill={mid} />
      ))}

      {/* Pink accent — two centre junction bolts */}
      <circle cx="53"  cy="45" r="2.4" fill={PINK}>
        <animate attributeName="opacity" values="0.45;0.85;0.45" dur="4.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="107" cy="45" r="2.4" fill={PINK}>
        <animate attributeName="opacity" values="0.45;0.85;0.45" dur="4.5s" begin="2.25s" repeatCount="indefinite" />
      </circle>
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────
   HEALTHCARE — molecular orbital system
   ───────────────────────────────────────────────────────────────── */

const CX = 80, CY = 45

function ring(r: number, count: number, pinkIdx: Set<number>, hi: string) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 2 * Math.PI
    return {
      x: CX + r * Math.cos(angle),
      y: CY + r * Math.sin(angle),
      pink: pinkIdx.has(i),
    }
  })
}

function HealthcareContent({ dim, mid, hi }: ContentProps) {
  const outerDots = ring(22, 5, new Set([0]),    hi)
  const innerDots = ring(12, 3, new Set([0, 2]), hi)

  return (
    <>
      {/* Static outermost orbit hint */}
      <circle cx={CX} cy={CY} r="32" stroke={dim} strokeWidth="0.35" fill="none" />

      {/* Slow clockwise outer ring */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          values={`0 ${CX} ${CY}; 360 ${CX} ${CY}`}
          dur="28s" repeatCount="indefinite" />
        <circle cx={CX} cy={CY} r="22" stroke={mid} strokeWidth="0.45" fill="none" />
        {outerDots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.pink ? 2.2 : 1.6}
            fill={d.pink ? PINK : hi}
            opacity={d.pink ? 0.85 : 0.6}
          />
        ))}
      </g>

      {/* Faster counter-clockwise inner ring */}
      <g>
        <animateTransform attributeName="transform" type="rotate"
          values={`0 ${CX} ${CY}; -360 ${CX} ${CY}`}
          dur="18s" repeatCount="indefinite" />
        <circle cx={CX} cy={CY} r="12" stroke={mid} strokeWidth="0.5" fill="none" />
        {innerDots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.pink ? 2.5 : 1.8}
            fill={d.pink ? PINK : hi}
            opacity={d.pink ? 0.9 : 0.65}
          />
        ))}
      </g>

      {/* Pulsing nucleus */}
      <circle cx={CX} cy={CY} r="4.5" fill={PINK}>
        <animate attributeName="r"       values="3.8;5;3.8"   dur="2.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.65;0.95;0.65" dur="2.8s" repeatCount="indefinite" />
      </circle>
      {/* Inner highlight */}
      <circle cx={CX} cy={CY} r="1.5" fill="white" opacity="0.5" />
    </>
  )
}

/* ─────────────────────────────────────────────────────────────────
   Shared types & CSS keyframes
   ───────────────────────────────────────────────────────────────── */

interface ContentProps {
  dim: string
  mid: string
  hi: string
  dark: boolean
}

const KEYFRAMES = `
  @media (prefers-reduced-motion: reduce) {
    .ap-anim * { animation-play-state: paused !important; }
  }
`
