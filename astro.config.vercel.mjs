// @ts-check
import { defineConfig } from 'astro/config';
import glsl from 'vite-plugin-glsl';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), glsl()],
  },
  integrations: [
    react(),
    icon({
      include: {
        mdi: ['*'],
      },
    }),
  ],
  outDir: 'dist',
  output: 'static',
  adapter: vercel(),
});
