# Practices

Patterns and conventions used in this repository.

Related
- [Summary](summary.md)
- [Terminology](terminology.md)
- [Current Plan](plans/current-plan.md)
- [Internationalization](i18n/summary.md)

```mermaid
flowchart TD
  HomePage["src/app/[locale]/page.tsx"] -->|uses| Sections["src/components/Hero/About/Services/Contact"]
  LocaleLayout["src/app/[locale]/layout.tsx"] --> IntlProvider["NextIntlClientProvider"]
  Header["src/components/Header.tsx"] --> Toggle["useState mobileOpen"]
  Toggle --> OverlayNav["max-height animated mobile menu"]
  Contact["src/components/Contact.tsx"] --> SendApi["/api/send"]
```

```tsx
const res = await fetch("/api/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, message })
});
```

Practices
- Keep global layout concerns in `src/app/[locale]/layout.tsx`.
- Prefer Tailwind utilities for component styling; use `src/app/[locale]/globals.css` for globals.
- Place reusable UI in `src/components/`.
- Keep the hero section in `src/components/Hero.tsx` on a solid dark brand background (`bg-brand-900`) with high-contrast white foreground text.
- Keep the hero photo treatment minimal: image + gradient overlays only, without bottom-left identity badges or name chips.
- In `src/components/About.tsx`, render the portrait with `next/image` using `/ivan-pavic-photo.jpg` from `public/` and remove placeholder-only layers once a real photo exists.
- Keep the About name badge in `src/components/About.tsx` on a near-white translucent background (`bg-white/70`) with dark text (`text-ink-900`, `text-ink-700`) so it stays readable over dark photo areas.
- Keep mobile menu links hidden by default and reveal them only when the header toggle state is open.
- Keep locale message files symmetric: routine copy edits should update values, not keys.
- For uncontrolled forms, use `name` attributes on inputs when reading values with `FormData`; `id` alone is not serialized.
- In React form handlers, derive submit event type from `ComponentProps<"form">["onSubmit"]` to match JSX expectations exactly and avoid relying on potentially deprecated global aliases.
- In `@react-email/components`, keep block-level wrappers (`div`, `h1`, sections) outside `Text` because `Text` renders a `<p>` element and cannot contain nested block elements without hydration errors.
- For email templates, prefer `Container`, `Section`, `Row`, `Column`, and `Text` over raw `div`/`span`, and use `Img` from `@react-email/components` instead of `next/image`.
- Email image `src` values must be absolute public URLs (for example `${NEXT_PUBLIC_SITE_URL}/logo.png`); relative paths like `/logo.png` break in email clients.
- Keep the brand lockup styling consistent between `src/components/Logo.tsx` and `src/app/components/ConfirmationEmailTemplate.tsx`: logo image `52x42` with `h-10.5 w-auto`, subtitle `text-[13px] uppercase tracking-[0.15em] text-white/70`, and name `text-[21px] font-semibold leading-tight tracking-tight text-white`.
- Email templates that rely on utility classes must be wrapped with `Tailwind` from `@react-email/tailwind`; include an in-component `config` for custom tokens like `brand.900` because app-level Tailwind config is not automatically shared during email render.
- `src/app/components/EmailTemplate.tsx` is the owner notification email and always includes `name`, `email`, and `message` values with clear HR/EN labels.
- `src/app/components/ConfirmationEmailTemplate.tsx` keeps bilingual confirmation copy formal and parallel (HR + EN), confirms message receipt, and states a maximum response window of two business days.

Lessons
- Minimal scaffolding is easier to evolve than over-structured pages.
- Locale routing is cleaner when default locale is unprefixed and only alternate locales are prefixed.
