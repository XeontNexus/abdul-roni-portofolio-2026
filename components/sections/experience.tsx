"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "../shared";
import { experiences } from "@/lib/constants";

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Timeline line - only show on desktop and not for last item */}
      {index !== experiences.length - 1 && (
        <div className="hidden md:block absolute left-7 top-16 w-0.5 h-20 bg-gradient-to-b from-accent to-transparent" />
      )}

      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <div className="h-4 w-4 rounded-full bg-accent ring-4 ring-background border-2 border-accent mt-2" />
        </div>

        {/* Content */}
        <div className="pb-8 md:pb-12">
          <div className="mb-2">
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              {exp.title}
            </h3>
            <p className="text-sm text-accent font-semibold">{exp.company}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {exp.location} • {exp.type}
            </p>
            <p className="text-xs text-muted-foreground/80 mt-1">
              {exp.startDate} - {exp.endDate}
            </p>
          </div>

          <div className="mt-4 space-y-2">
            {exp.description.map((desc, i) => (
              <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-accent mt-1 flex-shrink-0">▸</span>
                <span>{desc}</span>
              </p>
            ))}
          </div>

          {exp.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 text-xs rounded bg-muted/50 text-muted-foreground border border-border/50 hover:border-accent/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  return (
    <Container id="experience">
      <SectionHeading
        title="Experience"
        description="My professional journey in software development"
      />

      <div className="relative">
        {/* Vertical line - mobile */}
        <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </Container>
  );
}
