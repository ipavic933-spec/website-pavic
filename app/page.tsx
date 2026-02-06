import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import HeroSection from "./components/home/HeroSection";
import MapSection from "./components/home/MapSection";
import ServicesSection from "./components/home/ServicesSection";

export default function Home() {
  return (
    <main id="top" className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MapSection />
      <ContactSection />
    </main>
  );
}
