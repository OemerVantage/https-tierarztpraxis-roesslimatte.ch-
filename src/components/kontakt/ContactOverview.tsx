"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const options = [
    {
        title: "Adresse",
        content: "Rösslimate 1, 3270 Aarberg",
        link: "https://goo.gl/maps/placeholder",
        linkText: "Route planen",
        icon: MapPin,
        color: "bg-primary-50 text-primary-600",
    },
    {
        title: "Telefon",
        content: "032 392 15 16",
        link: "tel:0323921516",
        linkText: "Jetzt anrufen",
        icon: Phone,
        color: "bg-secondary-50 text-secondary-600",
    },
    {
        title: "E-Mail",
        content: "info@roesslimate.ch",
        link: "mailto:info@roesslimate.ch",
        linkText: "Nachricht schreiben",
        icon: Mail,
        color: "bg-gray-50 text-gray-600",
    },
];

export function ContactOverview() {
    return (
        <section className="py-12 -mt-16 md:-mt-24 relative z-20">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-6">
                    {options.map((opt, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${opt.color}`}>
                                <opt.icon className="w-7 h-7" />
                            </div>
                            <h3 className="font-heading font-bold text-xl text-secondary-900 mb-2">{opt.title}</h3>
                            <p className="text-lg text-gray-700 font-medium mb-6">{opt.content}</p>
                            <a href={opt.link} className="flex items-center gap-2 text-primary-600 font-bold hover:gap-3 transition-all mt-auto">
                                {opt.linkText} <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
