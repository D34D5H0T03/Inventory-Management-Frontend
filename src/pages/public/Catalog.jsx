import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Catalog() {
  // Local state to handle category filtering before the API is connected
  const [activeCategory, setActiveCategory] = useState("All");

  // Placeholder data awaiting API connection
  const products = [
    {
      id: 1,
      name: "Fanta Orange 330ml",
      price: "1.50",
      category: "Beverages",
      stock: 45,
      image:
        "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Fresh Tomatoes (1kg)",
      price: "2.99",
      category: "Produce",
      stock: 120,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Coca Cola Zero",
      price: "1.50",
      category: "Beverages",
      stock: 85,
      image:
        "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Organic Avocados",
      price: "4.50",
      category: "Produce",
      stock: 24,
      image:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Potato Chips",
      price: "1.99",
      category: "Snacks",
      stock: 200,
      image:
        "https://images.unsplash.com/photo-1566478989037-e924e50cb0ee?auto=format&fit=crop&w=500&q=80",
    },
  ];

  const categories = [
    "All",
    "Beverages",
    "Produce",
    "Snacks",
    "Dairy",
    "Bakery",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Left Sidebar: Categories & Filters */}
      <aside className="w-full md:w-64 shrink-0 space-y-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Categories
          </h3>
          <div className="flex flex-col space-y-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white dark:bg-blue-600"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Filters
          </h3>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <Input
              type="search"
              placeholder="Filter by name..."
              className="pl-9 dark:bg-slate-900 dark:border-slate-800"
            />
          </div>
        </div>
      </aside>

      {/* Right Content: Product Grid */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {activeCategory === "All" ? "All Products" : activeCategory}
          </h2>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Showing {filteredProducts.length} items
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden flex flex-col border-slate-200 dark:border-slate-800 dark:bg-slate-900 transition-all hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-semibold text-slate-900 dark:text-white truncate pr-2 hover:underline"
                  >
                    {product.name}
                  </Link>
                  <Badge
                    variant="secondary"
                    className="dark:bg-slate-800 dark:text-slate-300"
                  >
                    ${product.price}
                  </Badge>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {product.stock} in stock
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white">
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
