"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import profile from "@/data/profile.json";
import { cn } from "@/lib/utils";
import { MouseEvent } from "react";
import { Icons } from "@/components/core/Icons";

// Skill Category Component with Spotlight
function SkillCard({
    title,
    skills,
    className
}: {
    title: string;
    skills: { name: string; asset?: string }[];
    className?: string;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Helper to render icon
    const SkillIcon = ({ name }: { name: string }) => {
        // Safe access to Icons
        const IconComponent = (Icons as any)[name] || null;
        return IconComponent ? <IconComponent className="w-8 h-8 mb-2 text-primary" /> : null;
    };

    return (
        <div
            className={cn(
                "group relative border border-border bg-card overflow-hidden rounded-3xl",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 255, 65, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full flex flex-col items-center justify-center p-6">
                {/* Title - Fades out on hover */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading uppercase tracking-widest text-foreground">
                        {title}
                    </h3>
                </div>

                {/* Skills - Visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-wrap justify-center gap-4 absolute inset-0 items-center content-center p-4">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center">
                            <SkillIcon name={skill.asset || skill.name} />
                            <span
                                className="text-xs font-bold font-heading tracking-wider uppercase text-center"
                            >
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    // Cast to expected type safely
    const skillsData = profile.skills as any;

    // Provide defaults if undefined
    const safeFrontend = skillsData?.frontend || [];
    const safeBackend = skillsData?.backend || [];
    const safeDevops = skillsData?.devops || [];
    const safeTools = skillsData?.tools || [];

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 container mx-auto px-4 md:px-6">
            {/* Heading Section - Outside Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-2 font-heading uppercase text-primary">Technical Arsenal</h2>
                <p className="text-muted-foreground text-lg font-body">My weapons of choice.</p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]"
            >

                {/* Bento Grid Layout */}
                <SkillCard
                    title="Frontend"
                    skills={safeFrontend}
                    className="md:col-span-2 md:row-span-2"
                />
                <SkillCard
                    title="Backend"
                    skills={safeBackend}
                    className="md:col-span-1 md:row-span-1"
                />
                <SkillCard
                    title="DevOps"
                    skills={safeDevops}
                    className="md:col-span-1 md:row-span-1"
                />
                <SkillCard
                    title="Tools & Design"
                    skills={safeTools}
                    className="md:col-span-3 md:row-span-1"
                />
            </motion.div>
        </section>
    );
}
