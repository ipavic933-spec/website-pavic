# Practices

Patterns and conventions used in this repository.

Related
- [Summary](summary.md)
- [Terminology](terminology.md)
- [Current Plan](plans/current-plan.md)
- [Internationalization](i18n/summary.md)

```mermaid
flowchart TD
  Page["src/app/[locale]/page.tsx"] -->|uses| Components["src/components/*"]
  Components --> Styles["Tailwind + src/app/globals.css"]
  Header["src/components/header.tsx"] --> Toggle["mobileOpen state"]
  Toggle --> OverlayNav["bordered mobile dropdown"]
  Components --> I18N["useTranslations('Site') keys"]
```

```tsx
{mobileOpen && (
  <nav className="flex flex-col gap-4 border-t border-white/10 bg-gradient-to-b from-brand-900 to-brand-800 px-6 py-6 md:hidden">
    <a href="#about">{t("nav.about")}</a>
    <a href="#services">{t("nav.services")}</a>
    <a href="#contact">{t("nav.contact")}</a>
  </nav>
)}
```

Practices
- Keep global HTML/body concerns in `src/app/layout.tsx`; compose visible page sections in `src/app/[locale]/page.tsx`.
- Prefer Tailwind utility classes plus tokenized colors (`brand-*`, `ink-*`) from `tailwind.config.ts`.
- Keep section content in focused components (`src/components/hero.tsx`, `src/components/about.tsx`, `src/components/services.tsx`, `src/components/contact.tsx`).
- Use `useTranslations("Site")` in UI components and store translation keys in `messages/hr.json` and `messages/en.json` loaded through `src/i18n/request.ts`.
- Keep header fixed with desktop links on `md+`; on smaller breakpoints the dropdown stays mounted and animates from the header edge using `max-height` expansion/collapse only (no scale transform or opacity fade), with `pointer-events-none` when closed.
- Header section links (`#about`, `#services`) in `src/components/header.tsx` use scroll-aware active state and underline the currently active section on both desktop and mobile; the contact CTA button does not use this underline state.
- Mobile dropdown panel in `src/components/header.tsx` uses the same solid `#29546d` surface as the header bar to keep one continuous surface.
- On mobile, the divider between the top header bar and dropdown is permanently removed and the dropdown container is slightly overlapped (`-mt-px`) so the menu and bar read as one continuous `#29546d` block with no seam during open/close.
- Mobile dropdown links in `src/components/header.tsx` are right-aligned (`items-end`, `text-right`) so the link stack and CTA anchor to the right edge.
- Mobile dropdown text columns align to the `contact` CTA label by adding `mr-4` to plain text links (`about`, `services`) to offset CTA horizontal padding.
- Header contact CTA in `src/components/header.tsx` uses an inverted light button (`bg-white` + `text-brand-900`) on both desktop and mobile states to stay readable on the solid `#29546d` header.
- Hero, header CTA, and contact form submit actions in `src/components/hero.tsx`, `src/components/header.tsx`, and `src/components/contact.tsx` import `Button` from `src/components/button.tsx` (app-level wrapper over `src/components/ui/button.tsx`) with tailored `className` overrides to preserve the brand look.
- Link-like CTAs that navigate to in-page anchors (for example `#contact`) use `Button` with `asChild` wrapping an `<a>` so behavior stays semantic while sharing button styles.
- Keep `src/components/ui/` lean: retain only primitives used by app sections/forms and remove scaffolded shadcn files that are not imported by the current route tree.
- Use npm as the package manager for this repository and keep only `package-lock.json` as the committed lockfile.
- Keep `next.config.mjs` pinned to repository root detection by setting `turbopack.root` to `process.cwd()`.
- Language switch control in `src/components/language-switch.tsx` uses a white separating stroke (`border-white/70`) against the dark header; the active locale pill uses a dark tone with white text (`text-white`), while the inactive locale pill stays white (`bg-white`) with contact-button text tone (`text-brand-900`).
- Brand logo asset is stored at `public/images/logo.png` and reused in both `src/components/header.tsx` and `src/components/footer.tsx` via `next/image`.
- Header and footer brand lockups (logo + adjacent name text) are clickable anchors to `#top`; `app/[locale]/page.tsx` provides the `id="top"` target.
- In both header and footer lockups, subtitle text (`header.subtitle`) is displayed above the person name (`Ivan Pavić`).
- Header brand lockup text (subtitle + name) stays visible next to the logo on mobile and desktop; the full lockup remains a single clickable `#top` anchor.
- Header and footer logo lockup visual scale is increased by ~30% (logo dimensions and adjacent subtitle/name typography).
- Footer lockup name in `src/components/footer.tsx` uses the same sans-serif style as the header lockup name (no serif override).
- Footer brand column does not render an additional subtitle/name text block below the clickable logo lockup.
- Footer logo in `src/components/footer.tsx` renders without brightness/invert/opacity filters so the source PNG colors are preserved.
- Footer privacy link in `src/components/footer.tsx` uses localized `Link` from `src/i18n/navigation.ts` to keep locale context when opening `/privacy-policy`.
- Header shell in `src/components/header.tsx` uses a solid `#29546d` surface with `border-white/10` divider, matching the footer background.
- Primary section titles in `src/components/hero.tsx`, `src/components/about.tsx`, `src/components/services.tsx`, and `src/components/contact.tsx` use slight letter-spacing (`tracking-[0.01em]`) to improve readability and prevent visual character crowding.
- Hero section in `src/components/hero.tsx` uses `bg-brand-50` (same surface color as services) and a split layout on desktop: left text/CTA content plus a right visual photo panel rendered with `next/image`; on mobile it stacks with centered content above the photo.
- Hero photo asset is stored at `public/images/hero-photo.jpeg` and is rendered as a full-cover image in a `4:3` panel (`bg-white/6`, `ring-white/15`, `shadow-black/20`) without extra color overlays; no floating identity badge/card overlay is shown.
- Hero subtitle copy uses a manual line break from translation strings (`\n` in `messages/*.json`) and renders with `whitespace-pre-line` in `src/components/hero.tsx`.
- Identity badge text card (name + role, without avatar circle) is anchored on the about photo in `src/components/about.tsx` at the bottom-right overlay position; the hero image in `src/components/hero.tsx` no longer renders this floating card.
- Contact section container in `src/components/contact.tsx` uses a white background (`bg-white`) behind the form and info columns.
- Contact address card in `src/components/contact.tsx` is a clickable external link to `https://maps.app.goo.gl/hzKKXtUko1y1MPVo7` and opens in a new tab.
- Footer address in `src/components/footer.tsx` links to the same external map URL (`https://maps.app.goo.gl/hzKKXtUko1y1MPVo7`) and opens in a new tab.
- Contact and footer communication links use app-deep links (`mailto:` for email, `tel:` for phone) so clicks open the default email/phone app; only HTTP map links open in a new tab.
- Footer contact links in `src/components/footer.tsx` include leading Lucide icons (`Mail`, `Phone`, `MapPin`) aligned inline with each contact value.
- Footer working-hours row in `src/components/footer.tsx` includes a leading Lucide `Clock3` icon before the hours value (not in the heading).
- Contact info cards (email/phone/address) in `src/components/contact.tsx` use `w-full` so all three cards have equal width.
- Service cards in `src/components/services.tsx` are informational only and do not include per-card CTA labels.
- Service cards in `src/components/services.tsx` render icon and title on the same row; the decorative accent line keeps a constant gray base (`bg-brand-200`) and on hover reveals a left-to-right blue overlay (`bg-brand-800`) matching the icon highlight tone.
- Services grid uses a uniform 3-column desktop layout; labor law renders as a standard card alongside enforcement law in the same row.
- Property and land registry service card in `src/components/services.tsx` uses the `House` icon from `lucide-react`.
- Labor law service card in `src/components/services.tsx` uses the `Wrench` icon from `lucide-react`.
- Third About bullet row (`about.bullet3`) in `src/components/about.tsx` uses the `Handshake` icon from `lucide-react`.
- About-section bullet rows in `src/components/about.tsx` use `items-center` so icon badges and adjacent text align on the same vertical center line.
- About content in `src/components/about.tsx` uses natural responsive wrapping (no forced equal-width or nowrap text-length constraints across lead, bullets, focus, and animated value pill).
- About focus callout in `src/components/about.tsx` renders a `focusLabel` heading above the body text; the body copy omits a duplicated `Focus:` prefix.
- About section value highlights in `src/components/about.tsx` render as one animated pill that auto-rotates between the three value statements every ~3.6s and displays title above description (no trailing colon).
- About animated value pill in `src/components/about.tsx` spans full column width and keeps the standard left-aligned icon/text layout.
- About section column order in `src/components/about.tsx` stays stacked on small screens (all text content, including eyebrow/title, then photo), but swaps on `lg+` so photo renders left and all text content renders right.
- About photo column in `src/components/about.tsx` stays top-aligned with the text column on desktop (`lg:items-start`, no negative top offset) to keep both columns visually aligned.

Lessons
- Clear section decomposition keeps visual iteration fast while preserving a consistent brand tone.
- Local i18n context is sufficient for a single-route marketing site and avoids router-level localization complexity.
