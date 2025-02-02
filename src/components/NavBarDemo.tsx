'use client';

import { Home, Video, Calendar, Mail, UserPlus, LucideIcon } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Media', url: '#', icon: Video, disabled: true },
    { name: 'Events', url: '/events', icon: Calendar,  disabled: true },
    { name: 'Contact', url: 'mailto:biohackingclub@caltech.edu', icon: Mail },
    { name: 'Join', url: 'https://atom-meteoroid-b7d.notion.site/12e33e38a36f808c80dcd1ddd0a1d2d9', icon: UserPlus, isCTA: true }
  ];

  return <NavBar items={navItems} />;
} 