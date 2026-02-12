# Practices

Patterns and conventions used in this repository.

Related
- [Summary](summary.md)
- [Terminology](terminology.md)
- [Current Plan](plans/current-plan.md)
- [Internationalization](i18n/summary.md)

```mermaid
flowchart TD
  Page["app/page.tsx"] -->|uses| Components["components/*"]
  Components --> Styles["Tailwind + app/globals.css"]
  Header["components/header.tsx"] --> Toggle["mobileOpen state"]
  Toggle --> OverlayNav["bordered mobile dropdown"]
  Components --> I18N["useI18n() translation keys"]
```

```tsx
{mobileOpen && (
  <nav className="flex flex-col gap-4 border-t border-brand-200/60 bg-white px-6 py-6 md:hidden">
    <a href="#about">{t("nav.about")}</a>
    <a href="#services">{t("nav.services")}</a>
    <a href="#contact">{t("nav.contact")}</a>
  </nav>
)}
```

Practices
- Keep global HTML/body concerns in `app/layout.tsx`; compose visible page sections in `app/page.tsx`.
- Prefer Tailwind utility classes plus tokenized colors (`brand-*`, `ink-*`) from `tailwind.config.ts`.
- Keep section content in focused components (`components/hero.tsx`, `components/about.tsx`, `components/services.tsx`, `components/contact.tsx`).
- Use `useI18n()` in UI components and store translation keys centrally in `lib/i18n.tsx`.
- Keep header fixed with desktop links on `md+` and a stateful mobile dropdown on smaller breakpoints.
- Header contact CTA in `components/header.tsx` uses inverted brand contrast (`bg-brand-900` + `text-brand-50`) on both desktop and mobile states.
- Language switch control in `components/language-switch.tsx` uses `border-brand-900`; the active locale pill uses `bg-[#d3dce0]` to match the header background, while inactive locale pills use `bg-white`.
- Brand logo asset is stored at `public/images/logo.png` and reused in both `components/header.tsx` and `components/footer.tsx` via `next/image`.
- Header and footer brand lockups (logo + adjacent name text) are clickable anchors to `#top`; `app/page.tsx` provides the `id="top"` target.
- In both header and footer lockups, subtitle text (`header.subtitle`) is displayed above the person name (`Ivan Pavic`/`Ivan Pavić`).
- Header and footer logo lockup visual scale is increased by ~30% (logo dimensions and adjacent subtitle/name typography).
- Footer lockup name in `components/footer.tsx` uses the same sans-serif style as the header lockup name (no serif override).
- Footer brand column does not render an additional subtitle/name text block below the clickable logo lockup.
- Footer logo in `components/footer.tsx` renders without brightness/invert/opacity filters so the source PNG colors are preserved.
- Footer privacy link in `components/footer.tsx` routes to `/privacy-policy`.
- Header shell in `components/header.tsx` separates structure into a solid `#d3dce0` content bar plus a distinct vertical gradient strip (`h-[11px]`, `bg-gradient-to-b from-black/25 to-transparent`) so the fade ends in true transparency over page content.
- Primary section titles in `components/hero.tsx`, `components/about.tsx`, `components/services.tsx`, and `components/contact.tsx` use slight letter-spacing (`tracking-[0.01em]`) to improve readability and prevent visual character crowding.
- Hero section in `components/hero.tsx` is text-first with no image panel; content is centered (`items-center`, `text-center`) with centered badges and CTAs.
- Identity badge card (IP avatar + name/role) is anchored on the about photo in `components/about.tsx` at the bottom-right overlay position; the hero image in `components/hero.tsx` no longer renders this floating card.
- Contact section container in `components/contact.tsx` uses a white background (`bg-white`) behind the form and info columns.
- Contact address card in `components/contact.tsx` is a clickable external link to `https://share.google/IZs8SjyOjeDDpcs5K` and opens in a new tab.
- Footer address in `components/footer.tsx` links to the same external map URL (`https://share.google/IZs8SjyOjeDDpcs5K`) and opens in a new tab.
- Contact and footer communication links use app-deep links (`mailto:` for email, `tel:` for phone) so clicks open the default email/phone app; only HTTP map links open in a new tab.
- Footer contact links in `components/footer.tsx` include leading Lucide icons (`Mail`, `Phone`, `MapPin`) aligned inline with each contact value.
- Footer working-hours row in `components/footer.tsx` includes a leading Lucide `Clock3` icon before the hours value (not in the heading).
- Contact info cards (email/phone/address) in `components/contact.tsx` use `w-full` so all three cards have equal width.
- Service cards in `components/services.tsx` are informational only and do not include per-card CTA labels.
- Service cards in `components/services.tsx` render icon and title on the same row; the decorative accent line (`bg-brand-200`) sits directly under the title text, matches title width, and animates on hover as a left-to-right underline reveal.
- Services grid uses a uniform 3-column desktop layout; labor law renders as a standard card alongside enforcement law in the same row.
- Property and land registry service card in `components/services.tsx` uses the `House` icon from `lucide-react`.
- Labor law service card in `components/services.tsx` uses the `Wrench` icon from `lucide-react`.
- About-section bullet rows in `components/about.tsx` use `items-center` so icon badges and adjacent text align on the same vertical center line.
- About content in `components/about.tsx` uses natural responsive wrapping (no forced equal-width or nowrap text-length constraints across lead, bullets, focus, and animated value pill).
- About section value highlights in `components/about.tsx` render as one animated pill button that auto-rotates between the three value statements every ~3.6s, also advances on click, and displays title above description (no trailing colon).
- About animated value pill in `components/about.tsx` uses `md:w-[62%]` (about 38% shorter than full width) while staying full-width on small screens.
- About photo column in `components/about.tsx` uses a desktop negative top offset (`lg:-mt-24`) so the portrait starts at approximately the same vertical level as the section title.

Lessons
- Clear section decomposition keeps visual iteration fast while preserving a consistent brand tone.
- Local i18n context is sufficient for a single-route marketing site and avoids router-level localization complexity.
