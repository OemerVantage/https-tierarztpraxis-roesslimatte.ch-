"use client";

import { MapPin, Users } from "lucide-react";

export function RegionalRoots() {
    return (
        <section className="py-24 bg-secondary-900 relative overflow-hidden text-white">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/20 text-primary-300 text-sm font-semibold tracking-wider uppercase border border-primary-500/20">
                            Lokal Verankert
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold leading-tight text-white">
                            Verwurzelt in Aarberg <br />und dem Seeland
                        </h2>
                    </div>

                    <p className="text-xl md:text-2xl text-secondary-100 leading-relaxed font-light max-w-2xl mx-auto">
                        Wir sind stolz, Teil dieser Region zu sein. Viele unserer Landwirte kennen wir seit Generationen.
                        Auch für Kleintierhalter sind wir der verlässliche Ansprechpartner vor der Haustür.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-8">
                        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[160px] hover:bg-white/10 transition-colors">
                            <MapPin className="w-8 h-8 text-primary-400 mb-1" />
                            <span className="font-medium text-lg">Zentral in Aarberg</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm min-w-[160px] hover:bg-white/10 transition-colors">
                            <Users className="w-8 h-8 text-primary-400 mb-1" />
                            <span className="font-medium text-lg">Persönliche Nähe</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
