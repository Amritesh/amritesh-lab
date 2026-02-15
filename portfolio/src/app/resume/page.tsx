import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 h-full flex flex-col">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
            <h1 className="text-3xl font-bold text-white flex items-center">
                <FileText className="mr-3 text-blue-500" />
                Resume
            </h1>
            <p className="text-slate-400 text-sm mt-1">
                Last Updated: Feb 2026
            </p>
        </div>
        
        <a href="/resume.pdf" download="Amritesh_Anand_Resume.pdf">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="mr-2 w-4 h-4" />
                Download PDF
            </Button>
        </a>
      </div>

      {/* PDF Viewer Container */}
      <div className="flex-grow w-full h-[75vh] glass-panel rounded-xl overflow-hidden relative">
        <iframe 
            src="/resume.pdf" 
            className="w-full h-full border-none"
            title="Resume PDF"
        />
        
        {/* Fallback for mobile if PDF doesn't render well */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center text-slate-500">
            <p>Loading PDF viewer...</p>
        </div>
      </div>

    </div>
  );
}
