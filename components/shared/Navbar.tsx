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
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-6 py-4",
                isScrolled
                    ? "bg-background/90 backdrop-blur-md shadow-lg py-3"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-heading font-bold text-foreground tracking-widest drop-shadow-sm">
                        MOSAIC
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-secondary hover:text-foreground font-sans text-sm tracking-wide transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/register"
                        className="px-5 py-2 rounded-full bg-accent text-accent-foreground font-heading font-bold text-sm hover:opacity-90 transition transform hover:scale-105"
                    >
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-t border-white/10 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-sans text-foreground py-2 border-b border-white/5 hover:text-accent transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/register"
                                className="mt-4 w-full text-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-heading font-bold hover:opacity-90 transition"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Register Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
