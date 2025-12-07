import Link from "next/link";
import profile from "@/data/profile.json";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-8 border-t border-border bg-background">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>

                <div className="flex gap-6 items-center">
                    {profile.socials.github && (
                        <Link href={profile.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github size={20} />
                        </Link>
                    )}
                    {profile.socials.linkedin && (
                        <Link href={profile.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    )}
                    {profile.socials.twitter && (
                        <Link href={profile.socials.twitter} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter size={20} />
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    );
}
