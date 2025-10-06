# Kavia Pitch Deck Frontend (Slidev)

This is a Slidev-based presentation frontend for Kavia pitch decks.

Highlights:
- Inline comments across key files explain why decisions were made and how to extend them.
- Theming follows the required two-step import pattern:
  slides.md frontmatter → style.css → theme/custom.css

Getting started:
1) Install dependencies:
   npm install
2) Start dev server:
   npm run dev
3) Build static site:
   npm run build
4) Export to PDF:
   npm run export
   (Requires Playwright: npx playwright install chromium)

Annotated files to review:
- slides.md: frontmatter and slide structure with safe YAML and usage notes
- style.css: intermediate CSS import with rationale
- theme/custom.css: brand tokens and simple utilities
- vite.config.ts: minimal, commented Vite configuration
- components/Note.vue: example component with JSDoc-style props
