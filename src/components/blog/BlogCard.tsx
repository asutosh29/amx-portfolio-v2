'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog';
import { format } from 'date-fns';
import { Calendar, User, ImageOff } from 'lucide-react';
import { useState } from 'react';

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <Link href={`/blogs/${post.slug}`} className="group block h-full">
            <div className="h-full border border-border bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 rounded-lg overflow-hidden flex flex-col">
                {/* Image Section */}
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                    {post.coverImage && !imageError ? (
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/5 text-muted-foreground gap-2">
                            <ImageOff className="w-8 h-8 opacity-50" />
                            <span className="font-heading text-sm uppercase tracking-wider opacity-70">No Signal</span>
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

                    <h2 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors text-foreground line-clamp-2">
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
