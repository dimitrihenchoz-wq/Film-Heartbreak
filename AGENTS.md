## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design system

Esprit graphique : affiche cinéma bold, noir et blanc, fond blanc.

Polices (chargées via Google Fonts dans `src/layouts/Layout.astro`, tokens dans `src/styles/global.css`) :

- **Fraunces** (`--display`) — titres et gros textes, avec `Georgia` en repli
- **Inter** (`--body`) — texte courant, formulaires, avec `Helvetica Neue`/`Arial` en repli
- **IBM Plex Mono** (`--mono`) — labels (`.eyebrow`) et chiffres, avec `Courier New` en repli

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
