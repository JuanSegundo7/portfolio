"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code,
  Layers,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import type { Project } from "@/types/project";
import Image from "next/image";

interface ProjectDetailSectionProps {
  project: Project;
}

export function ProjectDetailSection({ project }: ProjectDetailSectionProps) {
  // Group technologies by category
  const frontendTech =
    project.technologies?.filter((tech) => tech.category === "frontend") || [];
  const backendTech =
    project.technologies?.filter((tech) => tech.category === "backend") || [];
  const otherTech =
    project.technologies?.filter(
      (tech) => tech.category === "design" || tech.category === "other"
    ) || [];

  const hasBackend = backendTech.length > 0;

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#work">
            <Button
              variant="ghost"
              className="mb-8 pl-0 hover:pl-2 transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <Badge variant="outline" className="mb-6">
            {project.category}
          </Badge>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 rounded-full">
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2 rounded-full">
                  <Github size={16} />
                  View on GitHub
                </Button>
              </a>
            )}
          </div>
        </motion.div>

        {/* Project image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="rounded-lg overflow-hidden">
            <Image
              src={"/imgs" + project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto object-cover"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </motion.div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.features.map((feature, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <p>{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Technology stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8">Technology Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Frontend */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <Separator className="mb-6" />
              <div className="flex flex-wrap gap-2">
                {frontendTech.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-sm py-1 px-3"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
              <p className="mt-4 text-muted-foreground">
                The frontend was built with a focus on performance and user
                experience, utilizing modern frameworks and libraries to create
                a responsive and intuitive interface.
              </p>
            </div>

            {/* Backend */}
            {hasBackend ? (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <Separator className="mb-6" />
                <div className="flex flex-wrap gap-2">
                  {backendTech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">
                  The backend infrastructure was designed for scalability and
                  security, providing robust API endpoints and efficient data
                  management to support the application{"'"}s features.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Palette className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Design & Tools</h3>
                </div>
                <Separator className="mb-6" />
                <div className="flex flex-wrap gap-2">
                  {otherTech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm py-1 px-3"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-muted-foreground">
                  The design process focused on creating a clean, intuitive user
                  interface with attention to typography, spacing, and visual
                  hierarchy to enhance the overall user experience.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
