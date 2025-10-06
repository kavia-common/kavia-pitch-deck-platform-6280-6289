<script setup lang="ts">
// PUBLIC_INTERFACE
/**
 * A small callout component for emphasizing points within a slide.
 * 
 * Props:
 * - text: string - message to display inside the callout
 * 
 * Usage:
 * <Note text="Remember to tailor the pitch to the audience." />
 * 
 * Rationale:
 * Encapsulated as a component to keep slides clean and reusable. Styles live in theme/custom.css (.callout).
 */
import { computed } from 'vue'

interface Props {
  /** The message to display. Keep short for readability. */
  text?: string
}

const props = defineProps<Props>()

/**
 * Provide a fallback to ensure the component renders a sensible default.
 * This keeps slides from breaking if text is omitted.
 */
const display = computed(() => props.text || 'Note')
</script>

<template>
  <!-- Minimal markup; styling is provided through the .callout class. -->
  <div class="callout">
    {{ display }}
  </div>
</template>

<style scoped>
/* 
Scoped styles are intentionally minimal since cross-project theming is in theme/custom.css.
Add only component-specific tweaks here if necessary.
*/
</style>
