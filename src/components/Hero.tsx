"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroBadges } from "@/data/heroBadges";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden bg-brand-900 pt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:py-12">
        <div className="relative z-10 flex flex-1 flex-col items-start">
          <span className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
            {t("hero.eyebrow")}
          </span>

          <h1 className="mb-6 max-w-xl font-serif text-4xl leading-[1.07] text-white md:text-5xl lg:text-[3.35rem]">
            <span className="text-balance">{t("hero.title")}</span>
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            {t("hero.subtitle")}
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
          </div>
        </div>
      </div>
    </section>
  );
}
