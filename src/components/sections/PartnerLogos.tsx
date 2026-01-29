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

export function PartnerLogos() {
    return (
        <section className="bg-gray-50 py-12 md:py-16">
            <div className="container-custom text-center">
                <p className="mb-8 font-heading text-lg font-medium text-gray-500">
                    Mitgliedschaften & Partner
                </p>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20 opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                >
                    {/* Placeholder Logos - In a real project these would be actual SVGs/PNGs */}
                    {["GST | SVS", "Vetsuisse", "STIV", "Identitas"].map((partner, index) => (
                        <motion.div key={index} variants={item} className="flex items-center gap-2">
                            <div className="h-12 w-auto min-w-[120px] bg-gray-200 rounded flex items-center justify-center px-4 py-2 font-bold text-gray-500">
                                {partner} Logo
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
