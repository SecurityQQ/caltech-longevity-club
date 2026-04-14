"use client";

import Link from "next/link";
import { Rocket } from "lucide-react";

export function HackathonBanner() {
  return (
    <Link
      href="/hackathon"
      className="fixed right-0 top-1/3 z-40 hidden sm:flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-extrabold text-lg px-6 py-5 rounded-l-2xl shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_50px_rgba(255,107,0,0.7)] hover:pr-8 transition-all duration-300 origin-right animate-hackathon-pulse"
    >
      <Rocket className="w-6 h-6" />
      <span className="flex flex-col leading-tight">
        <span className="text-xs font-semibold tracking-widest uppercase opacity-80">May 22–24</span>
        <span>Hackathon 2026</span>
      </span>
    </Link>
  );
}
