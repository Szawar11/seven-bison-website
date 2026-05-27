# Sector content (MDX)

When the sector-specific research and copy come back from Szymon, put them here as MDX files:

```
sectors/
├── tech.mdx
├── heavy-industry.mdx
└── healthcare-pharma.mdx
```

Each MDX file holds long-form, editorial copy for the sector page — pain points written
in the buyer's language, sub-sector deep-dives (especially for /tech), and any
sector-specific facts or vocabulary that should not be hardcoded in the page component.

The page components (`src/pages/tech.astro` etc.) will import from here once content is ready.
For now, placeholder copy lives inline in the page files.
