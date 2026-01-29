import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ContactOverview } from "@/components/kontakt/ContactOverview";
import { EmergencyBanner } from "@/components/kleintiere/EmergencyBanner";
import { VisitUsSection } from "@/components/kontakt/VisitUsSection";

export default function KontaktPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* 1. HERO SECTION */}
            <section className="relative bg-secondary-900 text-white pt-32 pb-32 md:pb-40 overflow-hidden">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-secondary-800 opacity-50 z-0"></div>

                <div className="container-custom relative z-10 text-center">
                    <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">
                        Kontakt
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-300 font-light leading-relaxed mb-8">
                        Wir sind für Sie und Ihr Tier da.<br />
                        Vereinbaren Sie Ihren Termin ganz einfach.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="tel:0323921516" className="btn-primary px-8 py-3 text-lg">
                            Jetzt anrufen
                        </a>
                        <Link href="/notfall" className="btn-secondary bg-white/10 border-white/20 hover:bg-white/20 text-white px-8 py-3 text-lg backdrop-blur-sm">
                            Notfall
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. CONTACT OVERVIEW (Floating Cards) */}
            <ContactOverview />

            {/* 3. CONTACT FORM SECTION */}
            <section className="pb-16 pt-8 md:pt-12 bg-gray-50" id="formular">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Schreiben Sie uns</span>
                            <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-5xl mt-2 mb-6">
                                Kontaktformular
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Für allgemeine Anfragen (keine Notfälle!). Wir melden uns so schnell wie möglich bei Ihnen.
                            </p>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* 4. VISIT US SECTION (Map, Hours, Directions) */}
            <VisitUsSection />

            {/* 5. EMERGENCY BANNER (Compact) */}
            <div className="bg-white py-12">
                <div className="container-custom">
                    <EmergencyBanner />
                </div>
            </div>

        </main>
    );
}
