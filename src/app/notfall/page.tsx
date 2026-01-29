import { Phone } from "lucide-react";
import Link from "next/link";

export default function NotfallPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-center">
            <section className="bg-red-50 py-20 px-4 md:py-32">
                <div className="container-custom max-w-4xl mx-auto">
                    <span className="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600 mb-6">
                        24h Notfalldienst
                    </span>
                    <h1 className="mb-8 font-heading text-5xl font-bold text-secondary-900 md:text-6xl">
                        Notfall? Wir sind<br className="hidden md:block" /> für Sie da.
                    </h1>
                    <p className="mb-12 text-xl text-gray-600">
                        Rufen Sie uns sofort an. Ausserhalb der Öffnungszeiten erreichen Sie unseren Notfalldienst unter der gleichen Nummer.
                    </p>

                    <a
                        href="tel:0323921516"
                        className="inline-flex items-center justify-center gap-4 rounded-full bg-red-600 px-8 py-6 text-2xl font-bold text-white shadow-xl transition-transform hover:scale-105 hover:bg-red-700"
                    >
                        <Phone className="h-8 w-8" />
                        032 392 15 16
                    </a>

                    <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-left md:p-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Wichtige Hinweise für den Notfall:</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                            <li>Bewahren Sie Ruhe.</li>
                            <li>Rufen Sie uns an, bevor Sie losfahren, damit wir alles vorbereiten können.</li>
                            <li>Informieren Sie uns über die Art des Notfalls und den Zustand des Tieres.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
