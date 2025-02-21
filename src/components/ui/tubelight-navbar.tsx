"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  disabled?: boolean
  isCTA?: boolean
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Find active item based on current path
  const activeItem = items.find(item => {
    if (item.url === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(item.url)
  })

  const activeTab = activeItem?.name || items[0].name

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-2 sm:mb-0 sm:mt-4 h-fit",
        className,
      )}
    >
      <div className="flex items-center gap-1 md:gap-3 bg-background/90 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
 
          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={(e) => {
                if (item.disabled) {
                  e.preventDefault();
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 md:px-6 py-2 rounded-full transition-all duration-300",
                "text-foreground/80 hover:text-primary bg-background flex items-center gap-2",
                isActive && "bg-muted text-primary",
                item.disabled && "opacity-50 cursor-not-allowed hover:text-foreground/80",
                item.isCTA && "gradient-button text-white hover:text-white"
              )}
            >
              <Icon size={18} strokeWidth={2} />
              {(item.isCTA || !isMobile) && (
                <span className="hidden md:inline">{item.name}</span>
              )}
              {(item.isCTA) && (
                <span className="md:hidden">{item.name}</span>
              )}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
