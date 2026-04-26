"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/XeontNexus",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/abdul-roni-872106252",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:abdulroni0616@gmail.com",
      label: "Email",
    },
  ];

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 md:py-16 border-t border-border/50 bg-gradient-to-b from-background to-slate-950/50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8"
        >
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-2">AR</h3>
            <p className="text-sm text-muted-foreground">
              Full-stack web developer based in Pekanbaru, Indonesia. Building
              modern web applications with cutting-edge technologies.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 rounded-lg border border-border/50 hover:border-accent/50 text-muted-foreground hover:text-accent transition-all"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:abdulroni0616@gmail.com"
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                abdulroni0616@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/abdul-roni-872106252"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                LinkedIn Profile
              </a>
              <p className="text-muted-foreground">
                📍 Pekanbaru, Indonesia
              </p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {currentYear} Abdul Roni. All rights reserved. Built with{" "}
            <span className="text-accent">Next.js</span>, <span className="text-accent">Tailwind CSS</span>, and{" "}
            <span className="text-accent">Framer Motion</span>.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-border/50 hover:border-accent/50 text-muted-foreground hover:text-accent transition-all hover:bg-accent/5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </motion.div>

      </div>
    </footer>
  );
}
