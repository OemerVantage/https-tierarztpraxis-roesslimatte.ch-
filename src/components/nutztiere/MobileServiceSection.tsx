"use client";

import Image from "next/image";
import { Truck, MapPin } from "lucide-react";

export function MobileServiceSection() {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold bg-gray-200">
                                [Bild: Praxisauto / Tierarzt auf Hof]
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full font-bold text-sm mb-6">
                            <Truck className="w-4 h-4" />
                            Mobile Fahrpraxis
                        </div>
                        <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-4xl mb-6">
                            Vor Ort für Sie im Einsatz
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Unsere Fahrzeuge sind mobile Apotheken und Behandlungsräume zugleich.
                            Damit garantieren wir eine schnelle und effektive Versorgung Ihrer Tiere direkt im Stall oder auf der Weide.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary-50 text-secondary-600 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-secondary-900">Regionales Einsatzgebiet</h3>
                                    <p className="text-gray-500">
                                        Wir betreuen Betriebe in Aarberg und im gesamten Seeland.
                                        Kurze Anfahrtswege ermöglichen schnelle Reaktionszeiten.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
