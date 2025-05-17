export interface Technology {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "design" | "other";
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  slug?: string;
  longDescription?: string;
  technologies?: Technology[];
  demoUrl?: string;
  repoUrl?: string;
  features?: string[];
}
