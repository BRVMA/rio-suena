import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
const env = loadEnv('', process.cwd(), 'STORYBLOK');
import svelte from '@astrojs/svelte';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      post: 'storyblok/post'
    },
    apiOptions: {
      region: 'us'
    }
  }), svelte()],
  image: {
    domains: ['storyblok.com']
  },
  output: "server",
  adapter: netlify()
});