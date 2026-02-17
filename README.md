# Website Pavic

Next.js app (App Router) with a simple layout and reusable UI components.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- TypeScript

## Getting started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  components/
    Button.tsx
    Footer.tsx
    Header.tsx
  globals.css
  layout.tsx
  page.tsx
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- Root layout renders `Header` and `Footer` around all pages.
- The home page is defined in `app/page.tsx`.
