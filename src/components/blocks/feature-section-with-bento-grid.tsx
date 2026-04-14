"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mic, Wrench, BookOpen, Users } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export function FeaturesSectionWithBentoGrid() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="px-8">
          <h4 className="text-4xl lg:text-6xl lg:leading-tight mx-auto text-center tracking-tight font-bold header-text-glow mb-6">
            What We Do
          </h4>

          <p className="text-base lg:text-lg max-w-2xl mx-auto text-center font-medium">
            Building careers at the frontier of human healthspan
          </p>

          {/* voting new button */}
          <div className="mt-6 flex justify-center">
            <Link
              href="https://atom-meteoroid-b7d.notion.site/2a533e38a36f8036b52bf30ad96dfcd2?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gradient-button rounded-full px-6 md:px-8 py-7 sm:py-5 md:py-6 text-base md:text-lg w-full sm:w-auto"
              >
                What would you like to attend? Vote here!
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BentoCard
              title="Speaker Events"
              description="Physicians, biotech executives, academic researchers, sports scientists, and entrepreneurs — offering a 360-degree view of the longevity landscape so you can see what exists and decide what matters to you."
              icon={Mic}
              accentColor="from-orange-500/20 to-orange-600/5"
              iconColor="text-orange-400"
            />

            <BentoCard
              title="Hands-on Events"
              description="Intensive build sprints where multidisciplinary teams prototype real solutions — with a path from project to startup or integration into leading companies."
              icon={Wrench}
              accentColor="from-blue-500/20 to-blue-600/5"
              iconColor="text-blue-400"
            />

            <BentoCard
              title="Journal Club"
              description="A monthly forum for rigorous critical discussion of recent papers at the intersection of health, AI, and longevity science. Read, critique, debate."
              icon={BookOpen}
              accentColor="from-emerald-500/20 to-emerald-600/5"
              iconColor="text-emerald-400"
            />

            <BentoCard
              title="Careers & Community"
              description="Networking, mentorship, and career development connecting members with founders, researchers, and hiring teams across the longevity industry."
              icon={Users}
              accentColor="from-purple-500/20 to-purple-600/5"
              iconColor="text-purple-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  title,
  description,
  icon: Icon,
  accentColor,
  iconColor,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  accentColor: string;
  iconColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-6 hover:bg-black/60 transition"
    >
      <div className={`h-40 mb-4 rounded-xl overflow-hidden bg-gradient-to-br ${accentColor} flex items-center justify-center border border-white/5`}>
        <Icon className={`w-16 h-16 ${iconColor} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-white/70">{description}</p>
    </motion.div>
  );
}
