"use client";

import { useState, useMemo } from "react";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List, Search } from "lucide-react";

export default function ProjectsPage() {
  const [activeDomain, setActiveDomain] = useState<string>("All");
  const [activeTech, setActiveTech] = useState<string>("All");

  const domains = ["All", "Physics", "Finance", "Behavior", "Games", "Tools"];
  const techs = ["All", "Three.js", "React", "Python", "ML"];

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const domainMatch = activeDomain === "All" || project.domain === activeDomain;
      const techMatch = activeTech === "All" || project.tech.some(t => t === activeTech);
      return domainMatch && techMatch;
    });
  }, [activeDomain, activeTech]);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto">
      
      {/* Header */}
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          <span className="text-blue-500">System</span> Archive
        </h1>
        <p className="text-slate-400 max-w-2xl">
          A collection of interactive experiments, simulations, and tools built to explore the boundaries of web technology and mathematical modeling.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 sticky top-20 z-30 py-4 glass-panel rounded-xl px-6">
        
        {/* Domain Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
            <Filter className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs font-mono text-slate-500 mr-2 uppercase">Domain:</span>
            {domains.map((domain) => (
                <button
                    key={domain}
                    onClick={() => setActiveDomain(domain)}
                    className={`px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap ${
                        activeDomain === domain 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                    {domain}
                </button>
            ))}
        </div>

        <div className="hidden md:block w-[1px] bg-white/10 mx-2"></div>

        {/* Tech Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
            <span className="text-xs font-mono text-slate-500 mr-2 uppercase">Tech:</span>
            {techs.map((tech) => (
                <button
                    key={tech}
                    onClick={() => setActiveTech(tech)}
                    className={`px-3 py-1 rounded-full text-sm transition-all whitespace-nowrap ${
                        activeTech === tech 
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                    {tech}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={project.id}
            >
              <Link href={`/projects/${project.id}`} className="group block h-full">
                <div className="h-full glass-card rounded-xl overflow-hidden flex flex-col relative group-hover:border-blue-500/30 transition-colors">
                  
                  {/* Thumbnail Placeholder */}
                  <div className={`h-48 w-full ${project.thumbnail} relative overflow-hidden`}>
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                     <div className="absolute bottom-3 left-3 flex gap-2">
                        <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-none text-[10px]">
                            {project.interactionType}
                        </Badge>
                     </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-xs font-mono text-slate-500">{project.year}</span>
                    </div>
                    
                    <p className="text-sm text-slate-400 mb-4 flex-grow line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                          <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-slate-500">
                              +{project.tags.length - 3}
                          </span>
                      )}
                    </div>
                  </div>
                  
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
          <div className="text-center py-20">
              <p className="text-slate-500">No systems match your filter criteria.</p>
              <Button 
                variant="link" 
                onClick={() => { setActiveDomain("All"); setActiveTech("All"); }}
                className="text-blue-400"
            >
                Clear Filters
              </Button>
          </div>
      )}

    </div>
  );
}