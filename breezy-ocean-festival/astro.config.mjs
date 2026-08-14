// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://matana2026.netlify.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
