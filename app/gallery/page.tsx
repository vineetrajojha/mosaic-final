"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { motion } from "framer-motion";

const images = [
    { src: "/gallery/PHOTO-2026-02-09-22-42-58.jpg", span: "row-span-1" },
    { src: "/gallery/PHOTO-2026-02-09-22-42-59 2.jpg", span: "row-span-2" },
    { src: "/gallery/PHOTO-2026-02-09-22-42-59 3.jpg", span: "row-span-1" },
    { src: "/gallery/PHOTO-2026-02-09-22-42-59.jpg", span: "row-span-1" },
    { src: "/gallery/WhatsApp Image 2026-02-09 at 22.42.56.jpeg", span: "row-span-2" },
    { src: "/gallery/WhatsApp Image 2026-02-09 at 22.42.57 (1).jpeg", span: "row-span-1" },
    { src: "/gallery/WhatsApp Image 2026-02-09 at 22.42.57 (2).jpeg", span: "row-span-1" },
    { src: "/gallery/WhatsApp Image 2026-02-09 at 22.42.57 (3).jpeg", span: "row-span-1" },
    { src: "/gallery/WhatsApp Image 2026-02-09 at 22.42.57.jpeg", span: "row-span-2" },
    { src: "/gallery/WhatsApp Image 2026-02-09 at 22.42.58 (1).jpeg", span: "row-span-1" },
    { src: "/gallery/WhatsApp Image 2026-02-09 at 22.42.58.jpeg", span: "row-span-1" },
];

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="pt-32 pb-12 px-6 text-center">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
                    Gallery
                </h1>
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

            <Footer />
        </main>
    );
}
