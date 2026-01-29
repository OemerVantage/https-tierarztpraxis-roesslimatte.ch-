"use client";

import { motion } from "framer-motion";
import { Beef, Footprints, PiggyBank, Milk } from "lucide-react"; // Placeholders

const patients = [
    {
        name: "Rinder & Kälber",
        info: "Bestandesbetreuung & Einzeltier",
        icon: Beef,
        image: "bg-amber-100", // Placeholder color
    },
    {
        name: "Pferde",
        info: "Medizin, Zähne & Notfälle",
        icon: Footprints,
        image: "bg-stone-100",
    },
    {
        name: "Schweine",
        info: "Gesundheitsmanagement",
        icon: PiggyBank,
        image: "bg-rose-100",
    },
    {
        name: "Schafe & Ziegen",
        info: "Parasitenmanagement & Geburtshilfe",
        icon: Milk, // Generic farm icon
        image: "bg-green-100",
    },
    {
        name: "Neuweltkameliden",
        info: "Spezifische Betreuung",
        icon: Footprints, // Fallback
        image: "bg-orange-100",
    },
];

export function FarmPatientGrid() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-4xl mb-4">
                        Unsere Patienten
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Spezialisierte Betreuung für Ihre landwirtschaftlichen Nutztiere und Pferde.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {patients.map((patient, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative overflow-hidden rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <div className={`aspect-[4/3] ${patient.image} flex items-center justify-center text-secondary-300`}>
                                <patient.icon className="w-12 h-12 opacity-50" />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-heading font-bold text-lg text-secondary-900 mb-1">
                                    {patient.name}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {patient.info}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
