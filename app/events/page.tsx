"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import Link from "next/link";
import eventsData from "@/events.json";

// Types
interface EventItem {
    id: number;
    name: string;
    description: string;
    fee: number | string;
    teamSize: string;
    image: string;
    category: string;
    date: string;
    time: string;
    venue: string;
    prize: string;
}

// Process events data
const allEvents: EventItem[] = eventsData.events.flatMap((categoryGroup) =>
    categoryGroup.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        description: item.note || `Experience the thrill of ${item.name} at Mosaic 2026!`,
        fee: item.fee || item.fee_per_person || (item.solo_fee ? `Solo: ${item.solo_fee}, Group: ${item.group_fee}` : "Free"),
        teamSize: item.team_size || item.participants || (item.fee_per_person ? "Per Person" : "Individual/Group"),
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop", // Default placeholder
        category: categoryGroup.category,
        date: "TBA",
        time: "TBA",
        venue: "TBA",
        prize: "TBA",
    }))
);

const categories = ["All", ...eventsData.events.map((group) => group.category)];

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredEvents = activeCategory === "All"
        ? allEvents
        : allEvents.filter((event) => event.category === activeCategory);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Page Header */}
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

            {/* Filter Tabs */}
            <section className="px-6 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-heading font-bold transition-all duration-300 ${activeCategory === category
                                ? "bg-accent text-accent-foreground scale-105 shadow-[0_0_15px_rgba(238,183,2,0.4)]"
                                : "bg-white/5 text-secondary hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            {/* Events Grid */}
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={event.image}
                                        alt={event.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold font-heading">
                                        {event.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                        {event.name}
                                    </h3>
                                    <p className="text-secondary text-sm font-sans mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="space-y-2 text-sm text-secondary/80 font-sans mb-6">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-accent" />
                                            <span>{event.date} • {event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-accent" />
                                            <span>{event.venue}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users size={16} className="text-accent" />
                                            <span>{event.teamSize}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Trophy size={16} className="text-accent" />
                                            <span>Fee: {typeof event.fee === 'number' ? `₹${event.fee}` : event.fee}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Link href="/register" className="flex-1">
                                            <button className="w-full py-2 rounded-lg bg-accent text-accent-foreground font-bold hover:opacity-90 transition font-heading text-sm">
                                                Register
                                            </button>
                                        </Link>
                                        <button className="flex-1 py-2 rounded-lg border border-white/20 text-white font-bold hover:bg-white/10 transition font-heading text-sm">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-20 text-secondary font-sans">
                        No events found in this category.
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
