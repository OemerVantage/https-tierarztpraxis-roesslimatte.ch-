"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
        }, 1500);
    };

    if (isSent) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-3xl bg-green-50 p-8 text-center border border-green-100"
            >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-green-800">Nachricht gesendet!</h3>
                <p className="text-green-700">
                    Vielen Dank für Ihre Anfrage. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-white p-6 shadow-card md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                        placeholder="Ihr Name"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefon</label>
                    <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                        placeholder="079 123 45 67"
                    />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                        placeholder="ihre@email.ch"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Betreff</label>
                <select
                    id="subject"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                >
                    <option>Allgemeine Anfrage</option>
                    <option>Terminanfrage Kleintiere</option>
                    <option>Terminanfrage Grosstiere</option>
                    <option>Rückrufbitte</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Nachricht</label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-100"
                    placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center py-4 text-lg"
            >
                {isSubmitting ? (
                    <span className="animate-pulse">Wird gesendet...</span>
                ) : (
                    <>
                        Nachricht senden
                        <Send className="ml-2 h-5 w-5" />
                    </>
                )}
            </button>
        </form>
    );
}
