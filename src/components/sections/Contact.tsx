"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 container mx-auto px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center bg-gradient-to-b from-secondary/50 to-background border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />

                <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Together</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <Link
                    href={`mailto:${profile.email}`}
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    <Mail className="mr-2 h-4 w-4" />
                    Say Hello
                </Link>
            </motion.div>
        </section>
    );
}
