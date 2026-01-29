"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary-50 pt-32 pb-16 lg:pt-0 lg:pb-0">
            <div className="mx-auto max-w-[1920px]">
                <div className="grid lg:grid-cols-2 lg:gap-0 lg:min-h-[800px]">

                    {/* Left Column - Content */}
                    <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:pl-20 xl:pl-32 lg:pr-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            <h1 className="font-heading text-4xl font-bold leading-tight text-secondary-500 sm:text-5xl lg:text-6xl mb-6">
                                Tierarztpraxis Rösslimate – <br className="hidden lg:block" />
                                <span className="text-secondary-500">Kompetenz für Klein- & Grosstiere</span> <br className="hidden lg:block" />
                                in Aarberg.
                            </h1>

                            <p className="mb-8 text-lg text-gray-600 sm:text-xl leading-relaxed">
                                Ihr vertrauenswürdiger Partner für die Gesundheit Ihrer Tiere.
                                Moderne Tiermedizin mit Herz für alle Zwei- und Vierbeiner.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/kontakt"
                                    className="btn-outline border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-500 hover:text-white px-8 py-4 text-lg rounded-lg"
                                >
                                    Termin anfragen
                                </Link>

                                <Link
                                    href="#notfall"
                                    className="btn-primary bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg rounded-lg"
                                >
                                    Notfallnummer
                                </Link>
                            </div>

                            <div className="mt-12 flex gap-4">
                                <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
                                    <span>Kleintiere</span>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm">
                                    <span>Nutztiere & Pferde</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Image (Full Width, Flush Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[500px] w-full lg:h-auto"
                    >
                        <div className="absolute inset-0 overflow-hidden lg:rounded-bl-[150px] lg:rounded-tl-[30px]">
                            <Image
                                src="/hero-vet-cat.png"
                                alt="Tierärztin behandelt eine Katze"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Gradient Overlay for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/20 to-transparent lg:hidden" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
