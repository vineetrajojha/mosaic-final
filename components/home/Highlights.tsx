"use client";

import { motion } from "framer-motion";
import { Sparkles, Music, Trophy, Mic2 } from "lucide-react";

const highlights = [
    {
        icon: <Sparkles className="w-8 h-8 text-accent" />,
        title: "Pro Nights",
        description: "Star-studded evenings featuring top artists and bands.",
    },
    {
        icon: <Music className="w-8 h-8 text-accent" />,
        title: "Battle of Bands",
        description: "Witness the clash of the titans as bands rock the stage.",
    },
    {
        icon: <Trophy className="w-8 h-8 text-accent" />,
        title: "Flagship Events",
        description: "High-stakes competitions with massive prize pools.",
    },
    {
        icon: <Mic2 className="w-8 h-8 text-accent" />,
        title: "Open Mic",
        description: "A platform for poets, comedians, and storytellers.",
    },
];

export default function Highlights() {
    return (
        <section className="py-24 px-6 md:px-12 bg-background relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                        Event Highlights
                    </h2>
                    <p className="text-secondary font-sans max-w-2xl mx-auto">
                        Discover what makes Mosaic the most anticipated event of the year.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-primary/20 w-fit group-hover:bg-accent/20 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                                {item.title}
                            </h3>
                            <p className="text-secondary font-sans text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
