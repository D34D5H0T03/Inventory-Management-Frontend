import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Layers, ShieldCheck, Database, Zap } from "lucide-react";

const features = [
  {
    title: "Omnichannel Sync",
    description: "When a cashier sells a product in-store, e-commerce stock levels are updated instantly via the API.",
    icon: Layers,
  },
  {
    title: "Role-Based Access",
    description: "Strict JWT authentication ensures cashiers, managers, and admins only see what they are cleared for.",
    icon: ShieldCheck,
  },
  {
    title: "Headless Architecture",
    description: "The React frontend is completely decoupled from the Django database, ensuring zero downtime UI updates.",
    icon: Database,
  },
  {
    title: "Lightning Checkout",
    description: "Optimized for speed. The POS interface relies on streamlined API calls to process transactions without page reloads.",
    icon: Zap,
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-900 py-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">System Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-800 shadow-sm hover:shadow-md dark:hover:border-slate-700 transition-all duration-300">
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-slate-900 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg dark:text-slate-100">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}