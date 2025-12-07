"use client";

import { motion } from "framer-motion";
import profile from "@/data/profile.json";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-20 container mx-auto px-4 md:px-6 scroll-mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading uppercase tracking-wide">About Me</h2>
                    <div className="prose prose-lg dark:prose-invert">
                        <p className="text-muted-foreground leading-relaxed font-body text-lg">
                            {profile.bio}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mt-4 font-body text-lg">
                            I love solving complex problems and turning ideas into reality through code.
                            My journey started with simple HTML pages and has evolved into building scalable full-stack applications.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative max-w-sm mx-auto md:mr-0"
                >
                    {/* Placeholder for an image or just another text block if user adds one later. Keeping it clean for now. */}
                    <div className="aspect-square bg-gradient-to-tr from-secondary to-background rounded-2xl border border-border flex items-center justify-center p-8">
                        <span className="text-muted-foreground text-center">
                            Passionate about creating intuitive and dynamic user experiences.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
