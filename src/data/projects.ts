import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Tomy Medina",
    category: "Web Development",
    description:
      "Tomy Medina is a personal training web page focused in sell training programs for fitness and bodybuilding.",
    slug: "tomy-medina",
    image: "/tomymedina-preview.webp",
    longDescription:
      "Tomy Medina is a personal training web page focused in sell training programs for fitness and bodybuilding. The application allows users to browse and purchase training programs through mercadopago. Once done the information is sent to the email of the user.",

    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
    ],
    demoUrl: "https://www.tomymedina.com",
    features: [
      "Training programs sale",
      "Mercadopago integration",
      "Responsive layout",
      "Email confirmation",
    ],
  },
  {
    title: "Free Games",
    category: "Web Development",
    description:
      "Free Games is a web search to get look for the best web or windows games available, the key of this project was to build a minimal design.",
    image: "/free-games-preview.webp",
    slug: "free-games",
    longDescription:
      "Free Games is a web search to get look for the best web or windows games available, the key of this project was to build a minimal design. The application allows users to browse and discover free games across different platforms with a clean, minimal interface.",
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
    ],
    demoUrl: "https://free-games-jsm.vercel.app",
    repoUrl: "https://github.com/JuanSegundo7/free-games",
    features: [
      "Game search functionality",
      "Minimal design interface",
      "Platform filtering",
      "Responsive layout",
    ],
  },
  {
    title: "HiLink - Travel Camp",
    category: "UI/UX Design",
    description:
      "HiLink is a Landing Page with the principles of UI/UX, it has the best front practices and a very good looking background.",
    image: "/hilink-preview.webp",
    slug: "hilink-travel-camp",
    longDescription:
      "HiLink is a Landing Page with the principles of UI/UX, it has the best front practices and a very good looking background. This travel-focused landing page showcases modern design principles and optimal user experience.",
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
    ],
    demoUrl: "https://travel-landing-camp-app.vercel.app",
    repoUrl: "https://github.com/JuanSegundo7/Travel-App",
    features: [
      "Modern UI/UX design",
      "Responsive layout",
      "Optimized performance",
      "Interactive elements",
    ],
  },
  {
    title: "Imagino",
    category: "AI Development",
    description:
      "Imagino is an AI image generator where with different type of filters, you can create images and download them in your favorite extension.",
    image: "/imagino-preview.webp",
    slug: "imagino",
    longDescription:
      "Imagino is an AI image generator where with different type of filters, you can create images and download them in your favorite extension. The application leverages AI technology to generate unique images based on user inputs and preferences.",
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "AI APIs", category: "other" },
    ],
    demoUrl: "https://imagino.vercel.app",
    repoUrl: "https://github.com/JuanSegundo7/Imagino",
    features: [
      "AI-powered image generation",
      "Multiple filter options",
      "Image download in various formats",
      "User-friendly interface",
    ],
  },
  {
    title: "Streamvailable",
    category: "Web Application",
    description:
      "Streamvailable is a website where you can check if a movie or serie is available in your country and in which stream platform.",
    image: "/streamvailable-preview.webp",
    slug: "streamvailable",
    longDescription:
      "Streamvailable is a website where you can check if a movie or serie is available in your country and in which stream platform. This tool helps users quickly find where they can watch their favorite content across multiple streaming services.",
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Streaming APIs", category: "other" },
    ],
    demoUrl: "https://streamvailable.vercel.app",
    repoUrl: "https://github.com/JuanSegundo7/Streamvailable",
    features: [
      "Content availability search",
      "Country-specific results",
      "Streaming platform information",
      "User-friendly interface",
    ],
  },
  {
    title: "Loop Mania",
    category: "Web Application",
    description:
      "Loop mania is a Gif seeker where you can find Gifs of any topic, it has a trending system where you can see the most important gifs of the moment, also it has a bookmark and share system.",
    image: "/loop-mania-preview.webp",
    slug: "loop-mania",
    longDescription:
      "Loop mania is a Gif seeker where you can find Gifs of any topic, it has a trending system where you can see the most important gifs of the moment, also it has a bookmark and share system, so you can share it with anyone you want. You can look at your saved gifs in your profile.",
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Redux", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Material UI", category: "frontend" },
      { name: "Auth0", category: "frontend" },
      { name: "Axios", category: "frontend" },
    ],
    demoUrl: "https://loop-mania.vercel.app/",
    repoUrl: "https://github.com/JuanSegundo7/LoopMania",
    features: [
      "GIF search functionality",
      "Trending GIFs section",
      "Bookmark system",
      "Share functionality",
      "User profiles",
    ],
  },
];
