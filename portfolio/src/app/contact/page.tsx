"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/meelgwnr", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState("success");
      } else {
        // Handle error (could set an error state here, but for now we'll just log it)
        console.error("Form submission failed");
        setFormState("idle");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("idle");
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 max-w-4xl flex flex-col justify-center">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold text-white mb-4">
                    Initialize <span className="text-blue-500">Communication</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    Ready to build something impossible? Let's talk about your next simulation, visualization, or interactive product.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex items-center space-x-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Email Protocol</div>
                        <a href="mailto:amritesh.nitk@gmail.com" className="hover:text-blue-400 transition-colors">
                            amritesh.nitk@gmail.com
                        </a>
                    </div>
                </div>

                <div className="flex items-center space-x-4 text-slate-300">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider">Location Node</div>
                        <span>Bangalore, India (Remote Available)</span>
                    </div>
                </div>
            </div>

            <div className="p-6 glass-panel rounded-xl border-l-4 border-blue-500">
                <h3 className="text-white font-bold mb-2">Availability Status</h3>
                <p className="text-slate-400 text-sm">
                    Currently open to <span className="text-green-400">Freelance</span> and <span className="text-blue-400">Consulting</span> opportunities.
                </p>
            </div>
        </div>

        {/* Form */}
        <div className="glass-card p-8 rounded-2xl">
            {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                    <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                    <p className="text-slate-400">I'll decrypt your message and respond shortly.</p>
                    <Button onClick={() => setFormState("idle")} variant="outline" className="mt-4">
                        Send Another
                    </Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            className="bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            className="bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Describe your project parameters..."
                            required
                            className="min-h-[150px] bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500"
                        />
                    </div>

                    <Button 
                        type="submit" 
                        disabled={formState === "submitting"}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                        {formState === "submitting" ? (
                            <span className="animate-pulse">Transmitting...</span>
                        ) : (
                            <>Send Transmission <Send className="ml-2 w-4 h-4" /></>
                        )}
                    </Button>
                </form>
            )}
        </div>

      </div>
    </div>
  );
}
