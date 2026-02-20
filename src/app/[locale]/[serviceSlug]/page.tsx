import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { routing } from "@/i18n/routing";
import {
  getServiceMessages,
  getServiceSlugEntry,
  getServiceSlugs,
} from "@/lib/service-slugs";

type PageProps = {
  params: Promise<{ locale: string; serviceSlug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getServiceSlugs(locale).map((serviceSlug) => ({
      locale,
      serviceSlug,
    })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, serviceSlug } = await params;
  const entry = getServiceSlugEntry(locale, serviceSlug);

  if (!entry) {
    return {};
  }

  const messages = getServiceMessages(locale);

  const baseTitle = entry.serviceId
    ? messages?.services?.[entry.serviceId]?.title ?? entry.serviceId
    : messages?.hero?.title ?? serviceSlug;
  const baseDescription = entry.serviceId
    ? messages?.services?.[entry.serviceId]?.desc ?? messages?.services?.desc
    : messages?.hero?.subtitle ?? messages?.services?.desc;
  const title = entry.seoTitle ?? baseTitle;
  const description = entry.seoDescription ?? baseDescription;

  return {
    title,
    description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { locale, serviceSlug } = await params;
  const entry = getServiceSlugEntry(locale, serviceSlug);

  if (!entry) {
    notFound();
  }

  const serviceId = entry.serviceId ?? undefined;

  return (
    <>
      <Header />
      <main>
        <Hero serviceId={serviceId} />
        <About />
        <Services serviceId={serviceId} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
