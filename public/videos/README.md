# Video assets

Reels live on **Vimeo or Mux** — do not self-host long-form video.

This folder is for **posters only**: 1080p stills that show before video loads,
or fall-back background images when Vimeo IDs are not yet available.

## Naming
- `reel-poster.jpg` — homepage hero reel poster
- `sector-tech-poster.jpg`
- `sector-heavy-poster.jpg`
- `sector-healthcare-poster.jpg`
- `case-{brand}-poster.jpg`

## Format
- 1920×1080 (16:9) for hero / sector posters
- 1280×960 (4:3) for sector card posters on homepage (matches `aspect-[4/3]` in `SectorCards.astro`)
- WebP or AVIF preferred; JPG fallback acceptable
- Dark, cinematic. Should look continuous with the reel that follows.

## Vimeo embed pattern
Once a reel is cut, paste its Vimeo player URL into the relevant component prop:

```astro
<Hero vimeoUrl="https://player.vimeo.com/video/123456789" />
```

The starter code automatically appends `?autoplay=1&loop=1&muted=1&background=1&controls=0`.
