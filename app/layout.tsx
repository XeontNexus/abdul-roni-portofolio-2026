import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "./theme-script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Abdul Roni - Full-stack Web Developer",
  description:
    "Full-stack web developer based in Pekanbaru, Indonesia. Specialized in Next.js, Laravel, and modern web technologies. Open to startup internship opportunities.",
  keywords: [
    "Full-stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "PHP",
    "TypeScript",
    "Web Developer",
    "Pekanbaru",
    "Indonesia",
  ],
  authors: [{ name: "Abdul Roni", url: "https://abdulroni-portfolio.vercel.app" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulroni-portfolio.vercel.app",
    title: "Abdul Roni - Full-stack Web Developer",
    description:
      "Full-stack web developer with 4+ months of experience building scalable web applications.",
    siteName: "Abdul Roni Portfolio",
    images: [
      {
        url: "https://abdulroni-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Roni Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Roni - Full-stack Web Developer",
    description:
      "Full-stack web developer specializing in modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeScript />
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-950">
          {children}
        </div>
      </body>
    </html>
  );
}
