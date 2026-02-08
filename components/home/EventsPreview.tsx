"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Placeholder data - replace with Supabase data later
const events = [
    {
        id: 1,
        name: "Battle of Bands",
        category: "Music",
        date: "April 25",
        image: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Solera (Fashion Show)",
        category: "Lifestyle",
        date: "April 25",
        image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Group Dance (Western)",
        category: "Dance",
        date: "April 24",
        image: "https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=600&auto=format&fit=crop",
    },
];

export default function EventsPreview() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                            Featured Events
                        </h2>
                        <p className="text-secondary font-sans max-w-xl">
                            Get ready to showcase your talent and compete with the best.
                        </p>
                    </div>
                    <Link
                        href="/events"
                        className="flex items-center gap-2 text-accent font-heading font-bold hover:gap-4 transition-all"
                    >
                        View All Events <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={event.image}
                                alt={event.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold mb-3 border border-accent/50 backdrop-blur-sm">
                                    {event.category}
                                </span>
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                                    {event.name}
                                </h3>
                                <p className="text-secondary text-sm font-sans mb-4">
                                    {event.date}
                                </p>
                                <button className="w-full py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-accent hover:text-primary transition-all">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
