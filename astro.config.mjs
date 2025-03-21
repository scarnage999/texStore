// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://scarnage999.github.io",
  base: "texStore",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});