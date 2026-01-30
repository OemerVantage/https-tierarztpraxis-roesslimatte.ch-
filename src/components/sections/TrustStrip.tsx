"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const trustItems = [
    {
        icon: "/icon-stethoscope.png",
        title: "Moderne Tiermedizin",
    },
    {
        icon: "/icon-clock.png",
        title: "24h-Notfalldienst",
    },
    {
        icon: "/icon-pets.png",
        title: "Klein- & Nutztiere",
    },
    {
        icon: "/icon-user.png",
        title: "Persönliche Betreuung",
    },
];

export function TrustStrip() {
    return (
        <section className="bg-white py-8 md:py-12">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                    <h2 className="font-heading text-2xl font-bold text-secondary-500 md:text-3xl mb-3">
                        Ganzheitliche Tiermedizin in Aarberg
                    </h2>
                    <p className="text-lg text-gray-600">
                        Wir sind für Sie und Ihre Tiere da – mit Herz, Verstand und moderner Ausstattung.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
                >
                    {trustItems.map((trustItem, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex flex-col items-center text-center"
                        >
                            <div
                                className={cn(
                                    "mb-3 flex h-14 w-14 items-center justify-center rounded-2xl overflow-hidden",
                                    "shadow-soft transition-transform hover:scale-105 md:h-16 md:w-16"
                                )}
                            >
                                <Image
                                    src={trustItem.icon}
                                    alt={trustItem.title}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-sm font-semibold text-secondary-500 md:text-base">
                                {trustItem.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
