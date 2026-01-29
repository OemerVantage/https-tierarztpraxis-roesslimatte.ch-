import { newsItems } from "@/lib/data/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
    return newsItems.map((post) => ({
        id: post.id.toString(),
    }));
}

export const dynamicParams = false; // 404 if id not found in newsItems

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = newsItems.find((p) => p.id.toString() === id);
    if (!post) return { title: "News" };
    return { title: `${post.title} | Tierarztpraxis Rösslimate` };
}

export default async function NewsDetailPage({ params }: Props) {
    const { id } = await params;
    const post = newsItems.find((p) => p.id.toString() === id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Header / Hero */}
            <div className="bg-secondary-900 text-white pt-32 pb-20">
                <div className="container-custom">
                    <Link href="/news" className="inline-flex items-center text-primary-200 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Zurück zur Übersicht
                    </Link>
                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200 mb-6">
                            <span className="bg-primary-500/20 px-3 py-1 rounded-full text-primary-300 font-semibold flex items-center gap-2 border border-primary-500/30">
                                <Tag className="w-3 h-3" /> {post.category}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 opacity-70" /> {post.date}
                            </span>
                            <span className="w-1 h-1 bg-primary-700 rounded-full"></span>
                            <span>{post.readTime}</span>
                        </div>
                        <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-6">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            <div className="container-custom">
                <article className="max-w-4xl -mt-10 relative z-10">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
                        {/* Image */}
                        <div className={`h-64 md:h-96 w-full ${post.image} relative bg-gray-200`}>
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-xl">
                                [Titelbild: {post.title}]
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 md:p-12 prose prose-lg prose-headings:font-heading prose-headings:text-secondary-900 prose-a:text-primary-600 max-w-none text-gray-600">
                            <p className="lead text-xl md:text-2xl text-secondary-600 font-medium mb-8">
                                {post.excerpt}
                            </p>
                            <div className="space-y-6">
                                {/* Placeholder Content - In real app, this would be MDX or rich text from CMS. 
                                    Using generic paragraphs for now based on title. */}
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <h3>Wichtig für Tierhalter</h3>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <ul>
                                    <li>Punkt 1: Wichtige Information zur Behandlung</li>
                                    <li>Punkt 2: Vorsorgemaßnahmen für zu Hause</li>
                                    <li>Punkt 3: Wann Sie uns kontaktieren sollten</li>
                                </ul>
                                <p>
                                    Wir stehen Ihnen für weitere Fragen gerne zur Verfügung. Vereinbaren Sie einfach einen Termin in unserer Sprechstunde.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Footer / CTA inside article page */}
                <div className="max-w-4xl border-t border-gray-100 pt-10">
                    <p className="font-heading text-2xl font-bold text-secondary-900 mb-4">Haben Sie Fragen zu diesem Thema?</p>
                    <div className="flex gap-4">
                        <Link href="/kontakt" className="btn-secondary">Kontakt aufnehmen</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
