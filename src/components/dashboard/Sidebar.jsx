import { Link, useLocation } from "react-router-dom";
import { Package2, LayoutDashboard, Tags, ShoppingCart, Users, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const location = useLocation();

  const navLinks = [
    { name: "Overview", path: "/admin", icon: LayoutDashboard },
    { name: "Inventory", path: "/admin/inventory", icon: Tags },
    { name: "POS Terminal", path: "/admin/pos", icon: ShoppingCart },
    { name: "Staff", path: "/admin/staff", icon: Users },
    { name: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sm:flex transition-colors duration-300">
      <div className="flex h-16 items-center gap-2 border-b border-slate-200 dark:border-slate-800 px-6">
        <Package2 className="h-6 w-6 text-slate-900 dark:text-white" />
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Storefront.</span>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;
          
          return (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}