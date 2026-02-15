"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Archive", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
        className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-[#050508]/80 backdrop-blur-md border-white/5 py-3" : "bg-transparent py-5"
        )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <Link href="/" className="flex items-center gap-2 group">
              <Hexagon className="w-6 h-6 text-blue-500 group-hover:rotate-90 transition-transform duration-500" />
              <span className="text-xl font-bold tracking-tighter text-white">
                AMRITESH<span className="text-blue-500">.LAB</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => {
                 const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
                 return (
                    <Link
                    key={item.name}
                    href={item.path}
                    className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-white hover:bg-white/5",
                        isActive ? "text-white" : "text-slate-400"
                    )}
                    >
                    {item.name}
                    {isActive && (
                        <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    </Link>
                 )
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-[#050508] z-40 pt-24 px-4"
            >
            <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                    "block px-4 py-4 text-2xl font-bold border-b border-white/5",
                    pathname === item.path ? "text-blue-500" : "text-slate-400"
                    )}
                >
                    {item.name}
                </Link>
                ))}
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
