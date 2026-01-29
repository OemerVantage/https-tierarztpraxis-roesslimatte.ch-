import { NewsGrid } from "@/components/news/NewsGrid";

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Simple Hero */}
            <section className="bg-white pt-32 pb-16 md:pt-40 md:pb-24 border-b border-gray-100">
                <div className="container-custom text-center">
                    <h1 className="mb-6 font-heading text-4xl font-bold text-secondary-900 md:text-6xl">
                        Aktuelles & Wissenswertes
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl text-gray-500 font-light leading-relaxed">
                        Neuigkeiten aus der Praxis, saisonale Tipps für Tierhalter und medizinische Updates.
                    </p>
                </div>
            </section>

            <NewsGrid />

            {/* Newsletter Subscription Section */}
            <section className="py-24 bg-primary-100/60 text-secondary-900 rounded-t-[3rem] -mt-8 relative z-10 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                <div className="container-custom text-center relative z-20">
                    <div className="max-w-2xl mx-auto">
                        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Newsletter</span>
                        <h2 className="font-heading text-3xl font-bold mb-6 md:text-5xl text-secondary-900">Keine Neuigkeiten verpassen?</h2>
                        <p className="text-secondary-600 mb-10 text-lg leading-relaxed">
                            Melden Sie sich für unseren Newsletter an und erhalten Sie regelmäßig wertvolle Tipps zur Tiergesundheit und Updates aus unserer Praxis.
                        </p>

                        <div className="bg-white p-1 rounded-full shadow-lg border border-primary-200/50 flex flex-col sm:flex-row gap-0 max-w-lg mx-auto transform transition-all hover:shadow-xl hover:scale-[1.01]">
                            <input
                                type="email"
                                placeholder="Ihre E-Mail Adresse"
                                className="flex-grow bg-transparent text-secondary-900 placeholder-secondary-400 px-6 py-4 rounded-full focus:outline-none"
                            />
                            <button className="btn-primary rounded-full px-8 py-3 m-1 whitespace-nowrap shadow-none font-medium">
                                Anmelden
                            </button>
                        </div>
                        <p className="text-xs text-secondary-400 mt-6">
                            Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
