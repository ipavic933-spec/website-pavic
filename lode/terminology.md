# Terminology

Common project terms and their meaning.

Terms
- App Router - Next.js routing model where pages live in `src/app/`.
- Locale Layout - Per-locale shell in `src/app/[locale]/layout.tsx`.
- Localized Page - Route entry under `src/app/[locale]/`, such as `src/app/[locale]/page.tsx`.
- Global Styles - Tailwind base layer and custom CSS in `src/app/[locale]/globals.css`.
- Component - Reusable UI module under `src/components/`.
- Header Toggle Menu - Mobile-only hamburger trigger in `src/components/Header.tsx` that toggles a full-width overlay menu.
- Navigation Orientation - `orijentation` prop in `Navigation` selecting `row` (desktop) or `col` (mobile overlay) layout.
- Message Catalog - Locale JSON files `messages/hr.json` and `messages/en.json` that hold website copy.

Related
- [Summary](summary.md)
- [Practices](practices.md)
- [Current Plan](plans/current-plan.md)
- [Internationalization](i18n/summary.md)

```mermaid
graph LR
  AppRouter --> LocaleLayout
  LocaleLayout --> LocalizedPage
  LocalizedPage --> Component
  LocalizedPage --> MessageCatalog
  HeaderToggleMenu --> NavigationOrientation
```

```ts
export const routing = {
  locales: ["hr", "en"],
  defaultLocale: "hr",
  localePrefix: "as-needed"
};
```

Contracts
- Components under `src/components/` are intended for reuse across pages.
- Layout owns global page chrome (header/footer).
