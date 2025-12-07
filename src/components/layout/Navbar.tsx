import Link from "next/link";
import profile from "@/data/profile.json";

export default function Navbar() {
    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-background/80 backdrop-blur-md border border-primary/30 rounded-full px-6 py-3 flex items-center shadow-lg shadow-primary/10">
                <Link
                    href="/"
                    className="text-lg font-bold text-primary hover:text-primary/80 transition-colors mr-8 font-heading"
                >
                    {profile.name}
                </Link>

                {/* Desktop Nav */}
                <div className="flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-body tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
