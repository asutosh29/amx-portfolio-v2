import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CodeBlock } from '@/components/blog/CodeBlock';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist.',
        };
    }

    return {
        title: `${post.title} | AntiGravity`,
        description: post.excerpt || `Read ${post.title} on AntiGravity.`,
        openGraph: {
            title: post.title,
            description: post.excerpt || `Read ${post.title} on AntiGravity.`,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
            images: post.coverImage ? [{ url: post.coverImage }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt || `Read ${post.title} on AntiGravity.`,
            images: post.coverImage ? [post.coverImage] : [],
        },
    };
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen pt-24 pb-20 px-6 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-background pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">

                {/* Back Link */}
                <Link href="/blogs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-mono text-sm">
                    <ArrowLeft className="w-4 h-4" />
                    <span>BACK_TO_TRANSMISSIONS</span>
                </Link>

                {/* Header */}
                <header className="mb-12 border-b border-border pb-8">
                    <div className="flex flex-wrap items-center gap-6 text-sm text-primary font-mono mb-4">
                        <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(post.date), 'MMMM dd, yyyy')}
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                        </span>
                        {post.tags?.map(tag => (
                            <span key={tag} className="bg-secondary/20 px-2 py-0.5 rounded text-xs border border-primary/20">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-foreground leading-tight mb-6">
                        {post.title}
                    </h1>

                    {post.coverImage && (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border mt-6">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none
                    prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-foreground
                    prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-foreground prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-2
                    prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4 prose-h3:text-foreground/90
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                    prose-li:text-muted-foreground prose-li:my-2
                    prose-strong:text-primary/90 prose-strong:font-bold
                    prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                    prose-blockquote:border-l-primary prose-blockquote:bg-secondary/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:my-8 prose-blockquote:text-foreground/80 prose-blockquote:italic
                    prose-code:text-primary prose-code:bg-secondary/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                    ">
                    <ReactMarkdown
                        components={{
                            code(props) {
                                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                const { children, className, node, ...rest } = props;
                                const match = /language-(\w+)/.exec(className || '');
                                return match ? (
                                    <CodeBlock language={match[1]}>
                                        {String(children).replace(/\n$/, '')}
                                    </CodeBlock>
                                ) : (
                                    <code {...rest} className={className}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
        </article>
    );
}
