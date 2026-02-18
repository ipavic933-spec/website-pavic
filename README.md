# Website Pavic

Website Pavic is a bilingual (Croatian/English) law office website built with Next.js App Router and `next-intl`.

## Basic project info

- Framework: Next.js 16 (App Router)
- UI: React 19 + Tailwind CSS v4
- Language support: `hr` (default) and `en`
- Translation source files: `messages/hr.json` and `messages/en.json`

## File structure (high level)

```text
website-pavic/
├─ messages/
│  ├─ en.json
│  └─ hr.json
├─ public/
├─ src/
│  ├─ app/
│  │  ├─ [locale]/
│  │  │  ├─ globals.css
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  └─ privacy-policy/page.tsx
│  │  ├─ api/contact/route.ts
│  │  └─ not-found.tsx
│  ├─ components/
│  ├─ i18n/
│  │  ├─ request.ts
│  │  └─ routing.ts
│  └─ proxy.ts
├─ .env.example
└─ package.json
```

## Changing website copy (translations)

Most visible text is stored in:

- `messages/hr.json` (Croatian)
- `messages/en.json` (English)

When you change copy, keep the same key structure in both files.

Example: change the hero title text.

Before:

```json
"hero": {
  "title": "Pouzdana pravna podrška za građane i poslovne subjekte"
}
```

```json
"hero": {
  "title": "Reliable legal support for individuals and businesses"
}
```

After:

```json
"hero": {
  "title": "Pouzdana pravna pomoć za građane i tvrtke"
}
```

```json
"hero": {
  "title": "Reliable legal assistance for individuals and companies"
}
```

Then run the app locally and verify both locales:

- Croatian: `http://localhost:3000/`
- English: `http://localhost:3000/en`

## Run locally on Windows

Prerequisites:

- Node.js LTS (recommended v20+)
- npm (comes with Node.js)

Steps (PowerShell):

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

Open `http://localhost:3000` in your browser.

If you use `cmd.exe` instead of PowerShell:

```bat
npm install
copy .env.example .env
npm run dev
```

## Useful scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
