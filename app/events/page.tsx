"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import Link from "next/link";

// Dummy Data
const eventsData = [
    {
        id: 1,
        name: "Rhythm Divine",
        category: "Dance",
        date: "April 24",
        time: "10:00 AM",
        venue: "Main Auditorium",
        image: "https://images.unsplash.com/photo-1545959570-a925b0ae8b74?q=80&w=600&auto=format&fit=crop",
        prize: "₹15,000",
        teamSize: "Group (6-12)",
        description: "The ultimate group dance battle. Show off your synchronization and choreography.",
    },
    {
        id: 2,
        name: "Sargam",
        category: "Music",
        date: "April 25",
        time: "2:00 PM",
        venue: "Open Air Theatre",
        image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=600&auto=format&fit=crop",
        prize: "₹10,000",
        teamSize: "Solo/Duet",
        description: "A soulful singing competition for eastern and western vocals.",
    },
    {
        id: 3,
        name: "Curtain Call",
        category: "Drama",
        date: "April 26",
        time: "11:00 AM",
        venue: "Mini Auditorium",
        image: "https://images.unsplash.com/photo-1503095392269-27528ca388ec?q=80&w=600&auto=format&fit=crop",
        prize: "₹20,000",
        teamSize: "Group (5-10)",
        description: "Stage play competition. drama, expressions and storytelling at its best.",
    },
    {
        id: 4,
        name: "Brush Strokes",
        category: "Art",
        date: "April 24",
        time: "11:00 AM",
        venue: "Art Gallery",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600&auto=format&fit=crop",
        prize: "₹5,000",
        teamSize: "Solo",
        description: "Live painting competition. Theme will be given on spot.",
    },
    {
        id: 5,
        name: "Battle of Bands",
        category: "Music",
        date: "April 26",
        time: "5:00 PM",
        venue: "Main Stage",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=600&auto=format&fit=crop",
        prize: "₹25,000",
        teamSize: "Band (3-8)",
        description: "The flagship event. Rock the stage with your band's original compositions.",
    },
    {
        id: 6,
        name: "Verse War",
        category: "Literary",
        date: "April 25",
        time: "10:00 AM",
        venue: "Seminar Hall",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
        prize: "₹3,000",
        teamSize: "Solo",
        description: "Poetry slam competition. Express your thoughts in verse.",
    },
];

const categories = ["All", "Dance", "Music", "Drama", "Art", "Literary", "Sports"];

export default function EventsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredEvents = activeCategory === "All"
        ? eventsData
        : eventsData.filter(event => event.category === activeCategory);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Page Header */}
            <section className="pt-32 pb-12 px-6 text-center bg-gradient-to-b from-primary/20 to-background">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                    Events
                </h1>
                <p className="text-xl text-secondary font-sans max-w-2xl mx-auto">
                    Explore the diverse range of competitions and performances at Mosaic 2026.
                </p>
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
                                            <span>Prize: {event.prize}</span>
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
