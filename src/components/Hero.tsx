"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { heroBadges } from "@/data/heroBadges";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden bg-brand-50 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(171,138,87,0.12),transparent_60%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        <div className="relative z-10 flex flex-1 flex-col items-start">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mb-6 max-w-xl font-serif text-4xl leading-[1.07] text-ink-900 md:text-5xl lg:text-[3.35rem]">
            <span className="text-balance">{t("hero.title")}</span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-ink-600 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <div className="mb-9 flex flex-wrap gap-2.5">
            {heroBadges.map((key) => (
              <Badge
                key={key}
                variant="secondary"
                className="rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-medium text-ink-700 shadow-sm hover:bg-brand-100"
              >
                {t(key)}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-brand-800 px-7 font-semibold text-white shadow-sm hover:bg-brand-900"
            >
              <Link href="#contact">{t("hero.cta")}</Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-ink-500">{t("hero.micro")}</p>
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-white ring-1 ring-brand-200 shadow-xl shadow-brand-900/10">
            <Image
              src="https://images.unsplash.com/photo-1670408735623-256a222bc5ef?q=80&w=687&auto=format&fit=crop"
              alt={t("hero.imgAlt")}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-ink-900/40 via-ink-900/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-xs font-bold text-white">
                {t("hero.initials")}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  {t("hero.cardName")}
                </p>
                <p className="text-xs text-white/70">{t("hero.cardRole")}</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
