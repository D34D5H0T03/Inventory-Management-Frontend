import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function StatCard({ title, value, icon: Icon, trend, trendLabel }) {
  return (
    <Card className="border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-sm transition-all duration-200 hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-4 w-4 text-slate-400 dark:text-slate-500" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900 dark:text-white">{value}</div>
        
        {/* Only render the trend if a trend prop is actually passed in */}
        {trend !== undefined && (
          <p className={cn(
            "text-xs mt-1 font-medium flex items-center",
            trend > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"
          )}>
            {trend > 0 ? "+" : ""}{trend}%
            <span className="text-slate-500 dark:text-slate-400 font-normal ml-1">
              {trendLabel}
            </span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}