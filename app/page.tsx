"use client"

import { I18nProvider } from "@/lib/i18n"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Banner } from "@/components/banner"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <Hero />
        <Banner />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </I18nProvider>
  )
}
