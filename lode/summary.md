# Summary

Website Pavic is a Next.js 16 App Router marketing site for a law office with a section-based homepage (hero, banner, about, services, contact) plus a dedicated privacy policy route at `/privacy-policy`; it uses a custom client-side i18n context (`hr`/`en`), Tailwind CSS with a brand/ink palette, and reusable section components under `components/` rendered from `app/page.tsx`.

Related
- [Terminology](terminology.md)
- [Practices](practices.md)
- [Current Plan](plans/current-plan.md)
- [Internationalization](i18n/summary.md)

```mermaid
graph TD
  Layout["app/layout.tsx"] --> Page["app/page.tsx"]
  Layout --> PrivacyPage["app/privacy-policy/page.tsx"]
  Page --> I18N["lib/i18n.tsx I18nProvider"]
  Page --> Header["components/header.tsx"]
  Page --> Sections["hero/banner/about/services/contact"]
  Page --> Footer["components/footer.tsx"]
  Footer --> PrivacyLink["/privacy-policy"]
  Layout --> Globals["app/globals.css"]
```

```tsx
export default function Page() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <Banner />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  );
}
```

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className="bg-white text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
```

Invariants
- The app entry route is `app/page.tsx` and renders the section flow for the homepage.
- A separate static route exists at `app/privacy-policy/page.tsx` for privacy policy content.
- The root layout in `app/layout.tsx` only sets global HTML/body shell and imports `app/globals.css`.
- Translations are runtime values from `useI18n()` in `lib/i18n.tsx`, not file-based locale routing.
- Header navigation targets in-page anchors (`#about`, `#services`, `#contact`) with a mobile toggle menu.
- The main visual system is the `brand-*` and `ink-*` Tailwind palette defined in `tailwind.config.ts`.

Rationale
- A section-driven landing page with local i18n keeps copy iteration and visual tuning fast without routing complexity.
