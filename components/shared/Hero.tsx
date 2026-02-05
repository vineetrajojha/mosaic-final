"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const ovalRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const flowerTopLeftRef = useRef<HTMLImageElement>(null);
    const flowerBottomRightRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Initial Animation
            tl.from(ovalRef.current, {
                scale: 0,
                opacity: 0,
                duration: 1.2,
                ease: "back.out(1.7)",
            })
                .from(textRef.current, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.8")
                .from([flowerTopLeftRef.current, flowerBottomRightRef.current], {
                    opacity: 0,
                    scale: 0.8,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out"
                }, "-=1");

            // Parallax effect
            gsap.to(ovalRef.current, {
                y: -50,
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
            {/* Decorative Flowers */}
            <div className="absolute top-0 left-0 w-32 md:w-48 lg:w-64 z-10">
                <img
                    ref={flowerTopLeftRef}
                    src="/decorative-flower.svg"
                    alt="Decorative Flower"
                    className="w-full h-auto opacity-90"
                />
            </div>
            <div className="absolute bottom-0 right-0 w-32 md:w-48 lg:w-64 z-10 rotate-180">
                <img
                    ref={flowerBottomRightRef}
                    src="/decorative-flower.svg"
                    alt="Decorative Flower"
                    className="w-full h-auto opacity-90"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">

                {/* Central Oval */}
                <div
                    ref={ovalRef}
                    className="relative w-[300px] h-[180px] md:w-[600px] md:h-[350px] bg-[#EEB702] rounded-[50%] flex items-center justify-center shadow-2xl mb-12"
                >
                    <h1
                        ref={textRef}
                        className="text-5xl md:text-9xl font-[family-name:var(--font-irish-grover)] font-bold text-[#511C6A] tracking-wider"
                    >
                        MOSAIC
                    </h1>
                </div>

                {/* Register Button */}
                <div className="mt-8">
                    <Link
                        href="/register"
                        className="relative z-30 inline-block group"
                    >
                        <div className="relative bg-[#EEB702] text-[#511C6A] font-heading font-bold text-xl md:text-3xl px-12 py-4 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden flex items-center justify-center border-2 border-[#511C6A]">
                            {/* Decorative Flowers */}
                            <img
                                src="/decorative-flower.svg"
                                alt=""
                                className="absolute -top-3 -right-3 w-12 h-12 md:w-16 md:h-16 rotate-90"
                            />
                            <img
                                src="/decorative-flower.svg"
                                alt=""
                                className="absolute -bottom-3 -left-3 w-12 h-12 md:w-16 md:h-16 -rotate-90"
                            />

                            <span className="relative z-10 tracking-widest drop-shadow-sm">REGISTER NOW</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
