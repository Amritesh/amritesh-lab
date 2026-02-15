import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 container mx-auto max-w-4xl">
      
      {/* Header */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Architect of <span className="text-blue-500">Digital Reality</span>
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
          I'm Amritesh Anand, a Senior Software Architect specializing in building high-fidelity simulations and interactive systems. 
          I bridge the gap between complex mathematical models and intuitive user experiences.
        </p>
      </section>

      {/* Experience Timeline */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-[1px] bg-blue-500 mr-4"></span>
            Mission History
        </h2>
        
        <div className="space-y-12 border-l border-white/10 ml-3 pl-8 relative">
            
            {/* HomeLane */}
            <div className="relative">
                <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-blue-500 border-4 border-black" />
                <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">Senior Software Architect</h3>
                    <div className="text-blue-400 font-mono text-sm mb-1">HomeLane</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Aug 2019 – Present</div>
                </div>
                <p className="text-slate-400 mb-4">
                    Architecting a VR-based interior design platform. Built advanced rendering engines, light simulation, 
                    zone visualization, and auto-scaling systems. Leading full lifecycle delivery from concept to production.
                </p>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="glass">VR/AR</Badge>
                    <Badge variant="glass">WebGL</Badge>
                    <Badge variant="glass">System Design</Badge>
                </div>
            </div>

             {/* Frulix */}
             <div className="relative">
                <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-700 border-4 border-black" />
                <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">Co-founder</h3>
                    <div className="text-indigo-400 font-mono text-sm mb-1">Frulix</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Sep 2016 – Aug 2019</div>
                </div>
                <p className="text-slate-400 mb-4">
                    Built a VR platform from scratch using React, Node, Three.js, and Firebase. 
                    Pioneered early web-based VR experiences for commercial use.
                </p>
                <div className="flex flex-wrap gap-2">
                    <Badge variant="glass">Startup</Badge>
                    <Badge variant="glass">Full Stack</Badge>
                    <Badge variant="glass">Three.js</Badge>
                </div>
            </div>

            {/* Indigo Canada */}
            <div className="relative">
                 <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-700 border-4 border-black" />
                 <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">Consultant</h3>
                    <div className="text-slate-400 font-mono text-sm mb-1">Indigo Canada</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Jan 2019 – Apr 2019</div>
                </div>
                <p className="text-slate-400">
                     Ported legacy ASP.NET infrastructure to a modern React architecture with comprehensive Jest testing suites.
                </p>
            </div>

            {/* Travelyaari */}
            <div className="relative">
                 <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-700 border-4 border-black" />
                 <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                    <div className="text-slate-400 font-mono text-sm mb-1">Travelyaari</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Dec 2014 – Sep 2016</div>
                </div>
                <p className="text-slate-400">
                     Developed real-time inventory systems for bus ticketing and travel packages using Python & C#.
                </p>
            </div>
             
             {/* Intel Security */}
             <div className="relative">
                 <span className="absolute -left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-700 border-4 border-black" />
                 <div className="mb-2">
                    <h3 className="text-xl font-bold text-white">Software Engineer</h3>
                    <div className="text-slate-400 font-mono text-sm mb-1">Intel Security</div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Jul 2013 – Dec 2014</div>
                </div>
                <p className="text-slate-400">
                     Malware detection cloud products, clustering ML algorithms, and automation scripts.
                </p>
            </div>

        </div>
      </section>

      {/* Skills Matrix */}
      <section className="mb-20">
         <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-[1px] bg-blue-500 mr-4"></span>
            Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-blue-400 font-mono text-sm mb-4 uppercase tracking-wider">Core / Simulation</h3>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between"><span>Three.js / R3F</span> <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">Expert</span></li>
                    <li className="flex justify-between"><span>WebGL / GLSL</span> <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">Advanced</span></li>
                    <li className="flex justify-between"><span>Python (NumPy/Pandas)</span> <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">Advanced</span></li>
                    <li className="flex justify-between"><span>Linear Algebra</span> <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded text-blue-300">Solid</span></li>
                </ul>
            </div>

            <div className="glass-panel p-6 rounded-xl">
                <h3 className="text-indigo-400 font-mono text-sm mb-4 uppercase tracking-wider">Full Stack / Cloud</h3>
                <ul className="space-y-2 text-slate-300">
                    <li className="flex justify-between"><span>React / Next.js</span> <span className="text-xs bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300">Expert</span></li>
                    <li className="flex justify-between"><span>Node.js</span> <span className="text-xs bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300">Expert</span></li>
                    <li className="flex justify-between"><span>AWS / GCP</span> <span className="text-xs bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300">Proficient</span></li>
                    <li className="flex justify-between"><span>Docker / K8s</span> <span className="text-xs bg-indigo-500/20 px-2 py-0.5 rounded text-indigo-300">Proficient</span></li>
                </ul>
            </div>
        </div>

      </section>

       {/* Mentorship */}
       <section>
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-[1px] bg-blue-500 mr-4"></span>
            Mentorship & Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="glass-card p-4 rounded-lg">
                 <div className="text-white font-bold mb-1">CodeSlash</div>
                 <div className="text-xs text-slate-500">Co-founder/Mentor</div>
             </div>
             <div className="glass-card p-4 rounded-lg">
                 <div className="text-white font-bold mb-1">MountBlue.io</div>
                 <div className="text-xs text-slate-500">Mentor</div>
             </div>
             <div className="glass-card p-4 rounded-lg">
                 <div className="text-white font-bold mb-1">Udacity</div>
                 <div className="text-xs text-slate-500">Mentor/Reviewer</div>
             </div>
        </div>
      </section>

    </div>
  );
}
