"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 text-center bg-gradient-to-b from-primary/20 to-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1500&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
                        About <span className="text-accent">Mosaic</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary font-sans leading-relaxed">
                        Celebrating 25 years of art, culture, and creativity. Mosaic is where tradition meets innovation.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Our Vision</h2>
                        <p className="text-lg text-secondary font-sans leading-relaxed mb-6">
                            To foster a community where every individual feels empowered to express themselves through art. We aim to create a platform that transcends boundaries and unites people through the universal language of creativity.
                        </p>
                        <p className="text-lg text-secondary font-sans leading-relaxed">
                            Mosaic envisions a future where cultural heritage is preserved and celebrated while embracing modern artistic expressions.
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
                            alt="Vision"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* History Timeline Brief */}
            <section className="py-24 px-6 bg-white/5 border-y border-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold text-center text-foreground mb-16">Our Journey</h2>

                    <div className="space-y-12">
                        {[
                            { year: "2001", title: "The Beginning", desc: "Mosaic started as a small intra-college fest." },
                            { year: "2010", title: "Going National", desc: "First time participation from colleges across the country." },
                            { year: "2018", title: "The Biggest Yet", desc: "Crossed a footfall of 10,000 students." },
                            { year: "2025", title: "Silver Jubilee", desc: "Celebrating 25 years of excellence." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center"
                            >
                                <div className="text-5xl font-heading font-bold text-accent/20 w-32 shrink-0">{item.year}</div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-secondary font-sans">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* University Section */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-8">About The University</h2>
                <p className="text-lg text-secondary font-sans max-w-3xl mx-auto mb-12">
                    Founded in 19XX, our university has been a beacon of knowledge and culture. With a sprawling campus and state-of-the-art facilities, it provides the perfect backdrop for an event as grand as Mosaic.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop" className="rounded-xl h-64 object-cover w-full" alt="Campus 1" />
                    <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop" className="rounded-xl h-64 object-cover w-full" alt="Campus 2" />
                    <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d50c20f?q=80&w=600&auto=format&fit=crop" className="rounded-xl h-64 object-cover w-full" alt="Campus 3" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
