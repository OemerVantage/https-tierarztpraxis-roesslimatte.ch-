"use client";

import { motion } from "framer-motion";
import { Phone, UserCheck, Stethoscope, HeartHandshake } from "lucide-react";

const steps = [
    {
        title: "Termin vereinbaren",
        desc: "Telefonisch oder Online",
        icon: Phone,
    },
    {
        title: "Ankommen & Empfang",
        desc: "Stressfreies Wartezimmer",
        icon: UserCheck,
    },
    {
        title: "Untersuchung",
        desc: "Gründlicher Check-up",
        icon: Stethoscope,
    },
    {
        title: "Behandlung & Nachsorge",
        desc: "Individueller Therapieplan",
        icon: HeartHandshake,
    },
];

export function ProcessSteps() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold text-secondary-500 md:text-4xl mb-4">
                        Ein entspannter Besuch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Wir nehmen uns Zeit für Sie und Ihr Tier – für einen stressfreien Tierarztbesuch.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full h-1 bg-gray-100 hidden md:block -z-10" />

                    <div className="grid md:grid-cols-4 gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="flex flex-col items-center text-center bg-white"
                            >
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary-100 flex items-center justify-center text-primary-500 mb-6 shadow-sm relative z-10">
                                    <step.icon className="w-10 h-10" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary-500 text-white flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="font-heading font-bold text-lg text-secondary-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
