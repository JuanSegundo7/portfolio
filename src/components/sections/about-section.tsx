"use client";

import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Avatar className="relative w-full h-auto aspect-square rounded-lg overflow-hidden">
              <AvatarImage
                src="/imgs/hero.webp?height=600&width=600"
                alt="Portrait"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <AvatarFallback className="text-6xl">AD</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I{"'"}m a creative full-stack developer with over 3 years of
              experience creating digital experiences that blend form and
              function. My approach combines technical expertise with an eye for
              design to build products that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground mb-8">
              When I{"'"}m not coding, you can find me exploring new design
              trends, experimenting with creative technologies or in the gym
              working my muscles!
            </p>
            <div className="flex gap-4">
              <Link
                href={`https://www.linkedin.com/in/juansegundomartinez/`}
                target="_blank"
              >
                <Button className="rounded-full gap-2">
                  <User size={16} />
                  More About Me
                </Button>
              </Link>
              <Link href={`#contact`}>
                <Button variant="outline" className="rounded-full gap-2">
                  <Mail size={16} />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
