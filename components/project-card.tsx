"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative h-full p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-all duration-300 flex flex-col">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {project.context}
              </p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${
              project.status === "Delivered"
                ? "bg-green-500/20 text-green-400"
                : "bg-blue-500/20 text-blue-400"
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {project.longDescription}
        </p>

        {/* Highlights */}
        <div className="mb-4">
          <ul className="space-y-1">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border/50 hover:border-accent/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-2 pt-4 border-t border-border">
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="sm"
                className="flex gap-2 text-xs"
              >
                <Github className="h-4 w-4" />
                Code
              </Button>
            </Link>
          )}
          {project.live && (
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              <Button
                variant="accent"
                size="sm"
                className="flex gap-2 text-xs"
              >
                <ExternalLink className="h-4 w-4" />
                Live
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
