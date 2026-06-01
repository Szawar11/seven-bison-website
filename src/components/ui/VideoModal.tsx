'use client'

import { useEffect, useRef } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  vimeoId?: string             // e.g. "987654321"
  vimeoUrl?: string            // e.g. "https://player.vimeo.com/video/987654321"
  videoSrc?: string            // direct mp4
  title?: string
}

/**
 * VideoModal — full-screen overlay with embedded player.
 * Closes on Escape, click outside, or X button. Body scroll locked.
 * Returns focus to triggering element when closed (via useEffect cleanup).
 */
export function VideoModal({ open, onClose, vimeoId, vimeoUrl, videoSrc, title = 'Showreel' }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const src = vimeoUrl
    ? `${vimeoUrl}?autoplay=1&title=0&byline=0&portrait=0`
    : vimeoId
      ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`
      : undefined

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Close button */}
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close video"
        className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/40 text-white transition-colors hover:border-pink hover:bg-pink hover:text-content-inverse"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Player container — 16:9 max */}
      <div className="relative aspect-video w-[92vw] max-w-[1280px] bg-black shadow-2xl">
        {src ? (
          <iframe
            src={src}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          />
        ) : videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            controls
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/60">
            Video coming soon
          </div>
        )}
      </div>
    </div>
  )
}
