import heroImage from "@/assets/WelcomeHero.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, MonitorSmartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      
      {/* Background Image Layer (Right Side) */}
      <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
        <div className="w-full lg:w-2/3 h-full relative">
          {/* The Gradient Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 z-10" />
          
          {/* 2. Use the imported variable in the src attribute */}
          <img 
            src={heroImage} 
            alt="Retail Storefront Dashboard" 
            className="w-full h-full object-cover object-right opacity-90 dark:opacity-60"
          />
        </div>
      </div>

      {/* Foreground Text Layer (Left Side) */}
      <div className="container relative z-20 mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-gray-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 px-3 py-1 text-sm font-medium text-slate-800 dark:text-slate-300 mb-6 backdrop-blur-sm">
            <MonitorSmartphone className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
            API v1.0 is now live
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Unified inventory for <br className="hidden md:block" />
            retail and digital.
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl">
            A headless commerce architecture. Manage your physical point of sale and e-commerce storefront from a single, secure Django backend.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-slate-900 dark:bg-blue-600 text-white hover:bg-slate-800 dark:hover:bg-blue-700 h-12 px-8 text-base border-none shadow-lg">
              Browse Storefront
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 dark:border-slate-700 dark:text-slate-200 dark:bg-slate-900/50 dark:hover:bg-slate-800 h-12 px-8 text-base gap-2 group backdrop-blur-sm shadow-sm">
              Launch POS Terminal
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}