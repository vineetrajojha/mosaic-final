"use client";

import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const scheduleData = {
    "Day 1": [
        { time: "10:00 AM", event: "Inauguration Ceremony", venue: "Main Auditorium", cat: "General" },
        { time: "11:30 AM", event: "Solo Dance (Prelims)", venue: "OAT", cat: "Dance" },
        { time: "02:00 PM", event: "Art Exhibition Opening", venue: "Art Gallery", cat: "Art" },
        { time: "05:00 PM", event: "Drama Finals", venue: "Mini Auditorium", cat: "Drama" },
    ],
    "Day 2": [
        { time: "09:00 AM", event: "Band Wars (Prelims)", venue: "Main Stage", cat: "Music" },
        { time: "11:00 AM", event: "Debate Competition", venue: "Seminar Hall", cat: "Literary" },
        { time: "03:00 PM", event: "Fashion Show", venue: "OAT", cat: "Lifestyle" },
        { time: "07:00 PM", event: "DJ Night", venue: "Main Ground", cat: "Entertainment" },
    ],
    "Day 3": [
        { time: "10:00 AM", event: "Dance Finals", venue: "Main Auditorium", cat: "Dance" },
        { time: "01:00 PM", event: "Band Wars (Finals)", venue: "Main Stage", cat: "Music" },
        { time: "06:00 PM", event: "Prize Distribution", venue: "OAT", cat: "General" },
        { time: "08:00 PM", event: "Star Night", venue: "Main Ground", cat: "Entertainment" },
    ],
};

export default function SchedulePage() {
    const [activeDay, setActiveDay] = useState<keyof typeof scheduleData>("Day 1");

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                    Schedule
                </h1>
                <p className="text-xl text-secondary font-sans max-w-2xl mx-auto">
                    Don't miss a beat. Plan your three days of fun.
                </p>
            </section>

            {/* Day Tabs */}
            <section className="px-6 mb-12 flex justify-center gap-4">
                {Object.keys(scheduleData).map((day) => (
                    <button
                        key={day}
                        onClick={() => setActiveDay(day as keyof typeof scheduleData)}
                        className={`px-8 py-3 rounded-xl font-heading font-bold text-lg transition-all duration-300 ${activeDay === day
                                ? "bg-accent text-accent-foreground scale-105"
                                : "bg-white/5 text-secondary hover:bg-white/10"
                            }`}
                    >
                        {day}
                    </button>
                ))}
            </section>

            {/* Schedule List */}
            <section className="px-6 md:px-12 pb-24 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {scheduleData[activeDay].map((item, index) => (
                                <div key={index} className="flex gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors items-center">
                                    <div className="w-24 shrink-0 text-center border-r border-white/10 pr-6">
                                        <span className="block text-accent font-bold font-heading">{item.time.split(' ')[0]}</span>
                                        <span className="text-secondary text-xs">{item.time.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="text-xl font-bold font-heading text-foreground">{item.event}</h3>
                                            <span className="text-xs px-2 py-1 rounded bg-white/10 text-secondary">{item.cat}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-secondary/70">
                                            <MapPin size={14} />
                                            <span>{item.venue}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}
