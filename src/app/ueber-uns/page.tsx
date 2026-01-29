import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { TeamSection } from "@/components/sections/TeamSection";
import { PhilosophySection } from "@/components/ueber-uns/PhilosophySection";
import { PracticeDetails } from "@/components/ueber-uns/PracticeDetails";
import { WhyUsGrid } from "@/components/ueber-uns/WhyUsGrid";
import { PromiseSection } from "@/components/ueber-uns/PromiseSection";
import { HomelandOverview } from "@/components/ueber-uns/HomelandOverview";
import { EmergencyBanner } from "@/components/kleintiere/EmergencyBanner";

export default function UeberUnsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* 1. HERO SECTION */}
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden bg-secondary-900 py-20 text-white md:py-32">
                <div className="absolute inset-0 z-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container-custom relative z-10 text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-sm">
                        <span className="text-white text-sm font-semibold tracking-wide uppercase">Seit 30 Jahren in Aarberg</span>
                    </div>
                    <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl lg:text-7xl leading-tight">
                        Über uns
                    </h1>
                    <p className="mx-auto mb-10 max-w-3xl text-xl text-secondary-100 md:text-2xl leading-relaxed">
                        Tiermedizin mit Verantwortung, Erfahrung und Herz.
                        <br />
                        <span className="opacity-80 text-lg">Wir sind mehr als nur eine Praxis – wir sind Ihr Partner für die Gesundheit Ihrer Tiere.</span>
                    </p>
                </div>
            </section>

            {/* 2. PHILOSOPHIE */}
            <PhilosophySection />

            {/* 3. TEAM */}
            <section id="team" className="bg-white">
                <TeamSection />
            </section>

            {/* 4. PRAXIS DETAILS */}
            <PracticeDetails />

            {/* 5. WHY US */}
            <WhyUsGrid />

            {/* 6. PROMISE */}
            <PromiseSection />

            {/* 7. REGIONAL (HOMELAND) */}
            <HomelandOverview />

            {/* 8. NOTFALL */}
            <EmergencyBanner />

            {/* 9. FINAL CTA */}
            <section className="py-20 bg-primary-50 text-center">
                <div className="container-custom">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-900 mb-6">
                        Wir freuen uns, Sie kennenzulernen.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                        <Link href="/kontakt" className="btn-primary text-lg px-8 py-3">
                            Kontakt aufnehmen
                        </Link>
                        <Link href="/kontakt" className="btn-secondary text-lg px-8 py-3">
                            Termin anfragen
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
