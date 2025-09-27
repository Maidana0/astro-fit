// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Remove base for Amplify deployment
  // site: 'https://maidana0.github.io',
  // base: 'astro-fit',
});
