# UI Summary

The UI layer currently uses a shared `app/layout.tsx` shell (header/footer) with route-specific body content in `app/page.tsx`; the header is sticky with left `BrandLogo` and right actions (`About Us`, `Services`, contact `CtaButton`), hero keeps CTA in the right column but starts it below the text block on tablet/desktop, footer keeps contact items horizontal with wrap support, services render six cards in a responsive 1/2/3-column grid, and the global palette is driven by CSS variables centered on accent `#6c8ca4` plus black/neutral surfaces.

Related
- [Lode Map](../lode-map.md)
- [Summary](../summary.md)
- [Home Main Content](home-main-content.md)
- [Header Layout](header-layout.md)
- [Footer Layout](footer-layout.md)
- [Brand Logo](brand-logo.md)
- [Map Section](map-section.md)

```mermaid
graph TD
  Layout["app/layout.tsx"] --> Header["app/components/Header.tsx"]
  Header --> Branding["BrandLogo (#top)"]
  Header --> Nav["About Us + Services"]
  Header --> HeaderCTA["CtaButton (#contact)"]
  Layout --> Footer["app/components/Footer.tsx"]
  Footer --> FooterContacts["Email/Phone/Location"]
  Footer --> FooterBrand["BrandLogo (#top)"]
  HomePage["app/page.tsx"] --> Hero
  HomePage --> About
  HomePage --> Services
  HomePage --> Map["Location map placeholder"]
  HomePage --> Contact
  Globals["app/globals.css"] --> Palette["--accent #6c8ca4 + neutrals"]
```

```tsx
<main id="top">
  <HeroSection />
  <AboutSection />
  <ServicesSection />
  <MapSection />
  <ContactSection />
</main>
```

Invariants
- Shared layout chrome remains outside page-body implementation tasks.
- Section order on home page is Hero -> About Me -> Services -> Location Map -> Contact.
- Header keeps branding on the left and actions on the right.
- Header remains sticky at top with persistent visibility.
- Hero CTA sits in the right column on tablet/desktop and starts on a lower row to align beneath the text block; mobile keeps stacked flow.
- Services show six cards using `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.
- Interactive states (hover/focus) use accent color tokens and shared button styles (`.btn-primary`) for contrast-safe CTA rendering.

Contracts
- Contact section exposes `id="contact"` for in-page navigation.
- About and services sections expose `id="about"` and `id="services"` for header navigation.
- Main content exposes `id="top"` for logo scroll-to-top behavior.
- About section uses desktop side-by-side layout and mobile stacking.
- `HeroSection` uses `CtaButton` rather than inline anchor CTA markup.
- Header CTA uses the shared `CtaButton` component and keeps contact anchor behavior without a duplicate plain Contact nav link.
- `app/globals.css` is the source of palette/button tokens (`--accent`, `--accent-hover`, `--btn-text`, `--text`, `--background`, `--surface`, `--border`) and shared button utility styles.

Rationale
- Keeping the home page as a clean one-page flow reduces cognitive load for first-time legal-service visitors.

Lessons
- Explicit section boundaries in markup make future visual redesigns lower-risk.
