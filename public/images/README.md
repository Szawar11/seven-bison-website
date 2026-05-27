# Image assets to add manually

This folder needs the following files (binaries — not in the starter):

## Logo files (from the brandbook)
- `logo-pink.svg` — primary lockup (pink mark + wordmark on transparent)
- `logo-mark.svg` — bison mark only (used in header / footer)
- `logo-white.svg` — monochrome dark variant (white on dark)
- `logo-black.svg` — monochrome light variant (black on light)

## Favicon family
- `favicon.svg` — basic SVG version is provided as a placeholder; replace with the real bison mark
- `favicon.ico` — 32×32 fallback
- `apple-touch-icon.png` — 180×180 for iOS home screen

## Open Graph
- `og-default.jpg` — 1200×630, dark, with logo and tagline

## Sector imagery (replace with real reel posters)
- `sectors/tech-poster.jpg`
- `sectors/heavy-industry-poster.jpg`
- `sectors/healthcare-pharma-poster.jpg`

## Case study posters
- `cases/outpost24-poster.jpg`
- `cases/alacriti-poster.jpg`
- `cases/aws-poster.jpg`
- `cases/aramco-poster.jpg`
- `cases/hilti-poster.jpg`
- `cases/roche-poster.jpg`
- (etc — one per case study)

## Brand logos (for trust strip and brand wall)
- `logos/aws.svg`
- `logos/bt.svg`
- `logos/kpmg.svg`
- `logos/paramount.svg`
- `logos/mtv.svg`
- (etc — monochrome SVGs preferred)

## Notes
- Keep everything dark-friendly. Posters should be optimised for `#000` background.
- Use WebP / AVIF where possible for raster images.
- Keep SVG logos uncoloured (use `currentColor` or omit `fill`) so they can be styled to off-white via CSS.
