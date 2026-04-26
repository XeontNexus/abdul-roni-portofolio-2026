"use client";

import { motion } from "framer-motion";
import { Container, SectionHeading } from "../shared";
import { stats } from "@/lib/constants";

function StatCard({
  label,
  value,
  description,
  index,
}: {
  label: string;
  value: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
      <div className="relative p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wider text-accent font-semibold">
            {label}
          </p>
          <p className="text-4xl md:text-5xl font-black gradient-text">
            {value}
          </p>
          <p className="text-xs md:text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  const paragraphs = [
    "I'm a full-stack web developer with a strong foundation in modern web technologies. With 4+ months of professional experience through internships and freelance projects, I've developed expertise in building scalable, user-centric applications from concept to production.",
    "Currently pursuing a Bachelor of Science in Informatics from Telkom University Purwokerto (GPA: 3.68), I combine academic rigor with practical expertise. I'm passionate about clean code, responsive design, and creating seamless user experiences that solve real-world problems.",
    "I'm actively seeking a startup internship opportunity starting July 2026 where I can contribute full-stack development expertise, learn from experienced teams, and grow as a developer. I thrive in collaborative environments and am committed to delivering high-quality solutions that drive business impact.",
  ];

  return (
    <Container id="about" className="relative">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <SectionHeading
        title="About Me"
        description="Full-stack developer with a passion for building excellent digital products"
      />

      <div className="grid lg:grid-cols-3 gap-8 mb-12 md:mb-16">
        {/* Text Content */}
        <div className="lg:col-span-2 space-y-6">
          {paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <div className="p-6 rounded-lg bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-accent/20 hover:border-accent/50 transition-all">
            <p className="text-sm text-foreground italic font-medium leading-relaxed">
              "I believe great software is built through attention to detail, continuous learning, and a deep understanding of user needs. Every project is an opportunity to learn and deliver excellence."
            </p>
            <p className="mt-4 text-xs text-muted-foreground font-semibold">
              — Abdul Roni
            </p>
          </div>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            description={stat.description}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
}
