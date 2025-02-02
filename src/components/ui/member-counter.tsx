"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MovingBorder } from "@/components/ui/moving-border";

interface Avatar {
  src: string;
  alt: string;
}

interface MemberCounterProps {
  avatars: Avatar[];
  count: number;
}

export function MemberCounter({ avatars, count }: MemberCounterProps) {
  return (
    <MovingBorder
      duration={3000}
      rx="20%"
      ry="20%"
      className="w-fit"
      containerClassName="glass-card rounded-full px-3 py-2"
      borderClassName="absolute inset-0 h-full w-full bg-orange-glow-radial animate-pulse"
    >
      <motion.div
        className="flex items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex -space-x-1.5 md:-space-x-2">
          {avatars.map((avatar, i) => (
            <Image
              key={i}
              className="w-6 h-6 md:w-8 md:h-8 rounded-full ring-2 ring-background"
              src={avatar.src}
              alt={avatar.alt}
              width={32}
              height={32}
            />
          ))}
        </div>
        <p className="pl-3 pr-2 md:pl-4 md:pr-3 text-xs md:text-sm text-muted-foreground">
          Join <strong className="text-foreground font-medium">{count}+</strong> members
        </p>
      </motion.div>
    </MovingBorder>
  );
} 