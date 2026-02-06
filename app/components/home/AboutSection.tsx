"use client";

import { useLanguage } from "../LanguageProvider";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mt-20 scroll-mt-28 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <div className="flex flex-col">
        <h2 className="text-3xl font-semibold text-[var(--text)]">{t.about.heading}</h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-700">
          {t.about.paragraphOne}
        </p>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">
          {t.about.paragraphTwo}
        </p>
        <div className="mt-8 self-end text-right lg:mt-auto">
          <p className="text-lg font-semibold italic text-[var(--text)]">{t.about.signatureName}</p>
          <p className="mt-1 text-sm text-zinc-600">{t.about.signatureTitle}</p>
        </div>
      </div>
      <div className="aspect-[4/5] w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <div className="flex h-full items-center justify-center rounded-lg border border-dashed border-[var(--accent)]/60 text-sm font-medium tracking-wide text-zinc-500 uppercase">
          {t.about.photoPlaceholder}
        </div>
      </div>
    </section>
  );
}
