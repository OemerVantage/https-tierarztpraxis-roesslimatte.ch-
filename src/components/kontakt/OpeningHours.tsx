"use client";

import { Clock, CalendarCheck } from "lucide-react";

export function OpeningHours() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Hours Table */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary-500 shadow-sm">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h2 className="font-heading text-2xl font-bold text-secondary-900">Öffnungszeiten</h2>
                        </div>

                        <div className="space-y-4 text-lg">
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                <span className="font-medium text-gray-900">Montag - Freitag</span>
                                <div className="text-right text-gray-600">
                                    <div>07:30 - 12:00</div>
                                    <div>13:30 - 18:00</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                                <span className="font-medium text-gray-900">Samstag</span>
                                <div className="text-right text-gray-600">
                                    <div>08:00 - 12:00</div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-gray-400 pt-2">
                                <span>Sonntag</span>
                                <span>Geschlossen (Notfalldienst)</span>
                            </div>
                        </div>
                    </div>

                    {/* Procedure Info */}
                    <div>
                        <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-bold text-sm mb-6">
                            Ihr Besuch bei uns
                        </div>
                        <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-6">
                            Termine & Ablauf
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary-100 text-secondary-600 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-secondary-900 mb-2">Telefonische Voranmeldung</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Um Wartezeiten für Sie und Stress für Ihr Tier zu vermeiden, bitten wir stets um telefonische Terminvereinbarung.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CalendarCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-secondary-900 mb-2">Hausbesuche Nutztiere</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Für unsere landwirtschaftlichen Kunden sind wir täglich auf Achse. Bitte melden Sie Besuche wenn möglich bis 08:00 Uhr an.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );

    function Phone({ className }: { className?: string }) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        )
    }
}
