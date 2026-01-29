"use client";

import Image from "next/image";

export function HomelandOverview() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Blurred Landscape Background - Keeping as requested */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/ueber-uns/landscape-bg.jpg"
                    alt="Background Landscape"
                    fill
                    className="object-cover blur-sm brightness-[0.85]"
                    quality={60}
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="container-custom relative z-10">
                {/* Main Card Container - Beige, Centered, Rounded, Padded */}
                <div className="mx-auto max-w-[500px] md:max-w-xl bg-[#F4F1E8] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-white/20 p-6 md:p-10">

                    {/* Text Header */}
                    <div className="text-center mb-6 md:mb-10">
                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C4A34] leading-[1.1] mb-3 tracking-tight">
                            Unsere Heimat auf<br className="md:hidden" /> einen Blick
                        </h2>
                        <p className="font-heading text-lg md:text-xl text-[#2C4A34] opacity-90 font-medium">
                            Vom Städtli bis ins Herz des Seelands.
                        </p>
                    </div>

                    {/* Illustration - Intrinsic Sizing to Avoid Cropping */}
                    <div className="w-full">
                        <Image
                            src="/images/ueber-uns/map-illustration.jpg"
                            alt="Illustrierte Karte von Aarberg und Umgebung"
                            width={1200}
                            height={1600}
                            className="w-full h-auto block mx-auto rounded-[1.5rem] shadow-sm"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
