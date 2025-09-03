# Kavia Slidev Theme Notes

This theme integrates extracted design tokens from assets/slidev_theme_tokens.md into global CSS for Slidev.

What’s included:
- Color tokens (near-black canvas, warm orange accent), text scales, borders
- Layered background gradient (.kavia-canvas) applied globally
- Slidev variable bindings (--slidev-*)
- Reusable components (cards, stats, badges, timelines)

Usage:
- slides.md frontmatter imports ./style.css (required by Slidev), which imports ./theme/kavia.css
- Default fonts: Inter, "Helvetica Neue", Arial, sans-serif
- Add class "kavia-canvas" on slides or at deck level (already set globally in slides.md)

Extending:
- Add new utilities in kavia.css but preserve existing class names used by slides.md
- If changing tokens, update both CSS custom properties and --slidev-* bindings
