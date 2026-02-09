import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div>
                    <h2 className="text-3xl font-heading font-bold text-foreground mb-4">MOSAIC</h2>
                    <p className="text-secondary font-sans text-sm leading-relaxed mb-6">
                        The annual cultural fest that brings together talent, creativity, and passion. Join us for a celebration like no other.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-secondary hover:text-accent transition"><Instagram size={20} /></Link>
                        <Link href="#" className="text-secondary hover:text-accent transition"><Facebook size={20} /></Link>
                        <Link href="#" className="text-secondary hover:text-accent transition"><Twitter size={20} /></Link>
                        <Link href="#" className="text-secondary hover:text-accent transition"><Youtube size={20} /></Link>
                        <Link href="#" className="text-secondary hover:text-accent transition"><Linkedin size={20} /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-6">Quick Links</h3>
                    <ul className="space-y-3 font-sans text-secondary">
                        <li><Link href="/" className="hover:text-accent transition">Home</Link></li>
                        <li><Link href="/events" className="hover:text-accent transition">Events</Link></li>
                        <li><Link href="/about" className="hover:text-accent transition">About Us</Link></li>

                        <li><Link href="/gallery" className="hover:text-accent transition">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-accent transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-6">Categories</h3>
                    <ul className="space-y-3 font-sans text-secondary">
                        <li><Link href="/events?category=swarag" className="hover:text-accent transition">Swarag</Link></li>
                        <li><Link href="/events?category=aarambh" className="hover:text-accent transition">Aarambh Dance</Link></li>
                        <li><Link href="/events?category=elegance" className="hover:text-accent transition">Elegance</Link></li>
                        <li><Link href="/events?category=thespian" className="hover:text-accent transition">Thespian Society</Link></li>
                        <li><Link href="/events?category=srijan" className="hover:text-accent transition">Srijan Society</Link></li>
                        <li><Link href="/events?category=literary" className="hover:text-accent transition">Literary & Media</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-6">Contact Us</h3>
                    <ul className="space-y-4 font-sans text-secondary">
                        <li className="flex gap-3 items-start">
                            <MapPin size={20} className="text-accent shrink-0" />
                            <span>IILM University, 16, Knowledge Park II, Greater Noida, Uttar Pradesh 201306</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Phone size={20} className="text-accent shrink-0" />
                            <span>+91 79053 02110 (Aviral Srivastava)</span>
                        </li>
                        <li className="flex gap-3 items-center">
                            <Mail size={20} className="text-accent shrink-0" />
                            <span>mosaic@iilm.edu</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center md:flex md:justify-between md:text-left">
                <p className="text-secondary/60 text-sm font-sans">
                    © {new Date().getFullYear()} MOASIC. All rights reserved.
                </p>
                <div className="flex gap-6 justify-center md:justify-end mt-4 md:mt-0 text-secondary/60 text-sm font-sans">
                    <Link href="/privacy" className="hover:text-accent transition">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-accent transition">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
