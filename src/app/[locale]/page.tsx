import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import ConfirmationEmailTemplate from "../components/ConfirmationEmailTemplate";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <ConfirmationEmailTemplate name={'a'} />
      </main>
      <Footer />
    </>
  );
}
