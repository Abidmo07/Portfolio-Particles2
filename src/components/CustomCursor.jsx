import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
    const cursorDot = useRef(null);
    const cursorOutline = useRef(null);

    useEffect(() => {
        const dot = cursorDot.current;
        const outline = cursorOutline.current;

        if (!dot || !outline) return;

        gsap.set(dot, { xPercent: -50, yPercent: -50 });
        gsap.set(outline, { xPercent: -50, yPercent: -50 });

        let xTo = gsap.quickTo(outline, "x", { duration: 0.2, ease: "power3" });
        let yTo = gsap.quickTo(outline, "y", { duration: 0.2, ease: "power3" });

        const moveCursor = (e) => {
            // Move dot instantly
            gsap.to(dot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0
            });
            // Move outline with delay
            xTo(e.clientX);
            yTo(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div ref={cursorDot} className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-[var(--accent-cyan)] rounded-full pointer-events-none z-[9999]" />
            <div ref={cursorOutline} className="cursor-outline fixed top-0 left-0 w-10 h-10 border border-[var(--accent-cyan)] rounded-full pointer-events-none z-[9999] opacity-50" />
        </>
    );
};

export default CustomCursor;
