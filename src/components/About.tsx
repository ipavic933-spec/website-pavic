import { Award, ShieldCheck, Briefcase, GraduationCap, Scale, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"
import { Badge } from "./ui/badge";

const About = () => {
  const t = useTranslations('AboutMe');

  const generalInformation = [
    { text: t('education'), icon: GraduationCap },
    { text: t('bar'), icon: Scale },
    { text: t('workEthics'), icon: MessageCircle },
  ];

  const pillList = [
    { text: t('expertise'), icon: Award},
    { text: t('confidentiality'), icon: ShieldCheck},
    { text: t('dedication'), icon: Briefcase},
  ]

  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
          {t("sectionTitle")}
        </span>
        <h2 className="mb-12 max-w-md font-serif text-3xl leading-[1.12] tracking-tight text-ink-900 md:text-4xl">
          {t("title")}
        </h2>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-7">
            <p className="max-w-lg text-base leading-relaxed text-ink-600">
              {t("workingExperience")}
            </p>

            <ul className="flex flex-col gap-3">
              {generalInformation.map((information, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200">
                    <information.icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="flex text-sm leading-relaxed text-start text-ink-900">
                    {information.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                {t("focusLabel")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {t("focus")}
              </p>
            </div>

            <div className="flex justify-between gap-4 flex-wrap">
              {pillList.map((pill, index) => (
                <Badge variant='outline' key={index} className="bg-white py-2 px-3 shadow-sm flex flex-row gap-3">
                  <div className="flex items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-200 p-1">
                    <pill.icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-ink-900">{pill.text}</h3>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="relative aspect-3/4 w-full max-w-sm overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white shadow-sm ring-1 ring-brand-200/50">
              <div className="absolute left-5 top-5 px-3 py-1">
                <Badge variant='outline' className="px-2 py-1 text-[10px] font-semibold uppercase   tracking-[0.2em] text-brand-700">
                  {t("name")}
                </Badge>
              </div>
              <div className="pointer-events-none absolute inset-3 rounded-2xl border border-brand-200/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-700/30">
                <span className="text-[11px] text-brand-700/35">IMAGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;