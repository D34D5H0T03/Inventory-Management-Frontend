import StatCard from "@/components/dashboard/StatCard";
import { DollarSign, Package, AlertCircle, Users } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Dashboard Overview
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Here is what is happening in your store today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          icon={DollarSign} 
          trend={20.1} 
          trendLabel="from last month" 
        />
        <StatCard 
          title="Active Cashiers" 
          value="12" 
          icon={Users} 
        />
        <StatCard 
          title="Total Products" 
          value="1,204" 
          icon={Package} 
        />
        <StatCard 
          title="Low Stock Alerts" 
          value="8" 
          icon={AlertCircle} 
          trend={-14} 
          trendLabel="resolved since yesterday" 
        />
      </div>

      {/* Placeholder for the upcoming Inventory Table */}
      <div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-12 text-center border-dashed">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          Django API Inventory Data Grid will render here.
        </p>
      </div>
    </div>
  );
}