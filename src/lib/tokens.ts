/**
 * Seven Bison — Design Tokens (TS constants)
 *
 * Mirrors DESIGN.master.md, DESIGN.light.md, DESIGN.dark.md.
 * Used for programmatic token access (e.g. in GSAP tweens, canvas drawing).
 * The CSS custom property layer in global.css is the authoritative source.
 */

export const colors = {
  // Raw brand palette
  pink:       '#E80787',
  pinkHover:  '#D00679',
  pinkBright: '#FF1A99',
  ink:        '#111111',
  graphite:   '#2A2A2A',
  grayMid:    '#8A8A8A',
  graySoft:   '#E8E8E8',
  cream:      '#F7F5F2',
  white:      '#FFFFFF',
  black:      '#000000',
} as const

export const lightTokens = {
  surfaceCanvas:   '#F7F5F2',
  surfaceSoft:     '#F2F0ED',
  surfaceMuted:    '#E8E8E8',
  surfaceHairline: '#E8E8E8',
  textPrimary:     '#111111',
  textSecondary:   '#2A2A2A',
  textMuted:       '#6F6F6F',
  textInverse:     '#F7F5F2',
  textAccent:      '#E80787',
} as const

export const darkTokens = {
  surfaceCanvas:   '#000000',
  surfaceSoft:     '#111111',
  surfaceMuted:    '#1A1A1A',
  surfaceHairline: 'rgba(255, 255, 255, 0.10)',
  textPrimary:     '#FFFFFF',
  textSecondary:   'rgba(255, 255, 255, 0.85)',
  textMuted:       '#B8B8B8',
  textInverse:     '#111111',
  textAccent:      '#E80787',
} as const

export const motion = {
  ease:    'cubic-bezier(0.16, 1, 0.3, 1)' as const,
  micro:   200,
  reveal:  700,
  page:    500,
  stagger: 80,
} as const

export const breakpoints = {
  mobile:  0,
  tablet:  768,
  laptop:  1024,
  desktop: 1440,
} as const
