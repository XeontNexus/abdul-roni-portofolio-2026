"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

interface SectionHeadingProps {
  title: string;
  description?: string;
  variant?: "default" | "white";
}

export function SectionHeading({
  title,
  description,
  variant = "default",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 md:mb-16"
    >
      {variant === "white" && (
        <div className="flex items-center gap-2 mb-2">
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            section
          </span>
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        variant === "white" ? "text-white" : "gradient-text"
      }`}>
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface SocialIconsProps {
  links: SocialLink[];
}

export function SocialIcons({ links }: SocialIconsProps) {
  return (
    <div className="flex items-center gap-3">
      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link href={link.href} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/50 hover:border-accent/50 hover:text-accent transition-all"
              aria-label={link.label}
            >
              {link.icon}
            </Button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  isDownload?: boolean;
}

export function CTAButton({
  href,
  children,
  external = false,
  isDownload = false,
}: CTAButtonProps) {
  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link href={href} {...props}>
      <Button
        variant="default"
        size="lg"
        className="group flex items-center gap-2 text-base"
        onClick={(e) => {
          if (isDownload) {
            e.preventDefault();
            const link = document.createElement("a");
            link.href = href;
            link.download = "";
            link.click();
          }
        }}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </Link>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 scroll-mt-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-12 md:my-16" />
  );
}
