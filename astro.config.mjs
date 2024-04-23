import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically
import { remarkReadingTime } from './remark-reading-time.mjs';

import react from '@astrojs/react';

// https://docs.astro.build/en/guides/integrations-guide/vercel/
// import vercel from '@astrojs/vercel/static';

// https://astro.build/config

// https://astro.build/config
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://bliss.berlin',
  integrations: [tailwind(), react()],
  renderers: ['@astrojs/renderer-react'],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
  output: 'server',
  adapter: vercel(),
});
