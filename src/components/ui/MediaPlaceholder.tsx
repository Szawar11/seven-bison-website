/**
 * MediaPlaceholder — visual placeholder showing what asset goes here.
 *
 * Used everywhere a real photo/video isn't yet delivered. Displays:
 *   • icon (video / image / logo)
 *   • label ("Video loop coming soon")
 *   • exact spec the client/dev should deliver (size, format, duration)
 *
 * Pure server component — no JS overhead.
 */

interface Props {
  kind: 'video-loop' | 'video-poster' | 'image' | 'logo' | 'portrait' | 'showreel'
  /** Required aspect ratio / dimensions, e.g. "16:9 · 1920×1080" */
  spec: string
  /** Format hint, e.g. "MP4 H.264" or "SVG monochrome" */
  format?: string
  /** Extra hint, e.g. "5–15s loop" or "Up to 200 KB" */
  hint?: string
  /** Visual size — auto adapts inside aspect-X containers */
  size?: 'sm' | 'md' | 'lg'
  /** Color scheme: light cream context or dark cinematic */
  dark?: boolean
  className?: string
}

const ICONS = {
  'video-loop': (
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="79" height="59" stroke="currentColor" strokeDasharray="4 3" />
      <line x1="0" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="0.5" />
      <line x1="40" y1="0" x2="40" y2="60" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="40" cy="30" r="12" stroke="#E80787" strokeWidth="1.2" />
      <polygon points="37,25 37,35 47,30" fill="#E80787" opacity="0.7" />
    </svg>
  ),
  'showreel': (
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="79" height="59" stroke="currentColor" strokeDasharray="4 3" />
      <circle cx="40" cy="30" r="14" stroke="#E80787" strokeWidth="1.4" />
      <polygon points="36,23 36,37 50,30" fill="#E80787" />
      <text x="6" y="55" fontSize="6" fill="currentColor" opacity="0.5">SHOWREEL</text>
    </svg>
  ),
  'video-poster': (
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="79" height="59" stroke="currentColor" strokeDasharray="4 3" />
      <circle cx="60" cy="14" r="3.5" fill="currentColor" opacity="0.4" />
      <polyline points="2,55 25,30 40,42 60,18 78,38" stroke="currentColor" strokeWidth="0.7" fill="none" opacity="0.4" />
      <polygon points="37,25 37,35 47,30" fill="#E80787" opacity="0.6" />
    </svg>
  ),
  'image': (
    <svg viewBox="0 0 80 60" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="79" height="59" stroke="currentColor" strokeDasharray="4 3" />
      <circle cx="60" cy="14" r="4" fill="currentColor" opacity="0.5" />
      <polyline points="2,55 25,30 40,42 60,18 78,38" stroke="currentColor" strokeWidth="0.9" fill="none" opacity="0.5" />
    </svg>
  ),
  'portrait': (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="79" height="99" stroke="currentColor" strokeDasharray="4 3" />
      <circle cx="40" cy="38" r="14" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      <path d="M14,86 Q40,58 66,86" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  ),
  'logo': (
    <svg viewBox="0 0 120 40" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="119" height="39" stroke="currentColor" strokeDasharray="3 2" opacity="0.5" />
      <rect x="20" y="14" width="80" height="12" fill="currentColor" opacity="0.15" />
    </svg>
  ),
}

const iconSizeClass = { sm: 'w-10', md: 'w-14', lg: 'w-20' }

export function MediaPlaceholder({
  kind,
  spec,
  format,
  hint,
  size = 'md',
  dark = false,
  className = '',
}: Props) {
  const textColor = dark ? 'text-white/70' : 'text-content-disabled'
  const labelByKind: Record<Props['kind'], string> = {
    'video-loop':   'Video loop',
    'video-poster': 'Video poster',
    'image':        'Image',
    'logo':         'Logo',
    'portrait':     'Portrait',
    'showreel':     'Showreel',
  }

  return (
    <div className={`flex h-full w-full flex-col items-center justify-center gap-2 p-3 ${className}`}>
      {/* Icon */}
      <div className={`${iconSizeClass[size]} ${textColor} opacity-50`}>
        {ICONS[kind]}
      </div>

      {/* Primary label */}
      <p className={`text-[10px] uppercase tracking-[0.18em] ${textColor} mt-1`}>
        {labelByKind[kind]} coming soon
      </p>

      {/* Spec — pink hairline-separated */}
      <p className={`text-[10px] font-mono tabular-nums ${textColor} opacity-80 text-center leading-tight`}>
        {spec}
        {format && <><br /><span className="opacity-70">{format}</span></>}
        {hint && <><br /><span className="opacity-70">{hint}</span></>}
      </p>
    </div>
  )
}
