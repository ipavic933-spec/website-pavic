import {getTranslations} from "next-intl/server"

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("Site.privacyPolicy")

  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 md:py-20">
      <h1 className="font-serif text-3xl tracking-[0.01em] text-ink-900 md:text-4xl">{t("title")}</h1>

      <p className="mt-3 text-sm text-ink-600">{t("updated")}</p>

      <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">1. {t("sections.controller.title")}</h2>
        <p>{t("sections.controller.body")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">2. {t("sections.collectedData.title")}</h2>
        <p>{t("sections.collectedData.body")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">3. {t("sections.purposeAndBasis.title")}</h2>
        <p>{t("sections.purposeAndBasis.intro")}</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>{t("sections.purposeAndBasis.bullet1")}</li>
          <li>{t("sections.purposeAndBasis.bullet2")}</li>
          <li>{t("sections.purposeAndBasis.bullet3")}</li>
        </ul>
        <p>{t("sections.purposeAndBasis.legalBasis")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">4. {t("sections.retention.title")}</h2>
        <p>{t("sections.retention.body")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">5. {t("sections.sharing.title")}</h2>
        <p>{t("sections.sharing.body")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">6. {t("sections.rights.title")}</h2>
        <p>{t("sections.rights.body1")}</p>
        <p>{t("sections.rights.body2")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">7. {t("sections.security.title")}</h2>
        <p>{t("sections.security.body")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">8. {t("sections.externalLinks.title")}</h2>
        <p>{t("sections.externalLinks.body")}</p>
      </section>

      <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
        <h2 className="text-base font-semibold text-ink-900">9. {t("sections.contact.title")}</h2>
        <p>{t("sections.contact.body")}</p>
      </section>
    </main>
  )
}
