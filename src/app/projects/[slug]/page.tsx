"use client";

import { useParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import type { Project } from "@/types/project";
import { notFound } from "next/navigation";
import { ProjectDetailSection } from "@/components/sections/project-detail-sectiom";

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const slug = params?.slug as string;
    const foundProject = projects.find((p) => p.slug === slug);

    if (foundProject) {
      setProject(foundProject);
    }

    setLoading(false);
  }, [params]);

  if (!loading && !project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{project && <ProjectDetailSection project={project} />}</main>
      <Footer />
    </div>
  );
}
