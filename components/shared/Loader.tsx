"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader() {
    const leftPanelRef = useRef(null);
    const rightPanelRef = useRef(null);
    const containerRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setLoading(false);
            },
        });

        // Determine initial delay or logic. 
        // Since it's a simulated loader, we can hold it for a split second 
        // to ensure the images are seen "joined", then open.

        tl.to([leftPanelRef.current, rightPanelRef.current], {
            delay: 0.5, // Brief pause to show the "closed door" state
            duration: 1.5,
            x: (index) => (index === 0 ? "-100%" : "100%"), // Move left panel left, right panel right
            ease: "power2.inOut",
            stagger: 0,
        });

        return () => {
            tl.kill();
        };
    }, []);

    if (!loading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex overflow-hidden pointer-events-none"
        >
            {/* Left Panel */}
            <div
                ref={leftPanelRef}
                className="relative w-1/2 h-full flex items-center justify-end"
            >
                {/* Background */}
                <img
                    src="/left-loaderbg.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Decorative Element */}
                <img
                    src="/left-loader.svg"
                    alt="Loading..."
                    className="relative z-10 h-[40vh] md:h-[60vh] w-auto object-contain translate-x-[1px]"
                />
            </div>

            {/* Right Panel */}
            <div
                ref={rightPanelRef}
                className="relative w-1/2 h-full flex items-center justify-start"
            >
                {/* Background */}
                <img
                    src="/right-loaderbg.svg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Decorative Element */}
                <img
                    src="/right-loader.svg"
                    alt="Loading..."
                    className="relative z-10 h-[40vh] md:h-[60vh] w-auto object-contain -translate-x-[1px]"
                />
            </div>
        </div>
    );
}
