import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/shared/ThemeProvider";
import { ShoppingBag, Search, Package2, User, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand (Click to go home) */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Package2 className="h-6 w-6 text-slate-900 dark:text-white" />
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Storefront.
          </span>
        </div>

        {/* E-Commerce Search */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Search products, SKUs, or categories..."
            className="w-full pl-9 bg-slate-50 dark:bg-slate-900 border-gray-200 dark:border-slate-800 focus-visible:ring-slate-900 dark:focus-visible:ring-slate-400 text-slate-900 dark:text-slate-100"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-300 mr-2">
            <button
              onClick={() => navigate("/catalog")}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Catalog
            </button>
            <button
              onClick={() => navigate("/catalog")}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Categories
            </button>

            {/* Global Dark Mode Toggle remains here */}

            {/* Global Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 rounded-full ml-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ShoppingBag className="h-5 w-5 text-slate-700 dark:text-slate-300" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-slate-900 dark:bg-blue-600 text-white border-none">
              0
            </Badge>
          </Button>

          {/* Linked Sign In Button */}
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="hidden sm:flex gap-2 border-gray-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <User className="h-4 w-4" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
