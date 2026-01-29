"use client";

import { motion } from "framer-motion";
import { Phone, Clock, MapPin, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmergencySection() {
    return (
        <section id="notfall" className="bg-white py-16 md:py-20">
            <div className="container-custom">
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Emergency Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="rounded-3xl bg-primary-50 p-8 shadow-soft md:p-10"
                    >
                        <h2 className="mb-6 font-heading text-2xl font-bold text-secondary-500 md:text-3xl">
                            Notfall &<br />
                            <span className="text-primary-500">Öffnungszeiten</span>
                        </h2>

                        <div className="mb-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
                                <div>
                                    <p className="font-semibold text-secondary-500">Sprechzeiten</p>
                                    <p className="text-gray-600">Mo–Fr: 08:00–12:00, 14:00–18:00</p>
                                    <p className="text-gray-600">Sa: 08:00–12:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500" />
                                <div>
                                    <p className="font-semibold text-secondary-500">Adresse</p>
                                    <p className="text-gray-600">Rösslimatte 1</p>
                                    <p className="text-gray-600">3270 Aarberg</p>
                                </div>
                            </div>
                        </div>

                        {/* Emergency Phone */}
                        <a
                            href="tel:0323921516"
                            className="btn-primary"
                        >
                            <Phone className="h-5 w-5" />
                            032 392 15 16
                        </a>
                    </motion.div>

                    {/* Map Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative overflow-hidden rounded-3xl bg-gray-100 shadow-soft"
                    >
                        {/* Placeholder map - replace with real map integration */}
                        <div className="flex h-full min-h-[300px] items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
                            <div className="text-center">
                                <MapPin className="mx-auto mb-3 h-12 w-12 text-primary-500" />
                                <p className="font-semibold text-secondary-500">Rösslimatte 1</p>
                                <p className="text-gray-600">3270 Aarberg</p>
                            </div>
                        </div>

                        {/* Emergency Badge */}
                        <div className="absolute bottom-4 right-4">
                            <div
                                className={cn(
                                    "flex items-center gap-2 rounded-xl bg-emergency-500 px-4 py-2",
                                    "font-semibold text-white shadow-lg"
                                )}
                            >
                                <AlertCircle className="h-4 w-4" />
                                NOTFALL
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
