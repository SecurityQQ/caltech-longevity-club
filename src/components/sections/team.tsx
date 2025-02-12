"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";

const team = [
  {
    name: "Andrea Olsen",
    role: "President & Founder",
    image: "/team/andrea-ai.webp",
    links: {
    //   github: "#",
      linkedin: "https://www.linkedin.com/in/andrea-olsen-0987654321/",
      email: CONTACT_EMAIL,
    },
  },
  {
    name: "Anna Nazarova",
    role: "Co-founder",
    image: "/team/anna-ai.webp",
    links: {
    //   github: "#",
      linkedin: "https://www.linkedin.com/in/anna-nazarova-a214b9122/",
      email: "hello@brogevity.com",
    },
  },
  {
    name: "Alex Varga",
    role: "Co-founder",
    image: "/team/alex-ai.webp",
    links: {
      github: "https://github.com/securityqq",
      linkedin: "https://www.linkedin.com/in/alexmsecurity/",
      email: "https://alexvarga.xyz",
    //   email: "mailto:alex@example.com",
    },
  },
  {
    name: "Ralph Adolphs",
    role: "Advisor",
    image: "/team/ralph-ai.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/ralph-adolphs-658a5417/",
      // email: "mailto:ralph@example.com",
    },
  },
  {
    name: "Ania Freymond",
    role: "Volunteer",
    image: "/team/ania-ai.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/ania-freymond/",
    //   email: "mailto:ralph@example.com",
    },
  },
//   {
//     name: "Avni Bansal",
//     role: "Volunteer",
//     image: "/team/ralph.jpeg",
//     links: {
//       linkedin: "https://www.linkedin.com/in/avni-bansal-522b1a284/",
//     //   email: "mailto:ralph@example.com",
//     },
//   }
  {
    name: "Elvira Koliadina",
    role: "Project Manager",
    image: "/team/elvira-ai.webp",
    links: {
      linkedin: "https://www.linkedin.com/in/elvira-koliadina-0a0a1b232/",
    //   email: "mailto:ralph@example.com",
    },
  },
];

export function TeamSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-black/50">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center gap-4 text-center mb-8 md:mb-12"
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass overflow-hidden">
                <CardContent className="p-3 md:p-6">
                  <div className="aspect-square mb-3 md:mb-4 overflow-hidden rounded-full w-[120px] md:w-[160px] mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">{member.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{member.role}</p>
                  <div className="flex gap-3 md:gap-4 justify-center">
                    {member.links.github && (
                      <Link 
                        href={member.links.github} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    )}
                    {member.links.linkedin && (
                      <Link 
                        href={member.links.linkedin} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
                    )}
                    {member.links.email && (
                      <Link 
                        href={member.links.email} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Mail className="w-4 h-4 md:w-5 md:h-5" />
                      </Link>
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