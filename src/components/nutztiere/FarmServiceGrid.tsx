"use client";

import { motion } from "framer-motion";
import { Activity, Stethoscope, Microscope, Syringe, Baby, Apple } from "lucide-react";

const serviceCategories = [
    {
        title: "Bestandesbetreuung",
        icon: Activity,
        items: [
            "Regelmässige Betriebsbesuche",
            "Bestandsanalysen & Optimierung",
            "Eutergesundheit & Milchhygiene",
            "Fütterungsberatung",
            "Impfprogramme & Entwurmung"
        ]
    },
    {
        title: "Reproduktion & Gynäkologie",
        icon: Baby,
        items: [
            "Fruchtbarkeitsdiagnostik (Ultraschall)",
            "Künstliche Besamung",
            "Trächtigkeitsuntersuchungen",
            "Geburtshilfe & Kaiserschnitt",
            "Puerperalkontrollen"
        ]
    },
    {
        title: "Chirurgie & Einzeltier",
        icon: Syringe,
        items: [
            "Notfallversorgung (24h)",
            "Chirurgische Eingriffe (Bauch, Wunden)",
            "Lahmheitsbehandlungen",
            "Klauenpflege & -chirurgie",
            "Kastrationen"
        ]
    },
    {
        title: "Diagnostik & Labor",
        icon: Microscope,
        items: [
            "Hauseigenes Labor (Blut, Milch, Kot)",
            "Trächtigkeitsanalysen",
            "Erregerbestimmung",
            "Resistenztests",
            "Parasitologische Untersuchungen"
        ]
    }
];

export function FarmServiceGrid() {
    return (
        <section className="py-16 md:py-24 bg-secondary-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-4xl mb-4">
                        Unser Leistungsspektrum
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Wir bieten umfassende tierärztliche Dienstleistungen für moderne Landwirtschaftsbetriebe und Pferdehalter.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-primary-200 transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-secondary-900">
                                    {category.title}
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
