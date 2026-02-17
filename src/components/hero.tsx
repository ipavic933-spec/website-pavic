"use client"

import {useTranslations} from "next-intl"
import { Button } from "@/components/button"

export function Hero() {
  const t = useTranslations("Site")

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-900 pt-20">
      {/* subtle depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.25),transparent_55%)]" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center lg:py-24">
        <div className="relative z-10 flex max-w-3xl flex-col items-center">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mb-6 font-serif text-4xl leading-[1.07] tracking-[0.01em] text-white md:text-5xl lg:text-[3.35rem]">
            <span className="text-balance">{t("hero.title")}</span>
          </h1>

          <p className="mb-8 max-w-2xl whitespace-pre-line text-base leading-relaxed text-white/80 md:text-lg">
            {t("hero.subtitle")}
          </p>

          {/* Trust badges */}
          <div className="mb-9 flex flex-wrap justify-center gap-2.5">
            {["hero.badge1", "hero.badge2", "hero.badge3"].map((key) => (
              <span
                key={key}
                className="rounded-full bg-white/12 px-3.5 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/10 backdrop-blur-sm"
              >
                {t(key)}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="h-auto rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-brand-900 shadow-sm ring-1 ring-white/15 transition hover:bg-brand-50"
            >
              <a href="#contact">{t("hero.cta")}</a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-white/60">{t("hero.micro")}</p>
        </div>
      </div>
    </section>
  )
}
