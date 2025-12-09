import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blogs/${post.slug}`} className="group block h-full">
            <div className="h-full border border-border bg-card hover:border-primary/50 transition-colors duration-300 rounded-lg overflow-hidden flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                    {post.coverImage ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-muted-foreground">
                            <span className="font-heading text-xl">No Image</span>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 font-mono">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-primary" />
                            <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <User className="w-3 h-3 text-primary" />
                            <span>{post.author}</span>
                        </div>
                    </div>

                    <h2 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
                        {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                        {post.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] uppercase tracking-wider px-2 py-1 bg-secondary/20 text-primary border border-primary/20 rounded-sm font-mono"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
