"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="kontakt" className="bg-secondary-500 py-12 text-white md:py-16">
            <div className="container-custom">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Logo & Info */}
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="h-5 w-5 text-white"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 2L12 22M2 12L22 12" strokeLinecap="round" />
                                    <circle cx="6" cy="6" r="2" fill="currentColor" />
                                    <circle cx="18" cy="6" r="2" fill="currentColor" />
                                    <circle cx="6" cy="18" r="2" fill="currentColor" />
                                    <circle cx="18" cy="18" r="2" fill="currentColor" />
                                </svg>
                            </div>
                            <div>
                                <span className="font-heading font-semibold">
                                    Tierarztpraxis Rösslimate
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-300">
                            Ihr vertrauenswürdiger Partner für die Gesundheit Ihrer Tiere in
                            Aarberg und Umgebung.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="mb-4 font-heading font-semibold">Kontakt</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary-400" />
                                <a href="tel:0323921516" className="hover:text-white">
                                    032 392 15 16
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary-400" />
                                <a
                                    href="mailto:info@roesslimate.ch"
                                    className="hover:text-white"
                                >
                                    info@roesslimate.ch
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="mt-0.5 h-4 w-4 text-primary-400" />
                                <span>
                                    Rösslimatte 1<br />
                                    3270 Aarberg
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="mb-4 font-heading font-semibold">Navigation</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/kleintiere" className="hover:text-white">
                                    Kleintiere
                                </Link>
                            </li>
                            <li>
                                <Link href="/nutztiere" className="hover:text-white">
                                    Nutztiere & Pferde
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="hover:text-white">
                                    Aktuelles
                                </Link>
                            </li>
                            <li>
                                <Link href="/notfall" className="hover:text-white">
                                    Notfall
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-secondary-600 pt-6 text-center text-sm text-gray-400">
                    <p>
                        © {new Date().getFullYear()} Tierarztpraxis Rösslimate. Alle Rechte
                        vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    );
}
