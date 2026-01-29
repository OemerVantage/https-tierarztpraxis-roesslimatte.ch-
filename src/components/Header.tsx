"use client";

import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/kleintiere", label: "Kleintiere" },
    { href: "/nutztiere", label: "Nutztiere & Pferde" },
    { href: "/news", label: "Aktuelles" },
    { href: "/notfall", label: "Notfall" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary-100 bg-white/95 backdrop-blur-sm">
            <div className="container-custom">
                <div className="flex h-16 items-center justify-between md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
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
                        <div className="flex flex-col">
                            <span className="font-heading text-sm font-semibold text-secondary-500 md:text-base">
                                Tierarztpraxis
                            </span>
                            <span className="font-heading text-sm font-semibold text-primary-500 md:text-base">
                                Rösslimate
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-1 lg:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "rounded-lg px-3 py-2 text-sm font-medium text-gray-600",
                                    "transition-colors hover:bg-primary-50 hover:text-primary-600"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Phone CTA */}
                    <div className="flex items-center gap-3">
                        <a
                            href="tel:0323921516"
                            className="btn-primary hidden sm:flex"
                        >
                            <Phone className="h-4 w-4" />
                            <span>032 392 15 16</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-[64px] z-40 bg-white lg:hidden h-[calc(100vh-64px)] overflow-y-auto"
                    >
                        <nav className="container-custom flex flex-col py-8 gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 + 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block rounded-2xl px-6 py-4 text-xl font-bold text-secondary-900 hover:bg-primary-50 hover:text-primary-600 transition-colors border border-transparent hover:border-primary-100"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 px-4"
                            >
                                <a
                                    href="tel:0323921516"
                                    className="btn-primary w-full justify-center py-4 text-lg shadow-lg shadow-primary-500/20 mb-4"
                                >
                                    <Phone className="h-5 w-5 mr-2" />
                                    032 392 15 16
                                </a>
                                <div className="text-center text-gray-400 text-sm">
                                    24h Notfalldienst für Kleintiere & Pferde
                                </div>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
