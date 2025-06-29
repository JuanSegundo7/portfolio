"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const { scrollYProgress } = useScroll();
  const headerBgOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.header
      className="sticky top-0 left-0 right-0 z-50 py-4"
      style={{
        backgroundColor: useTransform(
          headerBgOpacity,
          (opacity) => `rgba(var(--background-rgb), ${opacity * 0.8})`
        ),
        backdropFilter: useTransform(
          headerBgOpacity,
          (opacity) => `blur(${opacity * 8}px)`
        ),
      }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold">JUANSE.MARTINEZ</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Work", "About", "Contact"].map((item) => (
              <li key={item} className="text-sm font-medium">
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("/Juan-Segundo-Martinez.pdf", "_blank")}
          >
            Resume
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
