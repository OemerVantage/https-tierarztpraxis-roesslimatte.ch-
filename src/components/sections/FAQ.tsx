"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Wie vereinbare ich einen Termin?",
        answer: "Sie können Termine telefonisch unter 032 392 15 16 vereinbaren oder uns eine E-Mail schreiben. Für Routineuntersuchungen empfehlen wir eine frühzeitige Anmeldung."
    },
    {
        question: "Was mache ich in einem Notfall?",
        answer: "In Notfällen sind wir unter unserer Notfallnummer 032 392 15 16 rund um die Uhr für Sie erreichbar. Bitte rufen Sie kurz an, bevor Sie vorbeikommen, damit wir alles vorbereiten können."
    },
    {
        question: "Welche Tiere behandeln Sie?",
        answer: "Wir sind eine gemischte Praxis und behandeln sowohl Kleintiere (Hunde, Katzen, Heimtiere) als auch Nutztiere und Pferde. Unser Team verfügt über Spezialisten in beiden Bereichen."
    },
    {
        question: "Welche Zahlungsmöglichkeiten gibt es?",
        answer: "Sie können bei uns bar, mit EC-Karte, PostFinance Card oder gängigen Kreditkarten bezahlen. Bei größeren Beträgen ist nach Absprache auch eine Rechnung möglich."
    },
    {
        question: "Haben Sie Parkplätze vor der Praxis?",
        answer: "Ja, direkt vor der Praxis stehen Ihnen kostenlose Parkplätze zur Verfügung, damit Sie Ihren Vierbeiner bequem in die Praxis bringen können."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-secondary-50 relative overflow-hidden" id="faq">
            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-900 mb-6 tracking-tight">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-xl text-primary-900/70">
                        Antworten auf die wichtigsten Fragen rund um Ihren Besuch bei uns.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-primary-900/5 transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 focus:outline-none"
                            >
                                <span className={cn(
                                    "font-heading text-xl font-semibold transition-colors duration-300",
                                    openIndex === index ? "text-primary-600" : "text-primary-900"
                                )}>
                                    {faq.question}
                                </span>
                                <div className={cn(
                                    "p-2 rounded-full transition-all duration-300 flex-shrink-0",
                                    openIndex === index ? "bg-primary-100 text-primary-600 rotate-180" : "bg-gray-100 text-gray-500"
                                )}>
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <div
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-8 pb-8 pt-0 text-primary-900/70 leading-relaxed text-lg">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
