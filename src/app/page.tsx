import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQ } from "@/components/sections/FAQ";
import { NewsTeaser } from "@/components/sections/NewsTeaser";

export default function Home() {
    return (
        <main>
            <Hero />
            <TrustStrip />
            <ServiceCards />
            <AboutSection />
            <NewsTeaser />
            <PartnerLogos />
            <FAQ />
        </main>
    );
}
