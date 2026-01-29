"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, BarChart3, Clock } from "lucide-react";

export function PartnerSection() {
    return (
        <section className="py-20 bg-secondary-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="container-custom relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold md:text-4xl mb-6">
                        Ihr Partner für eine gesunde und leistungsfähige Tierhaltung
                    </h2>
                    <p className="text-xl text-secondary-200 max-w-3xl mx-auto leading-relaxed">
                        Wir verstehen die Anforderungen moderner Landwirtschaftsbetriebe.
                        Unser Fokus liegt auf Prävention, Wirtschaftlichkeit und langfristiger Zusammenarbeit.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: "Wirtschaftlichkeit", desc: "Gesunde Tiere als Basis für Ihren Betriebserfolg.", icon: TrendingUp },
                        { title: "Prävention", desc: "Krankheiten vermeiden durch proaktives Management.", icon: Shield },
                        { title: "Bestandsbetreuung", desc: "Systematische Analyse und Optimierung der Herde.", icon: BarChart3 },
                        { title: "Zuverlässigkeit", desc: "Wir sind da, wenn Sie uns brauchen – 365 Tage im Jahr.", icon: Clock }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-secondary-800/50 backdrop-blur-sm p-8 rounded-2xl border border-secondary-700"
                        >
                            <item.icon className="w-10 h-10 text-primary-400 mb-6" />
                            <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                            <p className="text-secondary-200 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
