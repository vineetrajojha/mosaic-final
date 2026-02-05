"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";

const teamData = [
    {
        role: "Faculty Coordinator",
        name: "Dr. Anjali Sharma",
        dept: "Student Affairs",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    },
    {
        role: "General Secretary",
        name: "Vikram Reyes",
        dept: "Computer Science",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
    {
        role: "Event Head",
        name: "Priya Singh",
        dept: "Electronics",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    },
    {
        role: "Technical Head",
        name: "Arjun Mehta",
        dept: "Information Tech",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
        role: "Sponsorship Head",
        name: "Karan Johar",
        dept: "MBA",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
    },
    {
        role: "Creative Head",
        name: "Sanya Malhotra",
        dept: "Design",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                    Our Team
                </h1>
                <p className="text-xl text-secondary font-sans max-w-2xl mx-auto">
                    The brilliant minds behind the magic of Mosaic 2026.
                </p>
            </section>

            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamData.map((member, index) => (
                        <div key={index} className="group relative w-full h-96 perspective-1000">
                            <div className="w-full h-full relative transition-[transform] duration-700 ease-in-out transform-style-3d group-hover:rotate-y-180">
                                {/* Front Side */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent p-6 pt-20">
                                        <h3 className="text-2xl font-heading font-bold text-foreground">{member.name}</h3>
                                        <p className="text-secondary font-sans">{member.role}</p>
                                    </div>
                                </div>

                                {/* Back Side */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-primary border border-accent flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl font-heading font-bold text-accent mb-2">{member.name}</h3>
                                    <p className="text-white font-sans mb-1">{member.role}</p>
                                    <p className="text-white/60 font-sans text-sm mb-6">{member.dept}</p>

                                    <div className="flex gap-4">
                                        <button className="p-3 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all">
                                            <Linkedin size={20} />
                                        </button>
                                        <button className="p-3 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all">
                                            <Instagram size={20} />
                                        </button>
                                        <button className="p-3 rounded-full bg-white/10 hover:bg-accent hover:text-primary transition-all">
                                            <Mail size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

            <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
        </main>
    );
}
