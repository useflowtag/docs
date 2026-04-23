# Flowtag documentation

This repository contains the source for Flowtag's public documentation site:

- Production docs: https://docs.flowtag.dev
- Main website: https://flowtag.dev

The docs are built with [Mintlify](https://mintlify.com) and written in MDX.

## Repository structure

- `docs.json`: global site configuration (theme, navigation, links, branding)
- `index.mdx`, `quickstart.mdx`, `development.mdx`: core getting started docs
- `essentials/`: writing and customization guidance
- `api-reference/`: API overview and endpoint examples
- `ai-tools/`: setup guides for AI-assisted docs workflows
- `images/` and `logo/`: static assets
- `snippets/`: reusable documentation content

## Local development

### 1. Install prerequisites

- Node.js 18+
- Mintlify CLI

```bash
npm i -g mint
```

### 2. Start the docs site

From the repository root (where `docs.json` lives):

```bash
mint dev
```

Preview: http://localhost:3000

## Quality checks

Run these before opening a pull request:

```bash
mint broken-links
mint validate
```

Optional accessibility check:

```bash
mint a11y
```

## Writing guidelines

- Use active voice and second person.
- Keep wording concise and practical.
- Use sentence case for headings.
- Prefer Mintlify components over custom HTML.
- Update `docs.json` navigation when adding new pages.

If you use AI tooling, install Mintlify's docs skill:

```bash
npx skills add https://mintlify.com/docs
```

## Contribution workflow

1. Create a branch from `main`.
2. Make documentation changes.
3. Run local preview and quality checks.
4. Open a pull request with a clear summary.

Production is updated by the Mintlify GitHub integration after changes are merged to `main`.

## Troubleshooting

- `mint dev` fails: run `mint update` and retry.
- Page returns 404 locally: verify the page path is included in `docs.json` navigation.
- Styles or config look outdated: restart `mint dev` after editing `docs.json`.

## Resources

- Mintlify docs: https://mintlify.com/docs
- Mintlify docs.json schema: https://mintlify.com/docs.json

## License

This project is licensed under the terms in [LICENSE](LICENSE).
