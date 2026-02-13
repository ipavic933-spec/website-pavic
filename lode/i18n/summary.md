# Internationalization

The app uses `next-intl` with locale-aware routing and message-file translations: locale behavior is defined in `src/i18n/routing.ts`, request-time message loading in `src/i18n/request.ts`, middleware/proxy matching in `src/proxy.ts`, and translated copy in `messages/hr.json` + `messages/en.json` under the shared `Site` namespace.

Related
- [../summary.md](../summary.md)
- [../terminology.md](../terminology.md)
- [../practices.md](../practices.md)

```mermaid
flowchart TD
  Proxy["src/proxy.ts"] --> Routing["src/i18n/routing.ts"]
  Routing --> LocaleLayout["src/app/[locale]/layout.tsx"]
  LocaleLayout --> Provider["NextIntlClientProvider"]
  Provider --> Components["src/components/*"]
  Request["src/i18n/request.ts"] --> Messages["messages/hr.json + messages/en.json"]
  Components --> Hook["useTranslations('Site')"]
  LanguageSwitch["src/components/language-switch.tsx"] --> Nav["src/i18n/navigation.ts Link(locale)"]
```

```ts
export const routing = defineRouting({
  locales: ["hr", "en"],
  defaultLocale: "hr",
  localePrefix: "as-needed",
  localeDetection: false
});

const t = useTranslations("Site");
t("nav.about");
```

Invariants
- Locales are limited to `hr` and `en`.
- Default locale is `hr` and remains unprefixed (`localePrefix: "as-needed"`).
- Localized pages are served from `src/app/[locale]/...`.
- Components and localized pages resolve text via `useTranslations("Site")` / `getTranslations("Site.*")` from message files.
- Privacy policy content is defined in message-file namespace `Site.privacyPolicy` for both locales.
- Contact response-time copy is aligned to 48 hours in both locale message sets.

Contracts
- `src/proxy.ts` must use the shared `routing` object for locale matching.
- `src/app/[locale]/layout.tsx` validates locale and mounts `NextIntlClientProvider`.
- `src/components/language-switch.tsx` uses localized navigation links to switch locale.
