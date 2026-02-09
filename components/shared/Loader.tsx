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
                className="relative w-1/2 h-full bg-background flex items-center justify-end overflow-hidden border-r border-white/10"
            >
                <img
                    src="/loader-left.png"
                    alt="Loading..."
                    className="w-full h-full object-cover object-right"
                />
            </div>

            {/* Right Panel */}
            <div
                ref={rightPanelRef}
                className="relative w-1/2 h-full bg-background flex items-center justify-start overflow-hidden border-l border-white/10"
            >
                <img
                    src="/loader-right.png"
                    alt="Loading..."
                    className="w-full h-full object-cover object-left"
                />
            </div>
        </div>
    );
}
