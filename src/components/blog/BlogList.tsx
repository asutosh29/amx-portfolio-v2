'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { Search, X } from 'lucide-react';

interface BlogListProps {
    initialPosts: BlogPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Get all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        initialPosts.forEach(post => {
            post.tags?.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [initialPosts]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        return initialPosts.filter(post => {
            const matchesSearch = (
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });
    }, [initialPosts, searchQuery, selectedTag]);

    return (
        <div>
            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
                {/* Search Input */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search transmissions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-secondary/10 border border-border rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-mono text-sm placeholder:text-muted-foreground/50"
                    />
                    {searchQuery && (
                         <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    )}
                </div>

                {/* Tag Cloud */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                            className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${
                                selectedTag === tag
                                    ? 'bg-primary/20 border-primary text-primary'
                                    : 'bg-secondary/10 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results */}
             {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-muted-foreground font-mono border border-dashed border-border rounded-lg bg-secondary/5">
                    <div className="mb-2 text-lg font-heading text-foreground">[NO_MATCHES_FOUND]</div>
                    <p className="text-sm opacity-70">Try adjusting your filters or search query.</p>
                    <button
                        onClick={() => { setSearchQuery(''); setSelectedTag(null); }}
                        className="mt-4 text-primary hover:underline text-sm"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
}
