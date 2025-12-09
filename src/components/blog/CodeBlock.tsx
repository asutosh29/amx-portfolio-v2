'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
    language?: string;
    children: string;
}

export function CodeBlock({ language, children }: CodeBlockProps) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <div className="relative group rounded-lg overflow-hidden border border-border my-6">
            <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={copyToClipboard}
                    className="p-1.5 rounded-md bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors border border-border"
                    aria-label="Copy code"
                >
                    {isCopied ? (
                        <Check className="w-4 h-4 text-primary" />
                    ) : (
                        <Copy className="w-4 h-4" />
                    )}
                </button>
            </div>
            <div className="!m-0">
                <SyntaxHighlighter
                    language={language || 'text'}
                    style={atomDark}
                    customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        background: 'rgba(0,0,0,0.5)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        borderRadius: '0',
                    }}
                    wrapLongLines={true}
                >
                    {children}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
