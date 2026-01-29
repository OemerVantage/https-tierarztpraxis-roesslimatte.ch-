"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    "Moderne Tiermedizin",
    "24H-Notfalldienst",
    "Kleintierambulanz",
    "Kleintiersprechstunde",
    "Persönliche Betreuung",
];

export function AboutSection() {
    return (
        <section id="ueber-uns" className="bg-primary-50 py-16 md:py-20">
            <div className="container-custom">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative overflow-hidden hero-image-shape border-4 border-white shadow-feature">
                            <Image
                                src="/hero-vet-cat.png"
                                alt="Tierärztin mit Katze"
                                width={600}
                                height={500}
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="feature-card text-left"
                    >
                        <h2 className="mb-6 font-heading text-2xl font-bold text-secondary-500 md:text-3xl">
                            Tierarztpraxis
                            <br />
                            <span className="text-primary-500">Rösslimate</span>
                        </h2>

                        <ul className="mb-6 space-y-3">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary-500" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="tel:0323921516"
                            className={cn(
                                "inline-flex items-center gap-2 text-lg font-semibold text-secondary-500",
                                "transition-colors hover:text-primary-500"
                            )}
                        >
                            032 392 15 16
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
