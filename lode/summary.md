# Summary

Website Pavic is a small Next.js 16 App Router site with a shared layout (header + footer) where a sticky header includes navigation, contact CTA, and a right-side `HR|EN` button pair, while all visible page/footer copy is rendered from centralized translations fixed to Croatian (`hr`), plus a full-width highlight banner sits between Hero and About using accent-tinted tokens without changing anchor-based one-page navigation.

Related
- [Terminology](terminology.md)
- [Practices](practices.md)
- [Current Plan](plans/current-plan.md)
- [UI Summary](ui/summary.md)

```mermaid
graph TD
  Layout["app/layout.tsx"] --> Header["app/components/Header.tsx"]
  Layout --> Footer["app/components/Footer.tsx"]
  Layout --> Page["app/page.tsx"]
  Page --> HomeComponents["app/components/home/*"]
  Layout --> Globals["app/globals.css"]
  Page --> Hero["Hero section"]
  Page --> Banner["Highlight banner"]
  Page --> About["About Me section"]
  Page --> Services["Services section"]
  Page --> Map["Location section"]
  Page --> Contact["Contact section (#contact)"]
```

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

```tsx
<a href="#contact" className="...">Lorem Ipsum CTA</a>
<section id="contact">...</section>
```

```tsx
<HeroSection />
<HighlightBanner />
<AboutSection />
<ServicesSection />
<MapSection />
<ContactSection />
```

Invariants
- All pages render inside the shared root layout.
- Styling uses Tailwind utility classes plus `app/globals.css`.
- The home page lives at `app/page.tsx`.
- Header and footer remain layout-owned and are not modified by home page content work.
- Home section rendering is composed from `app/components/home/` components.

Contracts
- `app/page.tsx` owns only body content between shared layout chrome.
- The primary hero CTA links to `#contact` in the same page.
- Header CTA uses the shared `CtaButton` and defaults to `#contact`.
- Header navigation links target `#about` and `#services`.
- Brand logo defaults to `#top` in both header and footer.
- Palette variables (`--accent`, `--accent-strong`, `--text`, `--background`, `--surface`, `--border`) live in `app/globals.css`.
- Displayed copy is fixed to `hr` through `LanguageProvider` and does not persist language selection.

Rationale
- A simple layout keeps the site structure consistent while content evolves.

Lessons
- A six-card service matrix (`1/2/3` columns) scales better for content growth while preserving mobile readability.
