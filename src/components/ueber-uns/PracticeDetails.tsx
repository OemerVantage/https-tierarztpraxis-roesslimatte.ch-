"use client";

import Image from "next/image";

export function PracticeDetails() {
    return (
        <section className="py-16 md:py-24 bg-secondary-900 text-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 h-min">
                        <div className="space-y-4 translate-y-8">
                            <div className="aspect-square bg-secondary-800 rounded-2xl overflow-hidden shadow-lg relative">
                                <div className="absolute inset-0 flex items-center justify-center text-secondary-600 font-bold text-sm">
                                    [Empfang]
                                </div>
                            </div>
                            <div className="aspect-[3/4] bg-secondary-800 rounded-2xl overflow-hidden shadow-lg relative">
                                <div className="absolute inset-0 flex items-center justify-center text-secondary-600 font-bold text-sm">
                                    [Behandlungsraum]
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-[3/4] bg-secondary-800 rounded-2xl overflow-hidden shadow-lg relative">
                                <div className="absolute inset-0 flex items-center justify-center text-secondary-600 font-bold text-sm">
                                    [Labor/OP]
                                </div>
                            </div>
                            <div className="aspect-square bg-secondary-800 rounded-2xl overflow-hidden shadow-lg relative">
                                <div className="absolute inset-0 flex items-center justify-center text-secondary-600 font-bold text-sm">
                                    [Wartebereich]
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <h2 className="font-heading text-3xl font-bold md:text-4xl mb-6">
                            Unsere Praxis in Aarberg
                        </h2>
                        <div className="space-y-6 text-secondary-200 text-lg leading-relaxed">
                            <p>
                                Seit über 30 Jahren ist die Rösslimate eine feste Institution für Tiergesundheit im Seeland.
                                Was als klassische Landpraxis begann, hat sich zu einem modernen medizinischen Zentrum entwickelt.
                            </p>
                            <p>
                                Wir verbinden Tradition mit Fortschritt: Unsere Räumlichkeiten sind hell, freundlich und mit modernster
                                Medizintechnik ausgestattet. Vom digitalen Röntgen über Ultraschall bis zum hauseigenen Labor –
                                wir haben die Werkzeuge, um Ihrem Tier schnell und präzise zu helfen.
                            </p>
                            <p>
                                Dabei haben wir eines nie vergessen: Die Atmosphäre. Bei uns sollen sich Mensch und Tier
                                willkommen und sicher fühlen.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-6">
                            <div>
                                <div className="text-4xl font-bold text-primary-400 mb-1">30+</div>
                                <div className="text-sm opacity-60 uppercase tracking-wider">Jahre Erfahrung</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-primary-400 mb-1">Modern</div>
                                <div className="text-sm opacity-60 uppercase tracking-wider">Ausstattung</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
