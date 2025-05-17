"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground">
            I specialize in creating digital experiences using modern
            technologies and design principles.
          </p>
        </motion.div>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="design"
              className="data-[state=active]:!bg-zinc-900 data-[state=active]:!text-primary"
            >
              Design
            </TabsTrigger>
            <TabsTrigger
              value="development"
              className="data-[state=active]:!bg-zinc-900 data-[state=active]:!text-primary"
            >
              Development
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:!bg-zinc-900 data-[state=active]:!text-primary"
            >
              Tools
            </TabsTrigger>
          </TabsList>
          {skills.map((category) => (
            <TabsContent
              key={category.title.toLowerCase()}
              value={category.title.toLowerCase()}
              className="space-y-4"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>
                    My expertise in {category.title.toLowerCase()} technologies
                    and methodologies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="hover:bg-primary/20 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
