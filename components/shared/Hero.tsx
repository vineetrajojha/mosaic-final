"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
            const difference = +new Date("2026-04-06") - +new Date();
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
            tl.from([".iilm-logo", ".ampersand", ".aaghaaz-logo"], {
                opacity: 0,
                y: -20,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            })
                .from(".presents-text", {
                    opacity: 0,
                    y: 10,
                    duration: 0.6,
                    ease: "power2.out"
                }, "-=0.4")
                .from(ovalRef.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 1.2,
                    ease: "back.out(1.7)",
                }, "-=0.4")
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
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full mt-10 md:mt-20">

                {/* Logos Row */}
                <div className="flex flex-col items-center z-30 mb-6 md:mb-10">
                    <div className="flex items-center gap-4 md:gap-8">
                        {/* IILM Logo */}
                        <div className="iilm-logo relative w-[160px] h-[60px] md:w-[280px] md:h-[100px]">
                            <Image
                                src="/iilmlogo.png"
                                alt="IILM Logo"
                                fill
                                className="object-contain drop-shadow-md"
                                priority
                            />
                        </div>

                        {/* Ampersand */}
                        <span className="ampersand text-2xl md:text-5xl font-heading font-bold text-[#EEB702] opacity-80">&</span>

                        {/* Aaghaaz Logo */}
                        <div className="aaghaaz-logo relative w-[120px] h-[45px] md:w-[220px] md:h-[80px]">
                            <Image
                                src="/aaghaazlogo.png"
                                alt="Aaghaaz Logo"
                                fill
                                className="object-contain drop-shadow-md"
                                priority
                            />
                        </div>
                    </div>

                    {/* Presents Text */}
                    <div className="presents-text mt-4 md:mt-6 text-xl md:text-2xl font-heading font-bold text-white tracking-[0.2em] uppercase opacity-90 drop-shadow-lg">
                        Presents
                    </div>
                </div>

                <div
                    ref={ovalRef}
                    className="relative w-[220px] h-[130px] md:w-[450px] md:h-[260px] flex items-center justify-center mb-8"
                >
                    <div
                        ref={textRef}
                        className="relative w-[100%] h-[100%] flex items-center justify-center env-3d-text "
                    >
                        <Image
                            src="/mosaiclogo2.png"
                            alt="MOSAIC Logo"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

                {/* Date */}
                <div className="hero-date text-2xl md:text-4xl font-heading font-bold text-[#EEB702] mb-8 tracking-wide drop-shadow-md">
                    6th - 8th April 2026
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

                            <span className="relative z-10 tracking-widest drop-shadow-sm ">Register Now</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Floating Rule Book Button */}
            <a
                href="https://drive.google.com/file/d/1EQ02-55T0Kn27iFBfjOtBLIO36uZMe_x/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#EEB702] text-[#511C6A] font-heading font-bold px-5 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 border-2 border-[#511C6A] hover:-translate-y-1 animate-bounce hover:animate-none"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span className="tracking-wide">Rule Book</span>
            </a>
        </div>
    );
}
