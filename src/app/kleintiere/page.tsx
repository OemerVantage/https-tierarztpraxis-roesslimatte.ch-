import { ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PatientGrid } from "@/components/kleintiere/PatientGrid";
import { CompetenceGrid } from "@/components/kleintiere/CompetenceGrid";
import { ProcessSteps } from "@/components/kleintiere/ProcessSteps";
import { EmergencyBanner } from "@/components/kleintiere/EmergencyBanner";
import { TeamSection } from "@/components/sections/TeamSection";

export default function KleintierePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden bg-primary-900 py-20 text-white md:py-32">
                <div className="absolute inset-0 z-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 30 50 70 50 100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container-custom relative z-10 text-center">
                    <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl text-white">
                        Kleintierpraxis
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-primary-100 md:text-xl leading-relaxed">
                        Kompetente medizinische Versorgung für Ihre Hunde, Katzen und Heimtiere.
                        Wir begleiten Sie und Ihr Tier von der Vorsorge bis zur Operation – mit Herz und Verstand.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/kontakt" className="btn-primary-white">
                            Termin vereinbaren
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. PATIENT GRID */}
            <PatientGrid />

            {/* 3. MEDICAL COMPETENCE */}
            <CompetenceGrid />

            {/* 4. VALUES / RUNDUM VERSORGT */}
            <section className="py-16 md:py-24 overflow-hidden">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[2rem] bg-gray-100 overflow-hidden relative z-10 shadow-xl">
                                {/* Placeholder Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 font-bold">
                                    [Bild: Tierärztin untersucht Hund]
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl -z-0"></div>
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-100 rounded-full blur-3xl -z-0"></div>
                        </div>

                        <div>
                            <h2 className="font-heading text-3xl font-bold text-secondary-500 md:text-4xl mb-6">
                                Rundum versorgt – mit Herz und moderner Tiermedizin
                            </h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                Wir nehmen uns Zeit für eine individuelle Betreuung. In unseren modernen Praxisräumen
                                bieten wir Ihnen eine stressarme Atmosphäre und modernste Ausstattung.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Stressarme Behandlung", desc: "Besonders sanfter Umgang mit ängstlichen Tieren." },
                                    { title: "Individuelle Therapie", desc: "Maßgeschneiderte Behandlungspläne für jedes Tier." },
                                    { title: "Transparente Beratung", desc: "Wir erklären Befunde und Kosten verständlich." }
                                ].map((val, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-2 h-full min-h-[50px] bg-primary-200 rounded-full"></div>
                                        <div>
                                            <h3 className="font-bold text-secondary-900 text-lg">{val.title}</h3>
                                            <p className="text-gray-500">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS STEPS */}
            <ProcessSteps />

            {/* 6. TEAM PREVIEW */}
            <section className="bg-gray-50 py-16">
                <div className="container-custom text-center mb-10">
                    <h2 className="font-heading text-3xl font-bold text-secondary-500">Ihr Team für Kleintiere</h2>
                </div>
                {/* Reusing Global Team Section but simplified or filtered in real app */}
                <TeamSection />
                <div className="text-center mt-10">
                    <Link href="/ueber-uns" className="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center gap-2">
                        Zum gesamten Team <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* 7. EMERGENCY */}
            <EmergencyBanner />

            {/* 8. LOCATION SHORT */}
            <section className="py-16 bg-white">
                <div className="container-custom">
                    <div className="bg-secondary-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <h2 className="font-heading text-3xl font-bold">Besuchen Sie uns in Aarberg</h2>
                            <div className="space-y-4 text-secondary-100">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-6 h-6 text-primary-400 mt-1" />
                                    <div>
                                        <p className="font-bold text-white">Tierarztpraxis Rösslimate</p>
                                        <p>Rösslimate 1, 3270 Aarberg</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-primary-400 mt-1" />
                                    <div>
                                        <p className="font-bold text-white">Öffnungszeiten</p>
                                        <p>Mo-Fr: 07:30 - 12:00 / 13:30 - 18:00</p>
                                        <p>Sa: 08:00 - 12:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 aspect-video bg-secondary-800 rounded-2xl overflow-hidden relative">
                            {/* Placeholder Map/Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-secondary-600 font-bold">
                                [Bild Praxisstandort]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-20 md:py-32 bg-primary-50 text-center">
                <div className="container-custom">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
                        Wir sind für Ihr Tier da.
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                        Vereinbaren Sie jetzt einen Termin oder lassen Sie sich von uns beraten.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/kontakt" className="btn-primary text-xl px-10 py-4">
                            Termin anfragen
                        </Link>
                        <a href="tel:0323921516" className="btn-secondary text-xl px-10 py-4 decoration-current">
                            032 392 15 16 anrufen
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
