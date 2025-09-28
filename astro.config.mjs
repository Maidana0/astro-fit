// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Remove base for Amplify deployment
  site: 'https://amplify-deploy.d1wgrn99ulgnnx.amplifyapp.com/',
  // base: 'astro-fit',
});
