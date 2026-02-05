"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion } from "framer-motion";

const images = [
    { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=600&auto=format&fit=crop", span: "row-span-2" },
    { src: "https://images.unsplash.com/photo-1545959570-a925b0ae8b74?q=80&w=600&auto=format&fit=crop", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1514525253440-b393452e3383?q=80&w=600&auto=format&fit=crop", span: "row-span-2" },
    { src: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=600&auto=format&fit=crop", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop", span: "row-span-1" },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                    Gallery
                </h1>
                <p className="text-xl text-secondary font-sans max-w-2xl mx-auto">
                    Glimpses of the unforgettable moments from past years.
                </p>
            </section>

            {/* Masonry Grid */}
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${img.span}`}
                        >
                            <img
                                src={img.src}
                                alt="Gallery Item"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Video Section */}
            <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
                <h2 className="text-4xl font-heading font-bold text-foreground mb-8 text-center">Highlights</h2>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=mute=1"
                        title="Mosaic Highlights"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </section>

            <Footer />
        </main>
    );
}
