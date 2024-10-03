"use client"
import { cn } from "@/lib/utils";
import { HomeIcon, Users2, CalendarCheck, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const dashboardLinks = [
    {
      id: 0,
      name: "Event Types",
      href: "/dashboard",
      icon: HomeIcon,
    },
    {
      id: 1,
      name: "Meetings",
      href: "/dashboard/meetings",
      icon: Users2,
    },
    {
      id: 2,
      name: "Availablity",
      href: "/dashboard/availability",
      icon: CalendarCheck,
    },
    {
      id: 3,
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];
  
  export function Sidebar() {
    const pathname = usePathname();
    return (
        <>
          {dashboardLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={cn(
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground",
                "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ease-in-out  hover:text-primary"
              )}
            >
              <link.icon className="h-5 w-5" /> 
              <span className="text-sm"> 
                {link.name}
              </span>
            </Link>
          ))}
        </>
      );
      
  }