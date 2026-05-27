/**
 * GSAP setup — client-side only.
 *
 * Import from here, NOT directly from 'gsap'.
 * This ensures plugins are registered exactly once and
 * tree-shaken correctly in Next.js.
 *
 * Usage:
 *   import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap'
 *
 * All components that use this file must be 'use client'.
 */

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Register plugins (safe to call multiple times — GSAP dedupes internally)
gsap.registerPlugin(ScrollTrigger, useGSAP)

// Global GSAP defaults — brand motion spec
gsap.defaults({
  ease: 'power3.out',
  duration: 0.7,
})

// ScrollTrigger defaults
ScrollTrigger.config({
  ignoreMobileResize: true,
})

export { gsap, ScrollTrigger, useGSAP }
