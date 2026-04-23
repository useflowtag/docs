# Contributing to Flowtag Docs

Thanks for helping improve Flowtag documentation.

This repository powers https://docs.flowtag.dev and is built with Mintlify.

## What to contribute

You can contribute:

- Fixes for unclear, outdated, or incorrect docs
- New documentation for existing product behavior
- API documentation improvements and examples
- Typo, grammar, and formatting fixes
- Better onboarding and quickstart guidance

## Ways to contribute

### Option 1: Edit on GitHub

1. Open the page you want to update.
2. Click the edit icon.
3. Propose your change in a pull request.

### Option 2: Local workflow

1. Fork and clone the repository.
2. Install Mintlify CLI.
3. Create a branch from main.
4. Make your changes.
5. Run local preview and checks.
6. Open a pull request.

## Local setup

Install Mintlify CLI:

```bash
npm i -g mint
```

Start local preview from the repository root:

```bash
mint dev
```

Preview URL: http://localhost:3000

## Pull request checklist

Before submitting your PR, run:

```bash
mint broken-links
mint validate
```

If your change affects layout, semantics, or major page structure, also run:

```bash
mint a11y
```

## Writing standards

- Use active voice and second person.
- Keep sentences concise and direct.
- Use sentence case for headings.
- Lead with user intent, then provide steps.
- Prefer practical examples over abstract explanation.
- Keep terminology consistent across pages.

## Content conventions

- Add frontmatter with at least title and description on MDX pages.
- Use Mintlify components when they improve clarity.
- Store image assets in the images directory.
- Add new pages to docs.json navigation so they appear in the sidebar.

## Review expectations

- Keep PRs focused on one change area when possible.
- Include a short summary of what changed and why.
- Link related issues or context when relevant.
- Be responsive to review feedback.

## Community expectations

Be respectful, constructive, and collaborative in issues and pull requests.

## Need help

- Open an issue in this repository for docs bugs or gaps.
- For Mintlify platform details, see https://mintlify.com/docs.
