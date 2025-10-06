---
# Keep frontmatter YAML valid; quote strings with special characters.
title: "Kavia Pitch Deck"
# The css field must import via an intermediate style.css per project guidance.
css: |
  @import "./style.css";
# Provide basic information and theme configuration here.
theme: default
# Enable drawings, transitions, etc., if desired. Keep defaults minimal.
# transition: slide-left
# info text supports markdown; use it to summarize the deck.
info: |
  A Slidev-powered presentation for Kavia pitch decks.
  Use the inline comments in repo files as a guide for structure and theming.
---

<!--
This is the first slide. Use Markdown for content and inline HTML/Vue for advanced layouts.
Avoid overly verbose comments in slides; explain only non-obvious structure.
-->

# Kavia Pitch Deck
Modern, minimalistic, and customizable

- Built with Slidev
- Theming via style.css → theme/custom.css import chain
- Export to PDF using: npm run export

---

<!--
Demonstrate Vue usage in a slide. Components can be imported by path or alias.
The <Note> component below shows JSDoc-annotated props and default behavior.
-->
<script setup>
import Note from './components/Note.vue'
</script>

# Why Kavia
- Centralized pitch deck authoring
- Live previews and presenter mode
- Theming and brand consistency

<Note text="This callout uses a small Vue component. See components/Note.vue for details." />

---

<!--
Mermaid or diagrams require theme adjustments for dark backgrounds.
Consult Slidev docs if enabling diagram plugins or custom themes.
-->

## Features
- Slide creation and editing
- Preview and presentation mode
- Export to PDF
- Custom fonts and colors
- Slide reordering

---

<!--
Example of code block with highlighting. Keep business logic out of slides;
use components, composables, or external files for complex logic and testability.
-->

## Theming entry points

```text
slides.md (frontmatter)
  ↓ imports
style.css (global project stylesheet)
  ↓ imports
theme/custom.css (brand tokens, utilities)
```

---
layout: center
class: text-center
---

# Thank You
Questions?
