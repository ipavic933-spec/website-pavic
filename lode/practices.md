# Practices

Patterns and conventions used in this repository.

Related
- [Summary](summary.md)
- [Terminology](terminology.md)
- [Current Plan](plans/current-plan.md)
- [Internationalization](i18n/summary.md)

```mermaid
flowchart TD
  Page["src/app/page.tsx"] -->|uses| Components["src/components/*"]
  Components --> Styles["Tailwind + src/app/globals.css"]
  Header["src/components/Header.tsx"] --> Toggle["useState open/close"]
  Toggle --> OverlayNav["fixed inset-x-0 mobile menu"]
```

```tsx
{isOpen && (
  <nav className="fixed inset-x-0 z-50 flex w-screen flex-col items-start bg-black px-7 py-4">
    <Navigation orijentation="col" />
  </nav>
)}
```

Practices
- Keep global layout concerns in `src/app/layout.tsx`.
- Prefer Tailwind utilities for component styling; use `src/app/globals.css` for globals.
- Place reusable UI in `src/components/`.
- Keep the hero section in `src/components/Hero.tsx` on a solid dark brand background (`bg-brand-900`) with high-contrast white foreground text.
- Keep the hero photo treatment minimal: image + gradient overlays only, without bottom-left identity badges or name chips.
- Keep mobile menu links hidden by default and reveal them only when the header toggle state is open.
- Render the opened mobile menu as a full-width overlay (`fixed inset-x-0 w-screen`) below the header.
- For uncontrolled forms, use `name` attributes on inputs when reading values with `FormData`; `id` alone is not serialized.
- In React form handlers, derive submit event type from `ComponentProps<"form">["onSubmit"]` to match JSX expectations exactly and avoid relying on potentially deprecated global aliases.
- In `@react-email/components`, keep block-level wrappers (`div`, `h1`, sections) outside `Text` because `Text` renders a `<p>` element and cannot contain nested block elements without hydration errors.
- For email templates, prefer `Container`, `Section`, `Row`, `Column`, and `Text` over raw `div`/`span`, and use `Img` from `@react-email/components` instead of `next/image`.
- Email image `src` values must be absolute public URLs (for example `${NEXT_PUBLIC_SITE_URL}/logo.png`); relative paths like `/logo.png` break in email clients.
- Keep the brand lockup styling consistent between `src/components/Logo.tsx` and `src/app/components/ConfirmationEmailTemplate.tsx`: logo image `52x42` with `h-10.5 w-auto`, subtitle `text-[13px] uppercase tracking-[0.15em] text-white/70`, and name `text-[21px] font-semibold leading-tight tracking-tight text-white`.
- Email templates that rely on utility classes must be wrapped with `Tailwind` from `@react-email/tailwind`; include an in-component `config` for custom tokens like `brand.900` because app-level Tailwind config is not automatically shared during email render.

Lessons
- Minimal scaffolding is easier to evolve than over-structured pages.
- Locale routing is cleaner when default locale is unprefixed and only alternate locales are prefixed.
