"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 container mx-auto px-4 md:px-6 scroll-mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="relative inline-block mb-6">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-wide relative z-10">
                            About Me<span className="text-primary">!</span>
                        </h2>
                        {/* Underline effect */}
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 skew-x-12"></div>
                    </div>

                    <div className="prose prose-lg dark:prose-invert">
                        <p className="text-muted-foreground leading-relaxed font-body text-lg">
                            I am a 1st year student at <span className="text-primary font-bold">IIT Roorkee</span> doing Bachelors in Mathematics and Computing. I am from Odisha, Bhubaneswar. I did all of schooling from there.
                        </p>

                        <h3 className="text-3xl font-bold mt-8 mb-4 font-heading uppercase text-foreground">
                            I do <span className="text-primary">Coding</span>
                        </h3>

                        <p className="text-muted-foreground leading-relaxed font-body text-lg mb-8">
                            I enjoy making product ideas which solve real world problems. I am learning Web development make those products come to life!
                        </p>
                    </div>

                    <Link
                        href="#projects"
                        className="inline-block bg-primary text-black font-bold px-8 py-3 rounded-md hover:scale-105 transition-transform font-heading tracking-wider uppercase shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:shadow-[0_0_25px_rgba(0,255,65,0.6)]"
                    >
                        Projects
                    </Link>
                </motion.div>

                {/* Profile Image - Circle */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary transition-colors duration-500 shadow-2xl group">
                        {profile.avatar ? (
                            <Image
                                src={profile.avatar}
                                alt={profile.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-secondary/10 flex items-center justify-center">
                                <User className="w-24 h-24 text-primary opacity-50" />
                            </div>
                        )}

                        {/* Optional Overlay glow */}
                        <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
