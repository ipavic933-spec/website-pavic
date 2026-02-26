# Website Pavic

Website Pavic is a bilingual (Croatian/English) law office website built with Next.js App Router, Tailwind CSS, and `next-intl`.

## Project overview

- Locales: `hr` (default, no URL prefix) and `en` (`/en` prefix)
- Main public pages:
  - Homepage: `src/app/[locale]/page.tsx`
  - Privacy policy: `src/app/[locale]/privacy-policy/page.tsx`
- Contact form endpoint: `POST /api/send` (`src/app/api/send/route.tsx`)
- Message catalogs (website copy):
  - `messages/hr.json`
  - `messages/en.json`

## Tech stack

- Next.js 16 + React 19
- Tailwind CSS v4
- `next-intl` for i18n routing and message loading
- `nodemailer` + React Email for contact form email delivery
- TypeScript + ESLint

## File structure

```text
website-pavic/
├─ messages/
│  ├─ hr.json
│  └─ en.json
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ [locale]/
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  └─ privacy-policy/page.tsx
│  │  ├─ api/send/route.tsx
│  │  ├─ components/EmailTemplate.tsx
│  │  ├─ helper/email.tsx
│  │  ├─ not-found.tsx
│  │  ├─ robots.ts
│  │  └─ sitemap.ts
│  ├─ components/
│  ├─ data/
│  ├─ i18n/
│  │  ├─ navigation.ts
│  │  ├─ request.ts
│  │  └─ routing.ts
│  ├─ lib/
│  └─ proxy.ts
├─ .env.example
├─ package.json
└─ README.md
```

## Run locally

### Prerequisites

- Node.js 20+
- npm

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create local env file:

   ```bash
   cp .env.example .env
   ```

3. Update `.env` values:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `EMAIL_TO`

4. Start development server:

   ```bash
   npm run dev
   ```

5. Open:
   - Croatian: `http://localhost:3000/`
   - English: `http://localhost:3000/en`

> Note: the website can render without SMTP values, but contact form sending (`/api/send`) requires valid mail credentials.

## How to update copy safely

Edit only translation values in:

- `messages/hr.json`
- `messages/en.json`

Do **not** rename, remove, or add keys unless you are also updating the code that reads those keys.

### Rule

- Allowed: change text values
- Not allowed: change key names or nesting shape (for routine copy edits)

### Example (value-only change)

Before:

```json
{
  "hero": {
    "title": "Pouzdana pravna podrška za građane i poslovne subjekte"
  }
}
```

```json
{
  "hero": {
    "title": "Reliable legal support for individuals and businesses"
  }
}
```

After:

```json
{
  "hero": {
    "title": "Pouzdana pravna pomoć za građane i tvrtke"
  }
}
```

```json
{
  "hero": {
    "title": "Reliable legal assistance for individuals and companies"
  }
}
```

After editing copy:

1. Run `npm run dev`
2. Verify both locales (`/` and `/en`)
3. Confirm the changed text appears in the same UI section in both languages

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
