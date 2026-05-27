/**
 * Seven Bison — Site Config
 *
 * Single source of truth for site-wide values.
 * Update Calendly, social handles, and Vimeo IDs here only.
 */

export const site = {
  name: 'Seven Bison',
  domain: 'sevenbison.com',
  url: 'https://sevenbison.com',
  tagline: 'Industry-specific video craft and art, delivered at scale.',
  description:
    'Premium video, motion design and animation for B2B brands with complex, regulated, or hard-to-photograph subject matter.',
} as const

export const contact = {
  calendly: 'https://calendly.com/seven-bison/intro', // TODO: replace with real URL
  email: 'hello@sevenbison.com',
} as const

export const social = {
  linkedin: 'https://www.linkedin.com/company/seven-bison',
  vimeo: 'https://vimeo.com/sevenbison',
} as const

export const sectors = [
  {
    slug: 'tech',
    title: 'Tech',
    subtitle: 'Cybersecurity · Fintech · Software · SaaS',
    anchorBrands: ['Outpost24', 'Alacriti', 'AWS', 'R3'],
    href: '/tech',
  },
  {
    slug: 'heavy-industry',
    title: 'Heavy Industry',
    subtitle: 'Manufacturing · Energy · Infrastructure · Logistics',
    anchorBrands: ['Aramco', 'Hilti', 'Sherwin Williams', 'Daikin', 'TF Kable'],
    href: '/heavy-industry',
  },
  {
    slug: 'healthcare-pharma',
    title: 'Healthcare & Pharma',
    subtitle: 'Medtech · Biotech · Pharma · Health Systems',
    anchorBrands: ['Roche', 'Bayer', 'Santen', 'Harris Health', 'Pfizer'],
    href: '/healthcare-pharma',
  },
] as const

export type Sector = (typeof sectors)[number]

export const services = [
  {
    title: 'Creative Storytelling',
    description: 'Research, strategy and concept through to final delivery.',
    lead: true,
  },
  { title: '2D / 3D Motion Design',          description: 'Kinetic type, logo animations and full motion sequences.' },
  { title: 'Cinematic AI Image & Video',      description: 'AI-native production without the cost of a location shoot.' },
  { title: 'Short-Form Editing',              description: 'Social-first cuts, trailers and sales-enablement clips.' },
  { title: '2D / 3D Character Animation',     description: 'Custom characters built for your brand world.' },
  { title: 'VFX / Compositing',               description: 'Product reveals, screen replacements, environment builds.' },
  { title: 'Graphic Design & Illustration',   description: 'Visual language that holds across print and motion.' },
  { title: '3D Modelling',                    description: 'Hard-surface and product models ready for animation.' },
] as const

export type Service = (typeof services)[number]

export const nav = [
  { label: 'Tech', href: '/tech' },
  { label: 'Heavy Industry', href: '/heavy-industry' },
  { label: 'Healthcare & Pharma', href: '/healthcare-pharma' },
  { label: 'Studio Access', href: '/studio-access' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
] as const

export type NavItem = (typeof nav)[number]
