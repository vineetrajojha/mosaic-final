"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Mosaic 2026 Section */}
            <section className="py-56 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        ABOUT MOSAIC
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-[#702F8A] rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#8E44AD] relative"
                >
                    <div className="relative z-10 text-center space-y-6">
                        <p className="text-lg md:text-xl text-[#E0D0E8] font-sans leading-relaxed">
                            Last year, MOSAIC 2025 set the stage on fire with incredible talent and vibrant energy at IILM University. And now, get ready for something even bigger—MOSAIC 2026! This time, we’re bringing a grander two-day cultural extravaganza with more thrilling inter-college competitions, spectacular performances, and unforgettable experiences. With creativity, passion, and youth spirit at its peak, MOSAIC 2026 promises to be our most magnificent fest ever. Let’s make it larger, brighter, and truly magical together!
                        </p>
                    </div>

                    {/* Decorative Element at Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full flex justify-center pointer-events-none z-20">
                        <img src="/about.svg" alt="" className="w-[60%] md:w-[40%] opacity-100 drop-shadow-lg" />
                    </div>
                </motion.div>
            </section>

            {/* University Section */}
            <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-accent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        ABOUT THE UNIVERSITY
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-[#702F8A] rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#8E44AD] relative"
                >
                    <div className="relative z-10 text-center space-y-6">
                        <p className="text-lg md:text-xl text-[#E0D0E8] font-sans leading-relaxed">
                            IILM University, Greater Noida, established under the Uttar Pradesh Private University (Amendment) Act 2022, is a young and dynamic institution dedicated to fostering academic excellence, innovation, and holistic development. Nestled in the vibrant educational hub of Greater Noida, the university is strategically located to provide students with access to a global learning environment and opportunities for industry exposure. With its foundation rooted in the principles of inclusivity, integrity, and quality, IILM University is committed to creating a transformative educational experience for all its stakeholders.
                        </p>
                    </div>

                    {/* Decorative Element at Bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full flex justify-center pointer-events-none z-20">
                        <img src="/about.svg" alt="" className="w-[60%] md:w-[40%] opacity-100 drop-shadow-lg" />
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
