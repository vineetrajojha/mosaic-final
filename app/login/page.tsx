"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[80vh]">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-heading font-bold text-foreground mb-2">Login</h1>
                        <p className="text-secondary font-sans">
                            Welcome back! Please login to your account.
                        </p>
                    </div>

                    <form className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                <Mail size={16} /> Email Address
                            </label>
                            <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary flex items-center gap-2">
                                <Lock size={16} /> Password
                            </label>
                            <input type="password" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent transition" placeholder="••••••••" />
                        </div>

                        <div className="flex justify-end">
                            <a href="#" className="text-sm text-accent hover:underline">Forgot Password?</a>
                        </div>

                        <button type="button" className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold font-heading hover:opacity-90 transition flex items-center justify-center gap-2 mt-4 hover:shadow-[0_0_20px_rgba(238,183,2,0.3)]">
                            Login <ArrowRight size={18} />
                        </button>

                        <p className="text-center text-sm text-secondary mt-4">
                            Don't have an account? <Link href="/register" className="text-accent hover:underline">Register</Link>
                        </p>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
