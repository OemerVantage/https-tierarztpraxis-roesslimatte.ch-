"use client";

import { motion } from "framer-motion";
import { Syringe, Stethoscope, Scissors, Microscope, HeartPulse, ShieldCheck, Bone, Activity } from "lucide-react";

const competences = [
    {
        title: "Vorsorge & Impfungen",
        desc: "Individuelle Impfpläne & Gesundheitschecks",
        icon: ShieldCheck,
    },
    {
        title: "Diagnostik",
        desc: "Digitales Röntgen, Ultraschall & Labor",
        icon: Microscope,
    },
    {
        title: "Chirurgie & Notfälle",
        desc: "Weichteilchirurgie & Notfallversorgung",
        icon: Scissors,
    },
    {
        title: "Zahnmedizin",
        desc: "Zahnsteinentfernung & Zahnsanierungen",
        icon: Bone,
    },
    {
        title: "Innere Medizin",
        desc: "Diagnose & Therapie organischer Erkrankungen",
        icon: Stethoscope,
    },
    {
        title: "Parasiten & Reisen",
        desc: "Entwurmung & Reiseberatung",
        icon: Activity,
    },
    {
        title: "Ernährung & Prävention",
        desc: "Adipositas-Management & Diätetik",
        icon: HeartPulse,
    },
    {
        title: "Anästhesie",
        desc: "Schonende Narkosen & Überwachung",
        icon: Syringe,
    },
];

export function CompetenceGrid() {
    return (
        <section className="py-16 md:py-24 bg-secondary-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold text-secondary-500 md:text-4xl mb-4">
                        Medizinische Kompetenz
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Modernste Diagnostik und Therapie für die Gesundheit Ihres Tieres.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {competences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-heading font-bold text-lg text-secondary-900 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
