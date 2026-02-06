"use client";

import { useLanguage } from "../LanguageProvider";

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section id="map" className="mt-20 scroll-mt-28" aria-labelledby="location-heading">
      <h2 id="location-heading" className="text-3xl font-semibold text-[var(--text)]">
        {t.map.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
        {t.map.description}
      </p>
      <div className="mt-8 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
        <div className="aspect-video w-full p-6">
          <div className="flex h-full w-full items-center justify-center rounded-lg border border-dashed border-[var(--accent)]/60 bg-white px-6 text-center text-sm leading-relaxed text-zinc-500">
            {t.map.placeholder}
          </div>
        </div>
      </div>
    </section>
  );
}
