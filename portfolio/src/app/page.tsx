import { HeroScene } from "@/components/canvas/hero-scene";
import Link from "next/link";
import { ArrowRight, Box, Cpu, Eye, Code, Brain, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="relative bg-background overflow-x-hidden">
      
      {/* 3D Background Layer - Fixed Position */}
      <div className="fixed inset-0 z-0">
        <HeroScene />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pointer-events-none">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full pt-20 lg:pt-0">
          
          {/* Left Column: Hero Text */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4 pointer-events-auto">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Interactive <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-glow">
                  Reality Simulators
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                I build explorable models that turn complex systems into intuition.
                From physics engines to financial interactives.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/projects">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    Explore Systems <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="glass-button text-white hover:text-white border-white/20">
                    Initialize Contact
                  </Button>
                </Link>
              </div>

              <div className="pt-8 border-t border-white/10 mt-8">
                <p className="text-sm text-slate-500 font-mono">
                  CURRENTLY: <span className="text-slate-300">Senior Software Architect @ HomeLane</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Empty to let the 3D scene shine */}
          <div className="hidden lg:flex flex-col justify-end pb-24 items-end pointer-events-none">
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
          <span className="text-[10px] text-slate-400 font-mono mb-2">SCROLL TO NAVIGATE</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20 pointer-events-auto">
         {/* Background gradient for readability over 3D scene */}
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none"></div>

         <div className="container mx-auto px-4 relative z-20">
            <div className="flex flex-col items-center text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Explorations</h2>
               <p className="text-slate-400 max-w-2xl">
                 A collection of interactive experiments and production-grade applications that bridge the gap between data and experience.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Project Card: Nature Simulation */}
               <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="aspect-video bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                     <Box className="w-12 h-12 text-slate-600 group-hover:text-emerald-400 transition-colors relative z-10 transform group-hover:scale-110 duration-500" />
                  </div>
                  <div className="p-6 relative z-10">
                     <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">Nature Simulation</h3>
                     <p className="text-slate-400 text-sm mb-4">Procedural generation of natural systems and organic patterns.</p>
                     <Link href="/projects/sheep-asmr" className="text-emerald-400 text-sm font-medium flex items-center hover:text-emerald-300">
                        Launch Simulation <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
               
               {/* Project Card: Stock Evaluator */}
               <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="aspect-video bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                     <Eye className="w-12 h-12 text-slate-600 group-hover:text-emerald-400 transition-colors relative z-10 transform group-hover:scale-110 duration-500" />
                  </div>
                  <div className="p-6 relative z-10">
                     <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">Stock Evaluator</h3>
                     <p className="text-slate-400 text-sm mb-4">Advanced Monte Carlo simulation engine calibrated with real-time market data.</p>
                     <Link href="/projects/stock-eval" className="text-emerald-400 text-sm font-medium flex items-center hover:text-emerald-300">
                        View Analysis <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>
            </div>

            <div className="mt-12 text-center">
               <Link href="/projects">
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">
                     View All Projects
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-32 bg-background border-t border-white/5 pointer-events-auto">
         <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engineering with <br/><span className="text-blue-500">Purpose</span></h2>
               <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                  <p>
                     I'm Amritesh, a software architect obsessed with the intersection of performance, design, and user experience.
                  </p>
                  <p>
                     Currently at HomeLane, I focus on building scalable systems that power thousands of design interactions daily. My work involves simplifying complex workflows into intuitive interfaces.
                  </p>
                  <p>
                     I use this space as a digital lab to experiment with AI, Machine Learning, and 3D web technologies.
                  </p>
               </div>
               <div className="mt-8 flex gap-4">
                  <Link href="/about">
                     <Button className="bg-white/10 hover:bg-white/20 text-white border-none">
                        More About Me
                     </Button>
                  </Link>
                  <Link href="/resume">
                     <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">
                        View Resume
                     </Button>
                  </Link>
               </div>
            </div>
            {/* Visual Decoration */}
             <div className="w-full md:w-1/2 flex justify-center">
               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-blue-500/20 flex items-center justify-center animate-pulse-slow">
                  <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl"></div>
                  <div className="w-48 h-48 border border-cyan-500/30 rounded-full flex items-center justify-center relative">
                     <div className="absolute -top-4 -right-4 p-3 bg-slate-900 rounded-xl border border-slate-700 shadow-xl">
                        <Code className="w-6 h-6 text-blue-400" />
                     </div>
                     <div className="absolute -bottom-4 -left-4 p-3 bg-slate-900 rounded-xl border border-slate-700 shadow-xl">
                        <Brain className="w-6 h-6 text-purple-400" />
                     </div>
                     <div className="w-32 h-32 bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center">
                        <Laptop className="w-12 h-12 text-slate-300" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Lab / Future Growth Section */}
      <section className="relative z-10 py-24 bg-gradient-to-t from-blue-950/20 to-background border-t border-white/5 pointer-events-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The Lab</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            A continuous experiment in AI, ML, and interactive web. This platform evolves as I learn, serving as a knowledge base and a testing ground for new ideas.
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-4 rounded-lg bg-slate-900/50 border border-white/5">
              <span className="block text-2xl font-bold text-white mb-1">AI/ML</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Models</span>
            </div>
            <div className="px-6 py-4 rounded-lg bg-slate-900/50 border border-white/5">
              <span className="block text-2xl font-bold text-white mb-1">3D</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Experiences</span>
            </div>
            <div className="px-6 py-4 rounded-lg bg-slate-900/50 border border-white/5">
              <span className="block text-2xl font-bold text-white mb-1">Web</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">Architecture</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
