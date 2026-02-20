"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { heroBadges } from "@/data/heroBadges";
import { type ServiceId } from "@/data/services";

type HeroProps = {
  serviceId?: ServiceId;
};

export function Hero({ serviceId }: HeroProps) {
  const t = useTranslations();
  const title = serviceId ? t(`services.${serviceId}.title`) : t("hero.title");
  const subtitle = serviceId
    ? t(`services.${serviceId}.desc`)
    : t("hero.subtitle");

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-900 via-brand-800 to-brand-900 pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.25),transparent_55%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        <div className="relative z-10 flex flex-1 flex-col items-start">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mb-6 max-w-xl font-serif text-4xl leading-[1.07] text-white md:text-5xl lg:text-[3.35rem]">
            <span className="text-balance">{title}</span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {subtitle}
          </p>
          <div className="mb-9 flex flex-wrap gap-2.5">
            {heroBadges.map((key) => (
              <Badge
                key={key}
                variant="secondary"
                className="rounded-full bg-white/12 px-3.5 py-1.5 text-xs font-medium text-white/85 ring-1 ring-white/10 backdrop-blur-sm hover:bg-white/12"
              >
                {t(key)}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-white px-7 font-semibold text-brand-900 shadow-sm ring-1 ring-white/15 hover:bg-brand-50"
            >
              <Link href="#contact">{t("hero.cta")}</Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-white/60">{t("hero.micro")}</p>
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-white/6 ring-1 ring-white/15 shadow-2xl shadow-black/20">
            <Image
              src="https://images.unsplash.com/photo-1670408735623-256a222bc5ef?q=80&w=687&auto=format&fit=crop"
              alt={t("hero.imgAlt")}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-brand-900/45 via-brand-900/15 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/12 px-4 py-3 backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-900/70 ring-1 ring-white/15 text-xs font-bold text-white">
                {t('hero.initials')}
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
      </div>
    </section>
  );
}
