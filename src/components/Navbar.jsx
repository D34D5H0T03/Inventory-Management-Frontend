import { ShoppingBag, Search, Package2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Package2 className="h-6 w-6 text-slate-900" />
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Storefront.
          </span>
        </div>

        {/* E-Commerce Search */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            type="search" 
            placeholder="Search products, SKUs, or categories..." 
            className="w-full pl-9 bg-slate-50 border-gray-200 focus-visible:ring-slate-900"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-gray-600 mr-4">
            <a href="#" className="hover:text-slate-900">Catalog</a>
            <a href="#" className="hover:text-slate-900">Categories</a>
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5 text-slate-700" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-slate-900">
              3
            </Badge>
          </Button>
          
          <Button variant="outline" className="hidden sm:flex gap-2 border-gray-200">
            <User className="h-4 w-4" />
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}