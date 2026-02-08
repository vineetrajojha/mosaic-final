"use client";

import { motion } from "framer-motion";

const days = [
    {
        day: "Day 1",
        date: "April 24",
        title: "The Grand Opening",
        description: "Inauguration followed by Aarambh (Dance) and Thespian (Drama) competitions. ",
    },
    {
        day: "Day 2",
        date: "April 25",
        title: "Rhythm & Beats",
        description: "Battle of Bands, Swarag (Singing), and Solera (Fashion Show).",
    },
    {
        day: "Day 3",
        date: "April 26",
        title: "Star Night",
        description: "Grand finale featuring celebrity performances and DJ night.",
    },
];

export default function Timeline() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Event Timeline
                    </h2>
                    <p className="text-secondary font-sans">
                        Mark your calendars for three days of non-stop entertainment.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/10" />

                    <div className="space-y-24">
                        {days.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`flex items-center justify-between w-full ${index % 2 === 0 ? "flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Side */}
                                <div className="w-5/12">
                                    <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                                        <h3 className="text-2xl font-heading font-bold text-accent mb-2">{item.day}</h3>
                                        <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                                        <p className="text-secondary text-sm font-sans">{item.description}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="z-10 bg-background border-4 border-accent w-6 h-6 rounded-full shadow-[0_0_15px_rgba(238,183,2,0.5)]" />

                                {/* Date Side */}
                                <div className={`w-5/12 text-2xl font-heading font-bold text-white/20 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                                    {item.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
