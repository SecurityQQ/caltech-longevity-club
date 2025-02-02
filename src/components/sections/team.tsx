"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Andrea Olsen",
    role: "Founder",
    image: "/team/andrea.png",
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:andrea@example.com",
    },
  },
  {
    name: "Anna Nazarova",
    role: "Co-founder",
    image: "/team/anna.png",
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:anna@example.com",
    },
  },
  {
    name: "Alex Varga",
    role: "Co-founder",
    image: "/team/alex.png",
    links: {
      github: "#",
      linkedin: "#",
      email: "mailto:alex@example.com",
    },
  },
  {
    name: "Ralph Adolphs",
    role: "Advisor",
    image: "/team/ralph.jpeg",
    links: {
      linkedin: "#",
      email: "mailto:ralph@example.com",
    },
  },
];

export function TeamSection() {
  return (
    <section className="w-full py-24 bg-black/50">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center gap-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl header-text-glow">
            Our Team
          </h2>
          <p className="max-w-[700px] text-muted-foreground">
            Meet the innovators and thought leaders behind the Caltech Longevity Club
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass overflow-hidden">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <div className="flex gap-4 justify-center">
                    {member.links.github && (
                      <a href={member.links.github} className="text-muted-foreground hover:text-primary">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} className="text-muted-foreground hover:text-primary">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.links.email && (
                      <a href={member.links.email} className="text-muted-foreground hover:text-primary">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 