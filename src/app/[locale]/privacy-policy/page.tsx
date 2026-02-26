import { LegalHeader } from "@/components/LegalHeader";
import { getTranslations } from "next-intl/server";

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("privacyPolicy");

  return (
    <>
      <LegalHeader />
      <main className="mx-auto w-full max-w-4xl px-6 py-20 md:py-24">
        <h1 className="font-serif text-3xl tracking-[0.01em] text-ink-900 md:text-4xl">
          {t("title")}
        </h1>

        <p className="mt-3 text-sm text-ink-600">{t("updated")}</p>

        <section className="mt-10 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            1. {t("sections.controller.title")}
          </h2>
          <p>
            {t.rich("sections.controller.body", {
              email: (chunks) => (
                <a
                  href="mailto:ipavic933@gmail.com"
                  className="underline hover:text-ink-900"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            2. {t("sections.collectedData.title")}
          </h2>
          <p>{t("sections.collectedData.body")}</p>
          <p>{t("sections.collectedData.body2")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            3. {t("sections.purposeAndBasis.title")}
          </h2>
          <p>{t("sections.purposeAndBasis.intro")}</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>{t("sections.purposeAndBasis.bullet1")}</li>
            <li>{t("sections.purposeAndBasis.bullet2")}</li>
            <li>{t("sections.purposeAndBasis.bullet3")}</li>
            <li>{t("sections.purposeAndBasis.bullet4")}</li>
          </ul>
          <p>{t("sections.purposeAndBasis.legalBasis")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            4. {t("sections.cookiesAndAnalytics.title")}
          </h2>
          <p>{t("sections.cookiesAndAnalytics.body1")}</p>
          <p>{t("sections.cookiesAndAnalytics.body2")}</p>
          <p>{t("sections.cookiesAndAnalytics.body3")}</p>
          <p>{t("sections.cookiesAndAnalytics.body4")}</p>
          <p>{t("sections.cookiesAndAnalytics.body5")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            5. {t("sections.retention.title")}
          </h2>
          <p>{t("sections.retention.body")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            6. {t("sections.sharing.title")}
          </h2>
          <p>{t("sections.sharing.body")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            7. {t("sections.rights.title")}
          </h2>
          <p>{t("sections.rights.body1")}</p>
          <p>{t("sections.rights.body2")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            8. {t("sections.security.title")}
          </h2>
          <p>{t("sections.security.body")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            9. {t("sections.externalLinks.title")}
          </h2>
          <p>{t("sections.externalLinks.body")}</p>
        </section>

        <section className="mt-8 space-y-4 text-sm leading-relaxed text-ink-700">
          <h2 className="text-base font-semibold text-ink-900">
            10. {t("sections.contact.title")}
          </h2>
          <p>
            {t.rich("sections.contact.body", {
              email: (chunks) => (
                <a
                  href={`mailto:${chunks}`}
                  className="underline hover:text-ink-900"
                >
                  {chunks}
                </a>
              ),
              phone: (chunks) => {
                const value = String(chunks);
                return (
                  <a
                    href={`tel:${value.replace(/\s+/g, "")}`}
                    className="underline hover:text-ink-900"
                  >
                    {chunks}
                  </a>
                );
              },
            })}
          </p>
        </section>
      </main>
    </>
  );
}
