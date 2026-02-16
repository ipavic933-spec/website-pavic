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
- Keep mobile menu links hidden by default and reveal them only when the header toggle state is open.
- Render the opened mobile menu as a full-width overlay (`fixed inset-x-0 w-screen`) below the header.
- For uncontrolled forms, use `name` attributes on inputs when reading values with `FormData`; `id` alone is not serialized.
- In React form handlers, derive submit event type from `ComponentProps<"form">["onSubmit"]` to match JSX expectations exactly and avoid relying on potentially deprecated global aliases.

Lessons
- Minimal scaffolding is easier to evolve than over-structured pages.
- Locale routing is cleaner when default locale is unprefixed and only alternate locales are prefixed.
