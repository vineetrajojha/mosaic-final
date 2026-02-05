"use client";

import { motion } from "framer-motion";

// Placeholder logos (using text or simple shapes for now if no images available)
const sponsors = [
    "TechCorp", "SoundWave", "FashionHub", "EnergyDrink", "BankOfYouth", "MediaPartner", "Foodie"
];

export default function Sponsors() {
    return (
        <section className="py-16 bg-background overflow-hidden border-y border-white/5">
            <div className="flex w-full">
                <motion.div
                    className="flex gap-16 min-w-full"
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center min-w-[150px] opacity-50 hover:opacity-100 transition-opacity"
                        >
                            <span className="text-2xl font-heading font-bold text-white uppercase tracking-widest">
                                {sponsor}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
