import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

export default function CartSheet() {
  // Hardcoded for template visualization. Later, this will be powered by React Context or Redux.
  const cartItems = [
    {
      id: 1,
      name: "Fanta Orange 330ml",
      price: 1.5,
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "Fresh Tomatoes (1kg)",
      price: 2.99,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=100&q=80",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <ShoppingBag className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-slate-900 dark:bg-blue-600 text-white border-none">
            3
          </Badge>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col w-full sm:max-w-lg dark:bg-slate-950 dark:border-slate-800 border-l border-slate-200">
        <SheetHeader className="pb-6 border-b border-slate-200 dark:border-slate-800">
          <SheetTitle className="text-2xl font-bold dark:text-white flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {/* Cart Items Area */}
        <div className="flex-1 overflow-y-auto py-6 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="h-20 w-20 rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm line-clamp-2 pr-4">
                    {item.name}
                  </h3>
                  <p className="font-medium text-slate-900 dark:text-white">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-md">
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                      <Minus className="h-3 w-3 dark:text-white" />
                    </button>
                    <span className="text-sm font-medium w-8 text-center dark:text-white">
                      {item.qty}
                    </span>
                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                      <Plus className="h-3 w-3 dark:text-white" />
                    </button>
                  </div>
                  <button className="text-slate-400 hover:text-red-500 transition text-sm flex items-center gap-1">
                    <Trash2 className="h-4 w-4" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Footer */}
        <SheetFooter className="flex-col border-t border-slate-200 dark:border-slate-800 pt-6 space-y-4 sm:space-y-4 sm:space-x-0">
          <div className="flex justify-between text-lg font-medium text-slate-900 dark:text-white">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Shipping and taxes calculated at checkout.
          </p>

          <SheetClose asChild>
            <Button
              onClick={() => navigate("/checkout")}
              className="w-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white h-12 text-lg"
            >
              Proceed to Checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
