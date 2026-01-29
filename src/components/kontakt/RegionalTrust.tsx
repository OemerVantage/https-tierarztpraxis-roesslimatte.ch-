"use client";

import { MapPin } from "lucide-react";

export function RegionalTrust() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container-custom text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-500">
                    <MapPin className="w-8 h-8" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-secondary-900 mb-6">
                    Ihre Tierarztpraxis in Aarberg
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    Die Tierarztpraxis Rösslimate ist die erste Anlaufstelle für Tierhalter im Seeland.
                    Wir betreuen Patienten aus Aarberg, Lyss, Biel und der gesamten Region Bern.
                    Dank unserer zentralen Lage und der guten Verkehrsanbindung sind wir im Notfall schnell für Sie da.
                </p>
            </div>
        </section>
    );
}
