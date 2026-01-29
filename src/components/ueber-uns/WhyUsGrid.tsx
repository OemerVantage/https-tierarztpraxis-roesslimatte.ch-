"use client";

import { Check } from "lucide-react";

const advantages = [
    {
        title: "Klein- & Grosstiere unter einem Dach",
        desc: "Einzigartige Kombination aus Kompetenz für Haustiere und landwirtschaftliche Nutztiere.",
    },
    {
        title: "Regionale Verankerung",
        desc: "Wir kennen die Leute und Höfe im Seeland persönlich. Kurze Wege, schnelle Hilfe.",
    },
    {
        title: "24h Notfalldienst",
        desc: "Wir sind rund um die Uhr für Sie erreichbar. Ein beruhigendes Gefühl der Sicherheit.",
    },
    {
        title: "Modern & Bodenständig",
        desc: "High-Tech Medizin ohne Starallüren. Wir bleiben verständlich und nahbar.",
    },
];

export function WhyUsGrid() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-4xl">
                        Warum Tierarztpraxis Rösslimate?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((adv, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                                <Check className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-secondary-900 mb-3">{adv.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
