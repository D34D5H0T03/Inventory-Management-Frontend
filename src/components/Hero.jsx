import { Button } from "@/components/ui/button";
import { ArrowRight, MonitorSmartphone } from "lucide-react";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-800 mb-6">
          <MonitorSmartphone className="h-4 w-4 mr-2 text-slate-500" />
          API v1.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Unified inventory for <br className="hidden md:block" />
          retail and digital.
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          A headless commerce architecture. Manage your physical point of sale and e-commerce storefront from a single, secure Django backend.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 text-base">
            Browse Storefront
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 h-12 px-8 text-base gap-2 group">
            Launch POS Terminal
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}