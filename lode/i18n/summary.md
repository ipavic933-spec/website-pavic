# Internationalization

The app uses `next-intl` with `localePrefix: "as-needed"`, so Croatian (`hr`) is the default locale at unprefixed URLs (for example `/`) while English uses an explicit `/en` prefix; locale routing is applied through `src/proxy.ts` and users switch language from header locale links.

Related
- [../summary.md](../summary.md)
- [../terminology.md](../terminology.md)
- [../practices.md](../practices.md)

```mermaid
flowchart TD
  Proxy["src/proxy.ts"] --> Routing["src/i18n/routing.ts"]
  Routing --> LocaleLayout["src/app/[locale]/layout.tsx"]
  LocaleLayout --> Request["src/i18n/request.ts"]
  Request --> Messages["messages/hr.json + messages/en.json"]
  LocaleLayout --> Navigation["src/app/components/Navigation.tsx"]
```

```ts
export const routing = defineRouting({
  locales: ["hr", "en"],
  defaultLocale: "hr",
  localePrefix: "as-needed"
});
```

Invariants
- Default locale is `hr`.
- Default locale (`hr`) stays unprefixed in URLs.
- App routes are served through `src/app/[locale]/` for localized pages.
- Translation keys in `messages/hr.json` and `messages/en.json` stay aligned.

Contracts
- `src/proxy.ts` applies `next-intl` routing using the shared `routing` config.
- `src/i18n/request.ts` resolves a valid locale and loads matching messages.
- `Navigation.tsx` provides explicit `HR` and `EN` locale switch links.
