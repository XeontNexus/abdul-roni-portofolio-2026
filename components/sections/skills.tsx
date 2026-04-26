"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "../shared";
import { skills, type Skill } from "@/lib/constants";

function SkillCategory({
  category,
  categorySkills,
  index,
}: {
  category: string;
  categorySkills: Skill[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="mb-6 md:mb-8">
        <h3 className="text-lg font-bold text-accent mb-4">{category}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {categorySkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative p-4 rounded-lg bg-card border border-border hover:border-accent/50 transition-all flex items-center justify-center">
                <div className="text-center">
                  {/* Skill icon from skillicons.dev */}
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`}
                    alt={skill.name}
                    className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform"
                    loading="lazy"
                  />
                  <p className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors">
                    {skill.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const categories = ["Frontend", "Backend", "Databases", "Tools"] as const;

  return (
    <Container id="skills">
      <SectionHeading
        title="Skills & Technologies"
        description="My technical toolkit for building modern web applications"
      />

      <div>
        {categories.map((category, index) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <SkillCategory
              key={category}
              category={category}
              categorySkills={categorySkills}
              index={index}
            />
          );
        })}
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-16 p-6 rounded-lg bg-gradient-to-r from-primary/10 via-accent/5 to-transparent border border-accent/20 hover:border-accent/50 transition-all"
      >
        <p className="text-sm text-foreground leading-relaxed">
          <span className="font-semibold text-accent">Always learning:</span> I&apos;m
          continuously expanding my skillset and staying updated with the latest
          technologies and best practices in web development. Currently exploring{" "}
          <span className="text-accent">React Native &amp; Cloud Architecture</span>.
        </p>
      </motion.div>
    </Container>
  );
}
