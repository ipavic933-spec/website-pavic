"use client"

import { Phone } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 pt-20">
      {/* subtle depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.25),transparent_55%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        {/* Text content */}
        <div className="relative z-10 flex flex-1 flex-col items-start">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mb-6 max-w-xl font-serif text-4xl leading-[1.07] tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
            <span className="text-balance">{t("hero.title")}</span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {t("hero.subtitle")}
          </p>

          {/* Trust badges */}
          <div className="mb-9 flex flex-wrap gap-2.5">
            {["hero.badge1", "hero.badge2", "hero.badge3"].map((key) => (
              <span
                key={key}
                className="rounded-full bg-white/12 px-3.5 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
              >
                {t(key)}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-900 shadow-sm ring-1 ring-white/15 transition hover:bg-brand-50"
            >
              {t("hero.cta")}
            </a>
            <a
              href="tel:+385955297362"
              className="flex items-center gap-2 rounded-xl border border-white/25 bg-white/0 px-5 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              {t("hero.cta2")}
            </a>
          </div>

          <p className="mt-4 text-xs text-white/60">{t("hero.micro")}</p>
        </div>

        {/* Hero image */}
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/6 ring-1 ring-white/15 shadow-2xl shadow-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1670408735623-256a222bc5ef?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Zgrada suda"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* nicer overlay (top highlight + bottom vignette) */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/45 via-brand-900/15 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />

            {/* Floating card */}
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/12 px-4 py-3 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900/70 ring-1 ring-white/15 text-xs font-bold text-white">
                IP
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{t("hero.cardName")}</p>
                <p className="text-xs text-white/70">{t("hero.cardRole")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
