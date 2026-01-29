"use client";

import { Clock, Phone, CalendarCheck, Car, Train, MapPin } from "lucide-react";

export function VisitUsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN: Hours & Procedures (5 cols) */}
                    <div className="lg:col-span-5 space-y-10">
                        {/* Hours */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <h2 className="font-heading text-xl font-bold text-secondary-900">Öffnungszeiten</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <span className="font-medium text-gray-900">Montag - Freitag</span>
                                    <div className="text-right text-gray-600">
                                        <div>07:30 - 12:00</div>
                                        <div>13:30 - 18:00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                                    <span className="font-medium text-gray-900">Samstag</span>
                                    <div className="text-right text-gray-600">
                                        <div>08:00 - 12:00</div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center text-gray-400 pt-1 text-sm">
                                    <span>Sonntag</span>
                                    <span>geschlossen (24h Notfall)</span>
                                </div>
                            </div>
                        </div>

                        {/* Procedure Info */}
                        <div className="pl-2">
                            <h3 className="font-heading text-2xl font-bold text-secondary-900 mb-6">Ablauf & Termine</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white text-secondary-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Telefonische Anmeldung</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Wir arbeiten nach Terminvereinbarung, um Wartezeiten zu vermeiden.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-white text-secondary-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                                        <CalendarCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Hausbesuche (Nutztiere)</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Bitte melden Sie Besuche für Grosstiere wenn möglich bis 08:00 Uhr telefonisch an.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Map & Directions (7 cols) */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-3xl min-h-[350px] relative overflow-hidden shadow-inner flex items-center justify-center">
                            <div className="text-center text-gray-500 font-medium">
                                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                <span>Google Maps Integration</span>
                                <div className="text-xs mt-1">Rösslimate 1, 3270 Aarberg</div>
                            </div>
                        </div>

                        {/* Directions Cards Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-3 text-secondary-900 font-bold">
                                    <Car className="w-5 h-5 text-primary-500" />
                                    Anfahrt & Parken
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Reservierte Parkplätze direkt vor der Praxis. Zufahrt mit Hänger möglich (Stallzufahrt nutzen).
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <div className="flex items-center gap-3 mb-3 text-secondary-900 font-bold">
                                    <Train className="w-5 h-5 text-primary-500" />
                                    ÖV
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    5 Gehminuten vom Bahnhof Aarberg. Bus 86, Haltestelle "Post" oder "Bahnhof".
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
