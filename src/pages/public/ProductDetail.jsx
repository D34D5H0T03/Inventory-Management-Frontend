import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder data. This will be replaced by a fetch(API_URL + `/api/products/${id}`)
  const product = {
    id: id,
    name: "Fanta Orange 330ml Can",
    price: "1.50",
    category: "Beverages",
    stock: 45,
    description: "Bright, bubbly, instantly refreshing and great tasting. Fanta Orange is made with 100% natural flavors and is caffeine free.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80"
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <button 
        onClick={() => navigate("/catalog")}
        className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Catalog
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Product Image */}
        <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex items-center justify-center p-8">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover rounded-md shadow-sm"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col justify-center">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="outline" className="dark:text-slate-300 dark:border-slate-700">{product.category}</Badge>
            <span className="flex items-center text-sm text-amber-500 font-medium">
              <Star className="h-4 w-4 fill-current mr-1" /> 4.8 (124 reviews)
            </span>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            {product.name}
          </h1>
          
          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            ${product.price}
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-4 mb-8 border-y border-slate-200 dark:border-slate-800 py-6">
            <Button size="lg" className="flex-1 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white h-14 text-lg gap-3">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <div className="flex flex-col items-center justify-center px-6 border-l border-slate-200 dark:border-slate-800">
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">In Stock</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{product.stock} available</span>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-slate-400" />
              Free shipping on local orders over $50
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-slate-400" />
              100% freshness guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}