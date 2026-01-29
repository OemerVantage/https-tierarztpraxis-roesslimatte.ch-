"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
    {
        name: "Dr. med. vet. Sarah Muster",
        role: "Leitende Tierärztin Kleintiere",
        specialty: "Chirurgie & Zahnheilkunde",
        image: "/team-placeholder-1.jpg", // Needs placeholder handling
    },
    {
        name: "Dr. med. vet. Thomas Beispiel",
        role: "Leitender Tierarzt Grosstiere",
        specialty: "Herdenmanagement & Fruchtbarkeit",
        image: "/team-placeholder-2.jpg",
    },
    {
        name: "Julia Test",
        role: "TPA",
        specialty: "Anästhesie & Empfang",
        image: "/team-placeholder-3.jpg",
    },
];

export function TeamSection() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container-custom">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-heading text-3xl font-bold text-secondary-500 md:text-4xl">
                        Unser Team
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        Ein erfahrenes Team aus Tierärzten und tiermedizinischen
                        Praxisassistentinnen kümmert sich um das Wohl Ihrer Tiere.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group overflow-hidden rounded-3xl bg-white shadow-card transition-all hover:-translate-y-2 hover:shadow-feature"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                                {/* Placeholder for Team Image */}
                                <div className="absolute inset-0 flex items-center justify-center bg-primary-50 text-primary-300 font-heading text-6xl font-bold opacity-30">
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="mb-1 font-heading text-xl font-bold text-secondary-900">
                                    {member.name}
                                </h3>
                                <p className="mb-2 font-bold text-primary-500">
                                    {member.role}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {member.specialty}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
