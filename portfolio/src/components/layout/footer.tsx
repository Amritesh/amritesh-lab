import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050508] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <div className="text-sm font-bold text-white mb-2">AMRITESH<span className="text-blue-500">.LAB</span></div>
            <p className="text-xs text-slate-500 max-w-xs">
              Explorable simulations and interactive systems.
              <br />
              © {new Date().getFullYear()} Amritesh Anand. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/Amritesh" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors group">
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/amritesh-anand-07136450/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors group">
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:amritesh.nitk@gmail.com" className="text-slate-500 hover:text-white transition-colors group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
