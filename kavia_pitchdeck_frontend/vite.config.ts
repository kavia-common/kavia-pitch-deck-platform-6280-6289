/**
 * Vite configuration for the Slidev project.
 *
 * Slidev internally handles most configuration; we keep this minimal.
 * Use this file to:
 * - Add aliases for components and assets
 * - Configure base path for deployments
 * - Extend Vite plugins if needed
 *
 * Build/serve behavior remains unchanged by comments.
 */
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // PUBLIC_INTERFACE
  /**
   * Base public path when served in production.
   * Configure via environment if deploying under a subpath (e.g., /deck/).
   * Do NOT hardcode environment values; use .env variables injected by CI/CD.
   */
  base: process.env.VITE_PUBLIC_BASE || '/',

  resolve: {
    alias: {
      // Alias to keep imports concise inside slides or Vue components.
      '@': path.resolve(__dirname, './'),
      '@components': path.resolve(__dirname, './components'),
      '@theme': path.resolve(__dirname, './theme'),
    },
  },

  // Slidev manages plugins; only add plugins if there is a specific need.
  // plugins: [],
})
