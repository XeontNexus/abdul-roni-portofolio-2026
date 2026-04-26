"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, FileText, MessageCircle } from "lucide-react";
import { Container, SocialIcons } from "../shared";

export function HeroSection() {
  const socialLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/XeontNexus",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://linkedin.com/in/abdul-roni-872106252",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:abdulroni0616@gmail.com",
      label: "Email",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  return (
    <Container
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0"
      id="hero"
    >
      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Left Column: Photo + Social/CV */}
        <div className="lg:col-span-2 flex flex-col gap-6 order-1 lg:order-1">
          {/* Profile Photo - aligned with heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/profile.jpg"
              alt="Abdul Roni"
              className="w-full max-w-sm h-auto rounded-2xl border-4 border-accent/20 shadow-2xl shadow-accent/10"
            />
          </motion.div>

        </div>

        {/* Right Column: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-3 space-y-6 md:space-y-8 order-2 lg:order-2"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <div className="h-1 w-10 md:w-12 bg-gradient-to-r from-accent to-primary rounded-full" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-2 md:space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="block gradient-text">Abdul Roni</span>
            </h1>
          </motion.div>

          {/* Role and Tagline */}
          <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl text-accent font-semibold">
              Full-stack Web Developer
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I build modern web applications using Next.js, Laravel, and cutting-edge
              technologies. Currently seeking a startup internship opportunity to contribute
              innovative solutions. Based in Pekanbaru, Indonesia.
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Pekanbaru, Indonesia
          </motion.div>

          {/* Social Icons & CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <SocialIcons links={socialLinks} />
              <div className="h-5 w-px bg-border" />
              <a
                href="https://drive.google.com/file/d/1BU8Kcx97OJXymcxI4K-L5cZCmJy8ieH5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-accent/50 transition-all hover:bg-accent/5 text-xs"
              >
                <FileText className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="font-medium text-foreground">CV (ID)</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1r04CAnxfCHOMsy6oIA6WeotK-6ACHqWB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:border-accent/50 transition-all hover:bg-accent/5 text-xs"
              >
                <FileText className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="font-medium text-foreground">CV (EN)</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        variants={itemVariants}
        className="pt-12 md:pt-16 flex justify-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="p-2 rounded-full border border-border/50 hover:border-accent/50 text-muted-foreground hover:text-accent transition-all"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </motion.div>
    </Container>
  );
}
