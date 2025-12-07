"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects.json";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center py-20 container mx-auto px-4 md:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading uppercase tracking-wide">Featured Projects</h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A selection of things I&apos;ve built, from small experiments to full-stack applications.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                    >
                        {/* Image Placeholder Area */}
                        <div className="h-48 bg-muted relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                            {/* Replace with <Image /> when assets are available */}
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-medium">
                                {project.title} Preview
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.repoLink && (
                                    <Link
                                        href={project.repoLink}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </Link>
                                )}
                                {project.liveLink && (
                                    <Link
                                        href={project.liveLink}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
