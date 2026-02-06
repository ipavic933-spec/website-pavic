# Home Main Content

`app/page.tsx` composes reusable home-body components from `app/components/home/`: `HeroSection`, `AboutSection`, `ServicesSection`, `MapSection`, and `ContactSection`; each section reads bilingual copy from shared translations while preserving stable anchor IDs.

Related
- [UI Summary](summary.md)
- [Practices](../practices.md)
- [Terminology](../terminology.md)
- [Language Support](language-support.md)

```mermaid
flowchart TD
  HeroCTA["Hero CTA href=#contact"] --> ContactId["section#contact"]
  HeaderNav["Header nav links"] --> AboutId["section#about"]
  HeaderNav --> ServicesId["section#services"]
  BrandLogo["Header/Footer BrandLogo"] --> TopId["main#top"]
  I18n["translations hr/en"] --> Sections["all section copy"]
  HeroSection --> HeroGrid["md:grid-cols + md:grid-rows"]
  HeroGrid --> CtaButton["CTA in right column, row below text"]
  AboutDesktop["lg:grid-cols-[1.15fr_0.85fr]"] --> AboutMobile["single column default"]
  Services["grid-cols-1 md:grid-cols-2 lg:grid-cols-3"] --> ServiceCards["six responsive cards"]
  Services --> Map["MapSection (Location)"]
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

```tsx
<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service) => (
    <article key={service.title} className="w-full rounded-xl border border-zinc-200 bg-white p-6">
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  ))}
</div>
```

Invariants
- Main content root keeps `id="top"` as return target for brand logo links.
- Section IDs remain constant regardless of active language.
- Hero section always contains a primary CTA that points to `#contact`.
- Hero keeps CTA below copy on mobile; from `md` upward CTA remains in the right column but starts on a lower grid row so it sits beneath the text block baseline.
- About section is anchor-targetable via `id="about"`.
- Services section is anchor-targetable via `id="services"`.
- Contact section is anchor-targetable via `id="contact"`.
- Services render six cards with `1` column on mobile, `2` on tablet, and `3` on desktop.
- Map section appears between Services and Contact and keeps a responsive embed placeholder.
- Contact form keeps fields: Name, Email, Message, Submit.
- `CtaButton` is reusable and defaults to `href="#contact"` with a default label.

Contracts
- Page body uses semantic containers (`<main>` and `<section>`).
- About section image placeholder remains aspect-ratio safe.
- Responsive behavior: desktop split for About, stacked mobile flow for all sections.
- `app/page.tsx` contains composition only; section markup lives in route-scoped components.
- Services use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for progressive density.
- Anchor targets use `scroll-mt-*` spacing so sticky header does not obscure section headings.
- Palette variables in `app/globals.css` (`--accent`, `--text`, `--background`, `--surface`, `--border`) are consumed via Tailwind arbitrary values.
- Section text is sourced from `app/lib/translations.ts` through `LanguageProvider` context.

Rationale
- This structure mirrors common legal landing-page expectations while keeping implementation minimal.

Lessons
- A constrained accent palette (`#6c8ca4` + neutrals) keeps legal-service pages distinct without visual noise.
