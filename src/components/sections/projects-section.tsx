"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="work" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <Separator className="w-20 bg-primary" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
