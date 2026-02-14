"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center bg-background flex flex-col items-center">
                <div className="relative w-fit mx-auto flex items-center justify-center py-16 px-24 md:py-20 md:px-32">
                    <img
                        src="/events-button.svg"
                        alt="Events Button Background"
                        className="absolute inset-0 w-full h-full object-contain scale-125 md:scale-150"
                    />
                    <h1 className="relative z-10 text-3xl md:text-5xl font-heading font-bold text-[#EEB702] tracking-wider uppercase drop-shadow-sm pt-2">
                        Contact
                    </h1>
                </div>
                <p className="text-xl text-secondary font-sans max-w-2xl mx-auto mt-4">
                    Have questions? Reach out to us and we'll help you out.
                </p>
            </section>

            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <MapPin className="text-accent shrink-0" size={24} />
                                <span className="text-secondary font-sans text-lg">
                                    IILM University<br />
                                    16, Knowledge Park II<br />
                                    Greater Noida, Uttar Pradesh 201306
                                </span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Phone className="text-accent shrink-0" size={24} />
                                <span className="text-secondary font-sans text-lg">+91 79053 02110 (Aviral Srivastava)</span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail className="text-accent shrink-0" size={24} />
                                <span className="text-secondary font-sans text-lg">mosaic@iilm.edu</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Embed */}
                    <div className="w-full h-64 rounded-2xl overflow-hidden border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6370219293904!2d77.4887393761532!3d28.460356391877433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e13dcbf0eb%3A0xfcf1c4d9749a78b4!2sIILM%20University%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1771064566940!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            dark
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Send a Message</h3>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary">Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-secondary">Email</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary">Subject</label>
                            <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent" placeholder="Inquiry about..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-secondary">Message</label>
                            <textarea rows={5} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-accent" placeholder="Your message here..." />
                        </div>

                        <button type="submit" className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-bold font-heading hover:opacity-90 transition flex items-center justify-center gap-2">
                            <Send size={18} /> Send Message
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
