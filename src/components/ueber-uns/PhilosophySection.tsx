"use client";

import { motion } from "framer-motion";
import { Heart, Stethoscope, UserCheck, ShieldCheck } from "lucide-react";

const values = [
    {
        title: "Respekt",
        desc: "Jedes Tier ist ein Lebewesen mit Gefühlen. Wir behandeln es mit der gleichen Sorgfalt wie unser eigenes.",
        icon: Heart,
    },
    {
        title: "Kompetenz",
        desc: "Wir bilden uns stetig weiter und nutzen moderne Diagnostik für präzise Behandlungen.",
        icon: Stethoscope,
    },
    {
        title: "Individualität",
        desc: "Keine Schubladen. Wir hören zu und finden die Lösung, die zu Ihnen und Ihrem Tier passt.",
        icon: UserCheck,
    },
    {
        title: "Transparenz",
        desc: "Wir sprechen offen über Befunde, Optionen und Kosten. Damit Sie sicher entscheiden können.",
        icon: ShieldCheck,
    },
];

export function PhilosophySection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50/50 overflow-hidden">
            <div className="container-custom relative">
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl -z-10"></div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    <div>
                        <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full font-bold text-sm mb-6 shadow-sm border border-primary-200">
                            Unsere Werte
                        </div>
                        <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-5xl mb-6 leading-tight">
                            Tiermedizin mit <span className="text-primary-600">Verantwortung</span> und <span className="text-accent-500">Herz</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            In der Tierarztpraxis Rösslimate verbinden wir fachliche Exzellenz mit tiefer Menschlichkeit.
                            Unser Handeln wird von Respekt gegenüber dem Leben und Verantwortung gegenüber unseren Kunden geleitet.
                        </p>
                    </div>
                    <div className="relative z-10">
                        {/* Decorative Blob behind Image */}
                        <div className="absolute -inset-4 bg-primary-200 rounded-[2.5rem] rotate-6 -z-10"></div>
                        <div className="absolute -inset-4 bg-accent-100 rounded-[2.5rem] -rotate-3 -z-20 opacity-70"></div>

                        <div className="aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 border-4 border-white">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 font-bold">
                                [Bild: Tierarzt streichelt Hund]
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-card hover:shadow-feature transition-all border-t-4 border-primary-500 group"
                        >
                            <div className="w-14 h-14 bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors rounded-2xl flex items-center justify-center mb-5 shadow-sm">
                                <value.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-secondary-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
