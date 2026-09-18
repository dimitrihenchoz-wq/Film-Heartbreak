// @ts-check
import { defineConfig } from 'astro/config';
import { rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

// https://astro.build/config
export default defineConfig({
  // ⚠️ À remplacer par le vrai domaine en production (utile pour le SEO / sitemap)
  site: 'https://dimitrihenchoz-wq.github.io',
  base: 'Film-Heartbreak',
  integrations: [
    {
      name: 'exclude-design-system',
      hooks: {
        // Keep /Dimitri-perso available in `astro dev` but strip it from the
        // production build so it never gets deployed with the site.
        'astro:build:done': async ({ dir }) => {
          const target = new URL('dimitri-perso/', dir);
          if (existsSync(target)) {
            await rm(target, { recursive: true, force: true });
          }
        },
      },
    },
  ],
});
