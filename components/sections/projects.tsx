"use client";

import { Container, SectionHeading } from "../shared";
import { ProjectCard } from "../project-card";
import { projects } from "@/lib/projects";

export function ProjectsSection() {
  return (
    <Container id="projects">
      <SectionHeading
        title="Featured Projects"
        description="A curated selection of my recent work showcasing my full-stack capabilities"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Container>
  );
}
