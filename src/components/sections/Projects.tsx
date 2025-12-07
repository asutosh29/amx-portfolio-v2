"use client";

import { motion } from "framer-motion";
import projects from "@/data/projects.json";
import { Github, ExternalLink, ImageOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Separate component to handle per-project image state
function ProjectCard({ project, index }: { project: any, index: number }) {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
        >
            {/* Image Area */}
            <div className="h-48 bg-muted relative overflow-hidden">
                <div className="absolute inset-0 p-3 group-hover:p-0 transition-all duration-500 ease-in-out">
                    <div className="relative w-full h-full overflow-hidden rounded-lg group-hover:rounded-none transition-all duration-500">
                        {!imageError && project.image ? (
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                onError={() => setImageError(true)}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/50 font-medium bg-secondary/5 p-4 text-center">
                                {/* Fallback */}
                                <ImageOff className="w-8 h-8 mb-2 opacity-50" />
                                <span>{project.title} Preview</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors font-heading uppercase tracking-wide">
                    {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed font-body">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech: string) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-bold bg-primary/10 text-primary rounded-sm font-without-serif" // "rounded-sm" fits hacker vibe better
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
                            className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                        >
                            <Github size={16} /> Code
                        </Link>
                    )}
                    {project.liveLink && (
                        <Link
                            href={project.liveLink}
                            target="_blank"
                            className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider"
                        >
                            <ExternalLink size={16} /> Demo
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

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
                <p className="text-muted-foreground text-lg max-w-2xl font-body">
                    A selection of things I&apos;ve built, from small experiments to full-stack applications.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
