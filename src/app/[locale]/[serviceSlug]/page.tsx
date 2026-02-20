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
  getServiceIdBySlug,
  getServiceMessages,
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
  const serviceId = getServiceIdBySlug(locale, serviceSlug);

  if (!serviceId) {
    return {};
  }

  const messages = getServiceMessages(locale);
  const title = messages?.services?.[serviceId]?.title ?? serviceId;
  const description =
    messages?.services?.[serviceId]?.desc ?? messages?.services?.desc;

  return {
    title,
    description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { locale, serviceSlug } = await params;
  const serviceId = getServiceIdBySlug(locale, serviceSlug);

  if (!serviceId) {
    notFound();
  }

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
