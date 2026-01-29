import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Primary - Medical Teal (Main: #4A8B8B, Strong: #007E80)
                primary: {
                    50: "#F4F9F9",   // Light Background Mint
                    100: "#E6F4F4",  // Hero Background Blob
                    200: "#CCE9E9",
                    300: "#99D4D4",
                    400: "#66BFBF",
                    500: "#4A8B8B",  // Primary Teal
                    600: "#007E80",  // Strong Teal (CTAs)
                    700: "#006B6D",
                    800: "#00585A",
                    900: "#004547",
                },
                // Secondary - Dark Blue/Gray for Headings
                secondary: {
                    500: "#2D3E4E",  // Secondary Dark
                    600: "#243240",
                    700: "#1B2632",
                    800: "#121A24",
                    900: "#090D12",
                },
                // Accent - Warm Orange
                accent: {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                },
                // Emergency Red
                emergency: {
                    500: "#ef4444",
                    600: "#dc2626",
                },
                // Background Colors
                background: "#F4F9F9",  // Light Mint Background
                foreground: "#2D3E4E",  // Secondary Dark
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                heading: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
            },
            borderRadius: {
                "4xl": "2rem",
                "leaf": "30px 30px 30px 150px",      // Hero image leaf shape
                "wave": "50px 0 50px 0",              // Background wave shape
            },
            boxShadow: {
                soft: "0 4px 20px -2px rgba(0, 0, 0, 0.06)",
                card: "0 8px 30px -4px rgba(0, 0, 0, 0.08)",
                "feature": "0 15px 35px rgba(74, 139, 139, 0.15)",  // Teal-tinted shadow
            },
        },
    },
    plugins: [],
};
export default config;
