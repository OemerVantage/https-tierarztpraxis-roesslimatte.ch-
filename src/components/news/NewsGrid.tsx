"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { newsItems, categories } from "@/lib/data/news";

export function NewsGrid() {
    const [activeCategory, setActiveCategory] = useState("Alle");

    const filteredNews = activeCategory === "Alle"
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container-custom">

                {/* Filters */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                ? "bg-secondary-900 text-white shadow-md transform scale-105"
                                : "bg-white text-gray-600 hover:bg-gray-100 hover:text-secondary-900"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNews.map((news, index) => (
                        <motion.article
                            key={news.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-xl transition-all group flex flex-col h-full"
                        >
                            {/* Image Placeholder */}
                            <div className={`h-56 ${news.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center text-secondary-900/20 font-bold text-lg">
                                    [Bild: {news.category}]
                                </div>
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary-900 flex items-center gap-1 shadow-sm">
                                    <Tag className="w-3 h-3" />
                                    {news.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    {news.date}
                                    <span className="w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
                                    {news.readTime}
                                </div>

                                <h3 className="font-heading font-bold text-xl text-secondary-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2">
                                    <Link href={`/news/${news.id}`} className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        {news.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                                    {news.excerpt}
                                </p>

                                <div className="mt-auto flex items-center text-primary-600 font-bold text-sm group-hover:gap-2 transition-all">
                                    Weiterlesen <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
