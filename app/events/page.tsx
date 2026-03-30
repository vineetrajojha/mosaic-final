"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import eventsData from "@/events.json";



export default function EventsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 pb-12 px-6 text-center bg-background flex flex-col items-center">
                <div className="relative w-fit mx-auto flex items-center justify-center py-16 px-24 md:py-20 md:px-32">
                    <img
                        src="/events-button.svg"
                        alt="Events Button Background"
                        className="absolute inset-0 w-full h-full object-contain scale-125 md:scale-150"
                    />
                    <h1 className="relative z-10 text-4xl md:text-6xl font-heading font-bold text-[#EEB702] tracking-wider uppercase drop-shadow-sm pt-2">
                        Events
                    </h1>
                </div>
            </section>

            {/* Events Categories */}
            <div className="space-y-24 pb-24">
                {eventsData.events.map((categoryGroup, categoryIndex) => {
                    return (
                        <section key={categoryGroup.category} className="px-6 md:px-12 max-w-7xl mx-auto">
                            {/* Events Grid for this Category */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Category Cover Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className="h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                                >
                                    <img
                                        src={`/events/${categoryGroup.coverImage}`}
                                        alt={`${categoryGroup.category} Cover`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop";
                                        }}
                                    />
                                </motion.div>

                                {categoryGroup.items.map((event: any, index: number) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                                        className="group relative h-[400px] rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-500 cursor-pointer"
                                    >
                                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSclCmAtdWZmJalGxt3gBj_NHXkpDEebzB3Kfe3uHtamL1gJ0Q/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                                            {/* Background Image */}
                                            <div className="absolute inset-0">
                                                <img
                                                    src={`/events/${event.image}`}
                                                    alt={event.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop";
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-500" />
                                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Content Overlay */}
                                            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end h-full">
                                                <div className="transform transition-all duration-500 translate-y-8 group-hover:translate-y-0">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold font-heading mb-3">
                                                            {categoryGroup.category}
                                                        </div>
                                                    </div>

                                                    <h3 className="text-3xl font-heading font-bold text-white mb-2 leading-tight">
                                                        {event.name}
                                                    </h3>

                                                    {/* Hover Details */}
                                                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                                                        <p className="text-gray-300 text-sm font-sans mb-4 line-clamp-3">
                                                            {event.description}
                                                        </p>

                                                        <div className="space-y-2 text-sm text-gray-200 font-sans border-t border-white/20 pt-4">
                                                            <div className="flex justify-between">
                                                                <span className="text-white/60">Participants:</span>
                                                                <span className="font-semibold text-accent">{event.participants}</span>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <span className="text-white/60">Registration Fee:</span>
                                                                <span className="font-semibold text-accent">{event.fee}</span>
                                                            </div>
                                                        </div>

                                                        <button className="w-full mt-6 py-3 rounded-lg bg-accent text-accent-foreground font-bold hover:bg-white hover:text-black transition-colors font-heading text-sm uppercase tracking-wide">
                                                            Register Now
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            <Footer />
        </main>
    );
}
