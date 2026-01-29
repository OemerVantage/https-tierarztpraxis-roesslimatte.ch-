"use client";

import { motion } from "framer-motion";
import { Dog, Cat, Rabbit, Rat, Bird, Fish } from "lucide-react"; // Using Lucide placeholders for now

const patients = [
    {
        name: "Hunde",
        info: "Medizinische Betreuung für Ihren besten Freund",
        icon: Dog,
        color: "bg-orange-50 text-orange-600",
    },
    {
        name: "Katzen",
        info: "Sanfte Behandlung für Samtpfoten",
        icon: Cat,
        color: "bg-blue-50 text-blue-600",
    },
    {
        name: "Kaninchen",
        info: "Spezialsprechstunde für Nager",
        icon: Rabbit,
        color: "bg-green-50 text-green-600",
    },
    {
        name: "Meerschweinchen",
        info: "Ernährungsberatung & Zahnmedizin",
        icon: Rat, // Lucide doesn't have Guinea Pig, Rat is closest generic rodent
        color: "bg-yellow-50 text-yellow-600",
    },
    {
        name: "Hamster & Nager",
        info: "Artgerechte Behandlung für die Kleinsten",
        icon: Rat,
        color: "bg-amber-50 text-amber-600",
    },
    {
        name: "Vögel & Exoten",
        info: "Grundversorgung & Beratung",
        icon: Bird,
        color: "bg-teal-50 text-teal-600",
    },
];

export function PatientGrid() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl font-bold text-secondary-500 md:text-4xl mb-4">
                        Unsere Patienten
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Wir sind spezialisiert auf die medizinische Versorgung einer Vielzahl von Kleintieren.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {patients.map((patient, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center text-center transition-all hover:shadow-card hover:bg-white border border-transparent hover:border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${patient.color}`}>
                                <patient.icon className="w-8 h-8" />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-secondary-500 mb-2">
                                {patient.name}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                {patient.info}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
