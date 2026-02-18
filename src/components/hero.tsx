"use client"

import {useTranslations} from "next-intl"
import Image from "next/image"
import { Button } from "@/components/button"

export function Hero() {
  const t = useTranslations("Site")

  return (
    <section className="relative overflow-hidden bg-brand-50 pt-20">

      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mb-6 font-serif text-4xl leading-[1.07] tracking-[0.01em] text-ink-900 md:text-5xl lg:text-[3.35rem]">
            <span className="text-balance">{t("hero.title")}</span>
          </h1>

          <p className="mb-8 max-w-2xl whitespace-pre-line text-base leading-relaxed text-ink-600 md:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mb-9 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {["hero.badge1", "hero.badge2", "hero.badge3"].map((key) => (
              <span
                key={key}
                className="rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-ink-700 ring-1 ring-brand-200"
              >
                {t(key)}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              className="h-auto rounded-xl bg-brand-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-brand-900/20 transition hover:bg-brand-800"
            >
              <a href="#contact">{t("hero.cta")}</a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-ink-500">{t("hero.micro")}</p>
        </div>

          <div className="relative w-full flex-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white/6 ring-1 ring-white/15 shadow-2xl shadow-black/20">
              <Image
                src="/images/hero-photo.jpeg"
                alt={t("about.photoHint")}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 34vw, (min-width: 768px) 60vw, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
