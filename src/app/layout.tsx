import type { Metadata } from "next";
import { Pixelify_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asutosh Maharana | Portfolio",
  description: "Asutosh Maharana. Full stack developer. AI enthusiast.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Socials from "@/components/layout/Socials";

// ... (imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${pixelify.variable} ${rajdhani.variable} antialiased bg-background text-foreground font-body`}
      >
        <Navbar />
        <main className="min-h-screen pt-16 md:pl-20">
          {children}
        </main>
        <Socials />
        <Footer />
      </body>
    </html>
  );
}
