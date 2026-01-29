"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Calendar, ArrowRight, Tag, ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { newsItems } from "@/lib/data/news";

export function NewsTeaser() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const displayedNews = newsItems.slice(0, 5); // Show latest 5

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === "left" ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 md:py-28 bg-white border-t border-gray-100 overflow-hidden">
            <div className="container-custom">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Aktuelles</span>
                        <h2 className="font-heading text-3xl font-bold text-secondary-900 md:text-5xl mt-2">
                            Neues aus der Praxis
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg">
                            Wissenswertes rund um Kleintiere, Nutztiere und unser Team.
                        </p>
                    </div>

                    {/* Controls & See All */}
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                        <Link href="/news" className="btn-secondary px-6 py-2.5 text-sm ml-2 hidden md:inline-flex">
                            Alle Beiträge
                        </Link>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {displayedNews.map((news, index) => (
                        <motion.article
                            key={news.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="snap-center bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all group flex flex-col flex-shrink-0 w-[85vw] sm:w-[400px] border border-gray-100"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-48 ${news.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center text-secondary-900/20 font-bold text-lg">
                                    [Bild: {news.category}]
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary-900 flex items-center gap-1 shadow-sm">
                                    <Tag className="w-3 h-3" />
                                    {news.category}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                    <Calendar className="w-3 h-3" />
                                    {news.date}
                                    <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                                    {news.readTime}
                                </div>

                                <h3 className="font-heading font-bold text-lg text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                    <Link href={`/news/${news.id}`} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {news.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 mb-6 text-sm line-clamp-2 leading-relaxed flex-grow">
                                    {news.excerpt}
                                </p>

                                <div className="mt-auto flex items-center text-primary-600 font-bold text-sm group-hover:gap-2 transition-all">
                                    Weiterlesen <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/news" className="btn-secondary w-full">
                        Alle Beiträge ansehen
                    </Link>
                </div>

            </div>
        </section>
    );
}
