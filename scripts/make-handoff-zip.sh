#!/bin/bash
# Tworzy paczkę ZIP gotową do wysłania do web deva.
# Wyklucza: node_modules, .next, .astro, logi
# Uruchom z folderu projektu: bash scripts/make-handoff-zip.sh

OUTPUT="sevenbison-website-handoff-$(date +%Y%m%d).zip"

zip -r "$OUTPUT" . \
  --exclude "node_modules/*" \
  --exclude ".next/*" \
  --exclude ".astro/*" \
  --exclude "out/*" \
  --exclude "dist/*" \
  --exclude ".claude/*" \
  --exclude "*.log" \
  --exclude ".DS_Store" \
  --exclude "scripts/make-handoff-zip.sh"

echo ""
echo "✅ Paczka gotowa: $OUTPUT"
echo "   Rozmiar: $(du -sh "$OUTPUT" | cut -f1)"
echo ""
echo "Odbiorca po rozpakowaniu:"
echo "  npm install"
echo "  npm run dev"
echo "  → http://localhost:3000"
