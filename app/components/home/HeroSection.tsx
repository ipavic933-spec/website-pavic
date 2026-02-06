"use client";

import { useLanguage } from "../LanguageProvider";
import CtaButton from "./CtaButton";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-8 py-14 shadow-sm sm:px-12 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-sm font-medium tracking-[0.18em] text-[var(--accent)] uppercase">{t.hero.eyebrow}</p>
        <h1 className="mt-4 text-4xl leading-tight font-semibold text-[var(--text)] sm:text-5xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-700">
          {t.hero.subtitle}
        </p>
        <CtaButton className="mt-8" label={t.hero.cta} />
      </div>
    </section>
  );
}
