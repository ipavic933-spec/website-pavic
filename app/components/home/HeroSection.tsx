"use client";

import { useLanguage } from "../LanguageProvider";
import CtaButton from "./CtaButton";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-14 shadow-sm sm:px-12 lg:px-16 lg:py-20">
      <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:grid-rows-[auto_auto] md:items-start">
        <div className="md:col-start-1 md:row-start-1">
          <p className="text-sm font-medium tracking-[0.18em] text-[var(--accent)] uppercase">{t.hero.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-tight font-semibold text-[var(--text)] sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700">
            {t.hero.subtitle}
          </p>
        </div>
        <div className="md:col-start-2 md:row-start-2 md:justify-self-end md:self-start">
          <CtaButton className="mt-2 md:mt-0" label={t.hero.cta} />
        </div>
      </div>
    </section>
  );
}
