"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCards() {
    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            {/* Background SVG constraint: Height limited to form 'backing' shapes, Section is White */}
            <div className="absolute inset-0 z-0 flex justify-between items-center pointer-events-none">
                {/* Left Wing SVG */}
                <svg
                    className="h-full w-[48%] text-primary-500/10 -ml-1"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    {/* Path: Symmetric Rounded, but vertically constrained (10% padding top/bottom) */}
                    {/* M0,10 (Start below top) -> ... -> L0,90 (End above bottom) */}
                    {/* Width 85 is the 'neck', 100 is the 'curve center' */}
                    <path d="M0,5 L85,5 Q100,5 100,20 L100,80 Q100,95 85,95 L0,95 Z" />
                </svg>

                {/* Right Wing SVG (Mirrored) */}
                <svg
                    className="h-full w-[48%] text-primary-500/10 -mr-1"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    {/* Path: Symmetric Rounded, vertically constrained */}
                    <path d="M100,5 L15,5 Q0,5 0,20 L0,80 Q0,95 15,95 L100,95 Z" />
                </svg>
            </div>



            <div className="container-custom relative z-10">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {/* Left Card - Kleintierpraxis */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="group relative overflow-hidden rounded-[40px] bg-white p-8 text-center shadow-card transition-all hover:-translate-y-2 hover:shadow-feature md:p-12 z-20"
                    >
                        <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-primary-50">
                            <Image
                                src="/icon-small-animals.png"
                                alt="Kleintiere"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="mb-4 font-heading text-3xl font-bold text-secondary-500">
                            Kleintierpraxis
                        </h3>

                        <p className="mb-8 text-lg font-medium text-gray-500">
                            Hunde, Katzen & Kleintiere
                        </p>

                        <Link
                            href="#kleintiere"
                            className="btn-primary mx-auto inline-flex items-center gap-2 px-8 py-3 text-lg"
                        >
                            Mehr erfahren
                        </Link>
                    </motion.div>

                    {/* Right Card - Grosstierpraxis */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group relative overflow-hidden rounded-[40px] bg-white p-8 text-center shadow-card transition-all hover:-translate-y-2 hover:shadow-feature md:p-12 z-20"
                    >
                        <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-primary-50">
                            <Image
                                src="/icon-large-animals.png"
                                alt="Grosstiere"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="mb-4 font-heading text-3xl font-bold text-secondary-500">
                            Grosstierpraxis
                        </h3>

                        <p className="mb-8 text-lg font-medium text-gray-500">
                            Nutztiere, Rinder & Pferde
                        </p>

                        <Link
                            href="#nutztiere"
                            className="btn-primary mx-auto inline-flex items-center gap-2 px-8 py-3 text-lg"
                        >
                            Mehr erfahren
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
