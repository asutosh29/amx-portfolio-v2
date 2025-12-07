"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import profile from "@/data/profile.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, MouseEvent } from "react";

export default function Hero() {
    // Typewriter State
    const [text, setText] = useState("");
    const fullText = profile.role;
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    // Mouse Gradient State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleType = () => {
            const currentText = fullText;

            if (isDeleting) {
                setText(currentText.substring(0, text.length - 1));
                setTypingSpeed(50);
            } else {
                setText(currentText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }

            if (!isDeleting && text === currentText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, fullText, typingSpeed]);

    useEffect(() => {
        const handleMouseMove = (e: globalThis.MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-start container mx-auto px-4 md:px-6 relative overflow-hidden group">

            {/* Dynamic Background Grid/Glow */}
            <motion.div
                className="absolute inset-0 z-[-1] opacity-30 pointer-events-none"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            circle 600px at ${mouseX}px ${mouseY}px,
                            rgba(0, 255, 65, 0.1),
                            transparent 100%
                        )
                    `
                }}
            />
            <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-primary text-xl md:text-2xl font-medium mb-4 tracking-wider font-heading uppercase">
                    Hi, I&apos;m
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-foreground font-heading uppercase">
                    {profile.name}
                </h1>

                {/* Typewriter Effect */}
                <h2 className="text-muted-foreground mt-2 text-3xl md:text-5xl font-mono min-h-[60px]">
                    {text}
                    <span className="animate-pulse text-primary">_</span>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl mb-8 mt-8"
            >
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-body">
                    {profile.bio}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-4"
            >
                <Link
                    href="#projects"
                    className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-none hover:bg-white hover:text-black transition-all flex items-center gap-2 font-heading tracking-widest uppercase skew-x-[-10deg]"
                >
                    <span className="skew-x-[10deg] flex items-center gap-2">View Work <ArrowRight size={20} /></span>
                </Link>
                <Link
                    href="#contact"
                    className="px-8 py-4 border border-primary/50 text-primary font-bold rounded-none hover:bg-primary/20 transition-all font-heading tracking-widest uppercase skew-x-[-10deg]"
                >
                    <span className="skew-x-[10deg]">Contact Me</span>
                </Link>
            </motion.div>
        </section>
    );
}
