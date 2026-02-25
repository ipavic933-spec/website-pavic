# Current Plan

Short-term operating plan for maintaining localized SEO routes, translation consistency, and contact form reliability.

Related
- [Summary](../summary.md)
- [Terminology](../terminology.md)
- [Practices](../practices.md)

```mermaid
flowchart LR
  Copy["Update copy values in hr/en"] --> VerifyLocales["Verify / and /en"]
  VerifyLocales --> VerifyServiceRoutes["Verify key /[serviceSlug] and /en/[serviceSlug]"]
  VerifyServiceRoutes --> Contact["Validate contact form + email flow"]
  Contact --> DeployReady["Build + lint pass"]
```

```tsx
async function saveCopy() {
  // Values may change, key paths stay stable across locales.
}
```

Plan
1. Keep `messages/hr.json` and `messages/en.json` key structure aligned.
2. Treat copy updates as value-only changes unless component requirements change.
3. Verify locale rendering at `/` and `/en` for each content update.
4. Verify representative service routes in both locales (for example one base service slug and one HR local SEO slug).
5. Keep contact form operational by validating `.env` SMTP values (`SMTP_*`, `EMAIL_TO`, `NEXT_PUBLIC_SITE_URL`) in each environment.
6. Run lint and production build before shipping substantial updates.

Invariants
- Localized routes continue to be served through `src/app/[locale]/`.
- Contact form posting contract (`name`, `email`, `message`) stays stable for `/api/send`.
- Service slug generation remains deterministic per locale and backed by `messages/*.json` plus `src/data/local-service-slugs.json`.
