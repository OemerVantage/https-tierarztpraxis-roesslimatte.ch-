import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Tierarztpraxis Rösslimate | Aarberg",
    description:
        "Kompetenz für Klein- & Grosstiere in Aarberg. Moderne Tiermedizin, 24h-Notfalldienst, persönliche Betreuung.",
    keywords: [
        "Tierarzt",
        "Aarberg",
        "Kleintiere",
        "Nutztiere",
        "Pferde",
        "Notfalldienst",
        "Tiermedizin",
    ],
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// ... existing code ...

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className={`${inter.variable} ${manrope.variable}`}>
            <body className="font-sans">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
