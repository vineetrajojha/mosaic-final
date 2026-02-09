"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const ovalRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date("2026-03-24") - +new Date();
            let timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }

            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
                .from(".hero-date", {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    ease: "power2.out"
                }, "-=0.5")
                .from(".countdown-item", {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out"
                }, "-=0.6");

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

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full">

                {/* Central Oval */}
                <div
                    ref={ovalRef}
                    className="relative w-[300px] h-[180px] md:w-[600px] md:h-[350px] bg-[#EEB702] rounded-[50%] flex items-center justify-center shadow-2xl mb-8"
                >
                    <h1
                        ref={textRef}
                        className="text-5xl md:text-9xl font-[family-name:var(--font-irish-grover)] font-bold text-[#511C6A] tracking-wider"
                    >
                        MOSAIC
                    </h1>
                </div>

                {/* Date */}
                <div className="hero-date text-2xl md:text-4xl font-heading font-bold text-[#EEB702] mb-8 tracking-wide drop-shadow-md">
                    24, 25, 26 MARCH 2026
                </div>

                {/* Countdown Timer */}
                <div className="flex gap-4 md:gap-8 mb-12">
                    {[
                        { label: "DAYS", value: timeLeft.days },
                        { label: "HOURS", value: timeLeft.hours },
                        { label: "MINUTES", value: timeLeft.minutes },
                        { label: "SECONDS", value: timeLeft.seconds }
                    ].map((item, index) => (
                        <div key={index} className="countdown-item flex flex-col items-center">
                            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#511C6A]/90 rounded-xl flex items-center justify-center border-2 border-[#EEB702] shadow-lg backdrop-blur-sm">
                                <span className="text-2xl md:text-4xl font-bold text-[#EEB702] font-mono">
                                    {String(item.value).padStart(2, '0')}
                                </span>
                            </div>
                            <span className="text-[10px] md:text-sm font-bold text-[#EEB702] mt-2 tracking-widest">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Register Button */}
                <div>
                    <Link
                        href="/events"
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
