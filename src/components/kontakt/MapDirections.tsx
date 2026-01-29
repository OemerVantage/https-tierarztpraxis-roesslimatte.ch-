"use client";

import { Car, Train } from "lucide-react";

export function MapDirections() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-4xl">
                        So finden Sie uns
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Unsere Praxis liegt zentral in Aarberg, gut erreichbar aus dem gesamten Seeland.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Map - Takes up 2 columns */}
                    <div className="lg:col-span-2 bg-gray-200 rounded-3xl min-h-[400px] relative overflow-hidden shadow-inner">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                            [Google Maps Integration]
                            <br />
                            Rösslimate 1, 3270 Aarberg
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm">
                            <div className="flex items-center gap-3 mb-4 text-secondary-900 font-bold text-lg">
                                <Car className="text-primary-500" />
                                Anfahrt & Parken
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Wir verfügen über reservierte Parkplätze direkt vor der Praxis. Die Zufahrt ist auch mit Hänger problemlos möglich.
                            </p>
                            <p className="text-sm text-gray-500">
                                <strong>Stallzufahrt:</strong> Für Grosstier-Notfälle nutzen Sie bitte die Zufahrt hinter dem Gebäude.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm">
                            <div className="flex items-center gap-3 mb-4 text-secondary-900 font-bold text-lg">
                                <Train className="text-primary-500" />
                                Öffentlicher Verkehr
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Vom Bahnhof Aarberg sind es nur 5 Gehminuten zu uns. Buslinie 86, Haltestelle "Post".
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
