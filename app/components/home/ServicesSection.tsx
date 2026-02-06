"use client";

import { useLanguage } from "../LanguageProvider";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="mt-20 scroll-mt-28">
      <h2 className="text-3xl font-semibold text-[var(--text)]">{t.services.heading}</h2>
      <span className="mt-3 block h-1 w-20 rounded-full bg-[var(--accent)]" />
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700">
        {t.services.intro}
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {t.services.items.map((service) => (
          <article key={service.title} className="flex h-full w-full flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
            <span aria-hidden="true" className="mb-4 h-1 w-14 rounded-full bg-[var(--accent)]" />
            <h3 className="text-xl font-semibold text-[var(--text)]">{service.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-zinc-700">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
