"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 text-center bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
                        About <span className="text-accent">Mosaic</span>
                    </h1>
                </div>
            </section>

            {/* Mosaic 2026 Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Mosaic 2026</h2>
                        <p className="text-lg text-secondary font-sans leading-relaxed mb-6">
                            Last year, MOSAIC 2025 set the stage on fire with incredible talent and vibrant energy at IILM University. And now, get ready for something even bigger—MOSAIC 2026!
                        </p>
                        <p className="text-lg text-secondary font-sans leading-relaxed">
                            This time, we’re bringing a grander two-day cultural extravaganza with more thrilling inter-college competitions, spectacular performances, and unforgettable experiences. With creativity, passion, and youth spirit at its peak, MOSAIC 2026 promises to be our most magnificent fest ever. Let’s make it larger, brighter, and truly magical together!
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
                            alt="Mosaic 2026"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* University Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-8">About The University</h2>
                <p className="text-lg text-secondary font-sans max-w-4xl mx-auto mb-12 leading-loose">
                    IILM University, Greater Noida, established under the Uttar Pradesh Private University (Amendment) Act 2022, is a young and dynamic institution dedicated to fostering academic excellence, innovation, and holistic development. Nestled in the vibrant educational hub of Greater Noida, the university is strategically located to provide students with access to a global learning environment and opportunities for industry exposure. With its foundation rooted in the principles of inclusivity, integrity, and quality, IILM University is committed to creating a transformative educational experience for all its stakeholders.
                </p>
            </section>

            <Footer />
        </main>
    );
}
