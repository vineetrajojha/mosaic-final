"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { User, Mail, Phone, Lock, School, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[80vh]">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Register</h1>
                        <p className="text-secondary font-sans">
                            Join the community and participate in Mosaic 2026.
                        </p>
                    </div>

                    <form className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                <User size={16} /> Full Name
                            </label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition" placeholder="John Doe" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                <Mail size={16} /> Email Address
                            </label>
                            <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                <Phone size={16} /> Phone Number
                            </label>
                            <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition" placeholder="+91 98765 43210" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                <School size={16} /> College/University
                            </label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition" placeholder="XYZ University" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                <Lock size={16} /> Password
                            </label>
                            <input type="password" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition" placeholder="••••••••" />
                        </div>

                        <button type="button" className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold font-heading hover:opacity-90 transition flex items-center justify-center gap-2 mt-4 hover:shadow-[0_0_20px_rgba(238,183,2,0.3)]">
                            Create Account <ArrowRight size={18} />
                        </button>

                        <p className="text-center text-sm text-secondary mt-4">
                            Already have an account? <Link href="/login" className="text-accent hover:underline">Login</Link>
                        </p>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
