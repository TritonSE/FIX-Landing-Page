# FixNation Landing Page

A landing page for Los Angeles-based non-profit [FixNation](https://fixnation.org), which provides free spay and neuter services to community cats.

This project uses [SvelteKit](https://kit.svelte.dev) and [TypeScript](https://www.typescriptlang.org).

## Developing

First, ensure that [yarn](https://yarnpkg.com) is installed.

Then, install dependencies by running:

```bash
yarn
```

Next, start the development server:

```bash
yarn dev --open
```

This will automatically open the site in a browser.

### Committing Changes

When committing changes, run the linter and auto-formatter ([prettier](https://prettier.io)):

```bash
yarn format
```

Then, the pre-commit check should pass and allow the changes to be pushed.

## Building

To create a production build of the site:

```bash
yarn build
```

You can preview the production build with `yarn preview`.
