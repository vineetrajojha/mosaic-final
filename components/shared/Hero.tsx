"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5,
            })
                .from(subtitleRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=1");

            // Parallax effect
            gsap.to(titleRef.current, {
                y: -150,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
        >
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none z-10" />
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-background to-background" />

            {/* Content */}
            <div className="relative z-20 text-center px-4">
                <h1
                    ref={titleRef}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading text-primary-foreground tracking-widest drop-shadow-2xl"
                >
                    MOSAIC
                    <span className="block text-4xl md:text-6xl mt-4 text-accent">2026</span>
                </h1>

                <p
                    ref={subtitleRef}
                    className="mt-8 text-lg md:text-2xl font-sans text-secondary max-w-2xl mx-auto tracking-wide"
                >
                    The Ultimate Cultural Extravaganza
                    <br />
                    <span className="text-sm md:text-base opacity-80 mt-2 block font-sans">
                        April 24-26 • University Campus
                    </span>
                </p>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70">
                    <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-foreground rounded-full animate-scroll" />
                    </div>
                </div>
            </div>
        </div>
    );
}
