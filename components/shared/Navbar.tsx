"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-accent hover:text-white font-heading font-bold text-xl tracking-widest transition-colors uppercase drop-shadow-md"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button (kept for mobile responsiveness, though layout implies desktop primarily) */}
                <div className="md:hidden absolute right-6">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    );
}

function MobileMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <button
                className="text-accent p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 right-0 w-64 bg-background/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl p-4 mr-4"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-heading text-accent hover:text-white transition text-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
