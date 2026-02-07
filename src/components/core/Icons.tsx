import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const Icons = {
    React: (props: IconProps) => (
        <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <circle cx="0" cy="0" r="2" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5" />
                <ellipse rx="10" ry="4.5" transform="rotate(60)" />
                <ellipse rx="10" ry="4.5" transform="rotate(120)" />
            </g>
        </svg>
    ),
    NextJS: (props: IconProps) => (
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <mask id="mask0_next" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                <circle cx="90" cy="90" r="90" fill="black" />
            </mask>
            <g mask="url(#mask0_next)">
                <circle cx="90" cy="90" r="90" fill="currentColor" fillOpacity="0.1" />
                <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor" />
                <rect x="115" y="54" width="12" height="72" fill="currentColor" />
            </g>
        </svg>
    ),
    Tailwind: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M12.0001 6C12.0001 6 16.0501 0 21.6001 5.55C27.1501 11.1 19.8001 18 12.0001 18C12.0001 18 7.95007 24 2.40007 18.45C-3.14993 12.9 4.20007 6 12.0001 6Z" />
        </svg>
    ),
    TypeScript: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="24" height="24" rx="2" fill="currentColor" fillOpacity="0.1" />
            <path d="M11.5 7H7.5V17H9.5V8.5H11.5V7Z" fill="currentColor" />
            <path d="M16.5 14.5C16.5 13.5 15.5 13 14.5 13C13.5 13 13.5 12.5 13.5 12C13.5 11.5 14 11 15 11C15.5 11 16 11.25 16.5 11.5L17 10C16.5 9.5 15.5 9 15 9C13 9 11.5 10 11.5 12C11.5 14 13.5 14.5 14.5 14.5C16 14.5 16 15.5 16 16C16 16.5 15 17 14 17C13 17 12 16.5 11.5 16L11 17.5C11.5 18 13 18.5 14 18.5C16.5 18.5 18 17.5 18 15V14.5H16.5Z" fill="currentColor" />
        </svg>
    ),
    Node: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" /></svg>
    ),
    Docker: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M4.5 3C3.67 3 3 3.67 3 4.5V19.5C3 20.33 3.67 21 4.5 21H19.5C20.33 21 21 20.33 21 19.5V4.5C21 3.67 20.33 3 19.5 3H4.5ZM7 6H9V8H7V6ZM11 6H13V8H11V6ZM15 6H17V8H15V6ZM7 10H9V12H7V10ZM11 10H13V12H11V10ZM15 10H17V12H15V10Z" /></svg>
    ),
    AWS: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20Z" /></svg>
    ),
    Git: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M2.61,15.61L9.61,22.61C9.8,22.8 10,22.89 10.3,22.89C10.59,22.89 10.87,22.78 11.08,22.56L19.54,14.07C19.76,13.85 19.89,13.56 19.89,13.25C19.89,12.95 19.78,12.65 19.54,12.45L12.45,5.36C12.24,5.14 11.95,5.03 11.64,5.03H6.07C5.5,5.03 5.03,5.5 5.03,6.07V11.64C5.03,11.95 5.14,12.24 5.36,12.45L2.61,15.19C2.39,15.42 2.29,15.7 2.29,15.99C2.29,16.27 2.4,16.55 2.61,16.77L2.61,15.61Z" /></svg>
    ),
    Figma: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12,2C9.24,2 7,4.24 7,7C7,9.76 9.24,12 12,12V17C12,19.76 9.76,22 7,22C4.24,22 2,19.76 2,17C2,14.24 4.24,12 7,12V7C7,4.24 9.24,2 12,2M17,2C19.76,2 22,4.24 22,7C22,9.76 19.76,12 17,12C14.24,12 12,9.76 12,7C12,4.24 14.24,2 17,2Z" /></svg>
    ),
    VSCode: (props: IconProps) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13,3.5L17.5,12L13,20.5L6.5,17V7L13,3.5M13,1.5L4,6.5V17.5L13,22.5L20,12L13,1.5Z" /></svg>
    )
};
