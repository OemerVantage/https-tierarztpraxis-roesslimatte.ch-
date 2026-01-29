"use client";

import Link from "next/link";
import { AlertCircle, Phone } from "lucide-react";

export function EmergencyBanner() {
    return (
        <section className="bg-red-50 border-y-4 border-red-100 py-16">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 animate-pulse">
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="font-heading text-2xl font-bold text-red-900 mb-2">
                                Notfall mit Ihrem Tier?
                            </h2>
                            <p className="text-red-800 max-w-lg">
                                Ausserhalb der Öffnungszeiten erreichen Sie unseren Notfalldienst rund um die Uhr.
                                Zögern Sie nicht, uns anzurufen.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a href="tel:0323921516" className="bg-red-600 text-white hover:bg-red-700 px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-colors shadow-lg shadow-red-200">
                            <Phone className="w-5 h-5" />
                            032 392 15 16
                        </a>
                        <Link href="/notfall" className="text-red-700 font-semibold hover:underline px-4">
                            Mehr Infos zum Notfall
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
