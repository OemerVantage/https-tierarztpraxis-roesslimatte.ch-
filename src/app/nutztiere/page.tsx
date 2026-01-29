import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FarmPatientGrid } from "@/components/nutztiere/FarmPatientGrid";
import { FarmServiceGrid } from "@/components/nutztiere/FarmServiceGrid";
import { PartnerSection } from "@/components/nutztiere/PartnerSection";
import { MobileServiceSection } from "@/components/nutztiere/MobileServiceSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { EmergencyBanner } from "@/components/kleintiere/EmergencyBanner";

export default function NutztierePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden bg-secondary-900 py-20 text-white md:py-32">
                <div className="absolute inset-0 z-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl lg:text-7xl leading-tight">
                            Nutztiere & Pferde
                        </h1>
                        <p className="mb-10 text-xl text-secondary-100 md:text-2xl leading-relaxed">
                            Tierärztliche Kompetenz für Landwirtschaft & Pferdehalter.
                            <br />
                            <span className="opacity-80 text-lg">Ihr Partner für Bestandesbetreuung, Notfälle und Einzeltierbehandlung.</span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:0323921516" className="btn-primary flex items-center justify-center gap-3 text-lg px-8 py-4">
                                <Phone className="w-5 h-5" />
                                Direkt anrufen
                            </a>
                            <Link href="/notfall" className="btn-secondary bg-white/10 border-white/20 hover:bg-white/20 text-white flex items-center justify-center text-lg px-8 py-4">
                                Notfall Grosstiere
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. UNSERE PATIENTEN */}
            <FarmPatientGrid />

            {/* 3. LEISTUNGSSPEKTRUM */}
            <FarmServiceGrid />

            {/* 4. PARTNER DER LANDWIRTSCHAFT */}
            <PartnerSection />

            {/* 5. VOR-ORT-SERVICE */}
            <MobileServiceSection />

            {/* 6. TEAM */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom text-center mb-10">
                    <h2 className="font-heading text-3xl font-bold text-secondary-900">Ihr Fachteam für Nutztiere & Pferde</h2>
                </div>
                <TeamSection />
            </section>

            {/* 7. REGIONAL (Integrated in MobileServiceSection visually, emphasizing here if needed separate usually, but MobileSection covers it well) */}

            {/* 8. EMERGENCY */}
            {/* We can customize the banner props if we make it reusable, for now reusing Kleintiere banner is okay as 24h is valid for all, 
                 but typically large animal clients call the main number directly. Red banner serves purpose well. */}
            <EmergencyBanner />

            {/* 9. FINAL CTA */}
            <section className="py-20 md:py-32 bg-primary-50 text-center">
                <div className="container-custom">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                        Ihr Betrieb in guten Händen.
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Kontaktieren Sie uns für eine Bestandsanalyse oder die Betreuung Ihrer Tiere.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:0323921516" className="btn-primary text-xl px-10 py-4 decoration-current">
                            032 392 15 16 anrufen
                        </a>
                        <Link href="/kontakt" className="btn-secondary text-xl px-10 py-4">
                            Kontakt aufnehmen
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
