import { projects, Project } from "@/lib/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Layers, Microscope, Cpu, CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-20 overflow-hidden">
      
      {/* Background Gradient */}
      <div className={`absolute top-0 left-0 w-full h-[50vh] ${project.thumbnail} opacity-20 -z-10 blur-3xl`} />

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Back Nav */}
        <Link href="/projects" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Archive
        </Link>

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
               <Badge variant="outline" className="border-blue-500/50 text-blue-300">{project.domain}</Badge>
               <Badge variant="outline" className="border-indigo-500/50 text-indigo-300">{project.interactionType}</Badge>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
               {project.demoUrl && project.demoUrl !== "#" && (
                   <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                       <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                           Launch Simulation <ExternalLink className="ml-2 w-4 h-4" />
                       </Button>
                   </a>
               )}
               {project.githubUrl && project.githubUrl !== "#" && (
                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                       <Button variant="outline" size="lg" className="glass-button">
                           View Source <Github className="ml-2 w-4 h-4" />
                       </Button>
                   </a>
               )}
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div className="glass-panel p-6 rounded-xl h-fit">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Core Technology</h3>
            <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                    <Badge key={t} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                        {t}
                    </Badge>
                ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Parameters</h3>
                <ul className="space-y-3">
                    {project.details.whatYouInteractWith.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-300">
                             <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0" />
                             {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>

        {/* Deep Dive Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            
            {/* Core Model */}
            <section className="glass-card p-8 rounded-xl border-l-4 border-l-blue-500">
                <div className="flex items-center mb-4 text-blue-400">
                    <Microscope className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold">The Core Model</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                    {project.details.coreModel}
                </p>
            </section>

             {/* Engineering */}
             <section className="glass-card p-8 rounded-xl border-l-4 border-l-indigo-500">
                <div className="flex items-center mb-4 text-indigo-400">
                    <Cpu className="w-6 h-6 mr-3" />
                    <h2 className="text-xl font-bold">Engineering</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                    {project.details.engineering}
                </p>
            </section>

        </div>

        {/* Results / Learnings (Full Width) */}
        <section className="mb-20">
            <div className="flex items-center mb-6">
                 <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                 <h2 className="text-2xl font-bold text-white">Results & Learnings</h2>
            </div>
            <div className="glass-panel p-8 rounded-xl">
                 <p className="text-lg text-slate-300 leading-relaxed">
                     {project.details.results}
                 </p>
            </div>
        </section>

        {/* Live Preview for Stock Evaluator */}
        {project.id === 'stock-eval' && (
          <section className="mb-20">
             <div className="flex items-center mb-6">
                 <h2 className="text-2xl font-bold text-white">Live Preview</h2>
            </div>
            <div className="w-full h-[800px] glass-panel rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://amritesh.github.io/Stocks/"
                className="w-full h-full border-none"
                title="Stock Trade Evaluator Live Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          </section>
        )}

      </div>
    </article>
  );
}
