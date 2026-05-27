# Self-hosted fonts (optional)

The starter loads **Oswald**, **Inter**, and **Cormorant Garamond** from Google Fonts
via `src/styles/global.css`. That's fine for development and early production.

For maximum performance and full privacy (no third-party requests), self-host the fonts:

1. Download the WOFF2 files from [google-webfonts-helper](https://gwfh.mranftl.com/fonts):
   - Oswald 500 / 600 / 700 (latin)
   - Inter 400 / 500 / 600 / 700 (latin)
   - Cormorant Garamond 400 italic / 500 italic (latin)
2. Drop them into this folder as e.g. `oswald-700.woff2`, `inter-400.woff2`, etc.
3. Replace the `@import url('https://fonts.googleapis.com/...')` line in
   `src/styles/global.css` with `@font-face` declarations pointing to `/fonts/*.woff2`.

Keep `display: swap` to avoid invisible text during font load.
