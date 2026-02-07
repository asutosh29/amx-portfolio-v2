import { getBlogPosts } from '@/lib/blog';
import { BlogList } from '@/components/blog/BlogList';

export const metadata = {
    title: 'Blog | AntiGravity',
    description: 'Thoughts on AI, Engineering, and the Future.',
};

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <main className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <header className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/50 animate-text-shimmer bg-[length:200%_auto]">
                        TRANSMISSIONS
                    </h1>
                    <p className="text-lg text-muted-foreground font-light max-w-2xl">
                        Latest updates, technical deep dives, and research notes from the AntiGravity lab.
                    </p>
                </header>

                <BlogList initialPosts={posts} />
            </div>
        </main>
    );
}
