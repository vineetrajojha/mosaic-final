"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Days of Celebration", value: 3 },
    { label: "Events", value: 35 },
    { label: "Participating Colleges", value: 50 },
    { label: "Footfall", value: "5000+" },
];

export default function AboutPreview() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".stat-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                            Experiencing <span className="text-accent">MOSAIC</span>
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed font-sans mb-8">
                            Mosaic is not just a fest; it's an emotion. It brings together the brightest minds and the most creative souls for a three-day cultural extravaganza. From electrifying dance performances to soul-stirring music, Mosaic offers a platform for everyone to shine.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed font-sans">
                            Join us as we celebrate art, culture, and diversity in a way never seen before. Witness the magic unfold as we create memories that last a lifetime.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/50 transition-colors text-center"
                            >
                                <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm md:text-base text-secondary font-sans">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
