"use client";

import Link from "next/link";
import profile from "@/data/profile.json";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Socials() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-8 left-4 z-40 hidden md:flex flex-col items-center gap-4 bg-background/50 backdrop-blur-md border border-primary/20 p-3 rounded-full shadow-lg shadow-primary/5 w-12"
        >
            {profile.socials.github && (
                <Link
                    href={profile.socials.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                    <Github size={18} />
                </Link>
            )}
            {profile.socials.linkedin && (
                <Link
                    href={profile.socials.linkedin}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                    <Linkedin size={18} />
                </Link>
            )}
            {profile.socials.twitter && (
                <Link
                    href={profile.socials.twitter}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                    <Twitter size={18} />
                </Link>
            )}
            <Link
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
            >
                <Mail size={18} />
            </Link>

            <div className="w-[1px] h-12 bg-primary/20" />
        </motion.div>
    );
}
