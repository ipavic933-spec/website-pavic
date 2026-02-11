import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import HeroSection from "./components/home/HeroSection";
import HighlightBanner from "./components/home/HighlightBanner";
import MapSection from "./components/home/MapSection";
import ServicesSection from "./components/home/ServicesSection";

export default function Home() {
  return (
    <main id="top" className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <HeroSection />
      </div>
      <HighlightBanner />
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
        <AboutSection />
        <ServicesSection />
        <MapSection />
        <ContactSection />
      </div>
    </main>
  );
}
