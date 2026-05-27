'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { Section } from '@/components/ui/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { services } from '@/lib/config'
import {
  Lightbulb, Layers, Film, Scissors,
  PersonStanding, Wand2, PenTool, Box,
  type LucideIcon,
} from 'lucide-react'

/** One icon per service — same order as config.ts `services` array */
const serviceIcons: LucideIcon[] = [
  Lightbulb,       // Creative Storytelling
  Layers,          // 2D / 3D Motion Design
  Film,            // Cinematic AI Image & Video
  Scissors,        // Short-Form Editing
  PersonStanding,  // 2D / 3D Character Animation
  Wand2,           // VFX / Compositing
  PenTool,         // Graphic Design & Illustration
  Box,             // 3D Modelling
]

export function ServicesStrip() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      /* Header reveals */
      gsap.from('.services-header [data-reveal]', {
        y: 24,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.services-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      /* Tiles — stagger in with clip-path wipe from bottom */
      gsap.from('.service-tile', {
        y: 40,
        opacity: 0,
        stagger: {
          each: 0.06,
          grid: 'auto',
          from: 'start',
        },
        duration: 0.65,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref },
  )

  return (
    <Section spacing="loose" surface="soft">
      <div ref={ref}>
        {/* Header */}
        <div className="services-header mb-10 grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Eyebrow rule data-reveal>03 · What we do</Eyebrow>
          </div>
          <div className="md:col-span-9">
            <h2 data-reveal className="max-w-readable font-display text-content-primary">
              Eight disciplines. One creative partner.
            </h2>
          </div>
        </div>

        {/*
         * Grid — 2 cols on sm/md/lg, 4 cols only at xl (1280px+).
         * Keeps tiles wide enough for titles not to break at awkward points.
         * gap-px + bg-hairline creates the hairline-separated table look.
         */}
        <ul className="services-grid grid grid-cols-1 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[i]
            const desc = 'description' in service ? service.description : undefined
            return (
              <li
                key={service.title}
                className="service-tile group flex flex-col bg-canvas p-5 xl:p-6 surface-interactive hover:bg-canvas-soft"
              >
                {/* Icon + number row */}
                <div className="flex items-start justify-between">
                  {/* Icon with animated container */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-hairline bg-canvas-soft transition-all duration-micro group-hover:border-pink/20 group-hover:bg-pink/[0.04]">
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="text-content-muted transition-all duration-micro group-hover:text-pink group-hover:-translate-y-px group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="eyebrow text-[11px] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <p className="mt-6 font-display text-[18px] font-medium leading-snug text-content-primary transition-colors duration-micro group-hover:text-pink xl:text-[20px]">
                  {service.title}
                </p>

                {/* Description */}
                {desc && (
                  <p className="mt-2 text-caption leading-relaxed text-content-muted">
                    {desc}
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}
