"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
}

export function QualificationSection() {
  const [activeTab, setActiveTab] = useState("education");

  const education: TimelineItem[] = [
    {
      title: "Computer Science (1 year)",
      organization: "National University of La Plata",
      period: "May 2019 - November 2020",
    },
    {
      title: "Introduction to Web Development",
      organization: "Plataforma 5",
      period: "January 2020 - February 2020",
    },
    {
      title: "Full Stack Developer",
      organization: "Digital House",
      period: "April 2021 - September 2021",
    },
    {
      title: "Full Stack Developer",
      organization: "Henry Coding Bootcamp",
      period: "September 2022 - December 2022",
    },
  ];

  const experience: TimelineItem[] = [
    {
      title: "Full Stack Developer",
      organization: "DevLabs",
      period: "April 2023 - June 2023",
    },
    {
      title: "Full Stack Developer",
      organization: "Home Real State",
      period: "June 2023 - September 2023",
    },
    {
      title: "Frontend Developer",
      organization: "Resow Solutions",
      period: "July 2023 - October 2023",
    },
    {
      title: "Frontend Developer",
      organization: "Eldar",
      period: "January 2024 - Present",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Qualification</h2>
          <p className="text-muted-foreground">my personal journey</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Tabs
            defaultValue="education"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger
                value="education"
                className="flex items-center gap-2 data-[state=active]:!bg-zinc-900 data-[state=active]:!text-primary"
              >
                <BookOpen className="h-2 w-5" />
                Education
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2 data-[state=active]:!bg-zinc-900 data-[state=active]:!text-primary"
              >
                <Briefcase className="h-5 w-5" />
                Experience
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education" className="mt-0">
              <Timeline items={education} />
            </TabsContent>

            <TabsContent value="experience" className="mt-0">
              <Timeline items={experience} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>

      {/* Timeline items */}
      <div className="relative">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="hidden md:block relative">
                <div
                  className={`absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 transform -translate-x-1/2 -translate-y-1/2`}
                ></div>

                <div
                  className={`w-1/2 ${
                    isEven
                      ? "ml-0 mr-auto pr-16 text-right"
                      : "ml-auto mr-0 pl-16 text-left"
                  }`}
                >
                  <div className="bg-card p-5 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.organization}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:hidden relative">
                <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="ml-12 pl-4">
                  <div className="bg-card p-5 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.organization}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.period}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
