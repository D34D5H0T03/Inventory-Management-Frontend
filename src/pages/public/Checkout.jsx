import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Banknote, ShieldCheck } from "lucide-react";

export default function Checkout() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Hardcoded for template visualization
  const subtotal = 5.99;
  const shipping = 2.0;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // In the future, this is where we send the POST request to Django
    // For now, bypass straight to confirmation
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        Secure Checkout
      </h1>

      <form
        onSubmit={handlePlaceOrder}
        className="flex flex-col lg:flex-row gap-8"
      >
        {/* Left Column: Forms */}
        <div className="flex-1 space-y-8">
          {/* Shipping Details */}
          <Card className="border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    className="dark:bg-slate-950"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required className="dark:bg-slate-950" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" required className="dark:bg-slate-950" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required className="dark:bg-slate-950" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" required className="dark:bg-slate-950" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Selection (UI Only) */}
          <Card className="border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">Payment Method</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg transition-colors ${
                    paymentMethod === "card"
                      ? "border-slate-900 bg-slate-50 dark:border-blue-500 dark:bg-blue-950/30 text-slate-900 dark:text-white"
                      : "border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <CreditCard className="h-6 w-6 mb-2" />
                  <span className="font-medium">Credit Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cash")}
                  className={`flex flex-col items-center justify-center p-4 border rounded-lg transition-colors ${
                    paymentMethod === "cash"
                      ? "border-slate-900 bg-slate-50 dark:border-blue-500 dark:bg-blue-950/30 text-slate-900 dark:text-white"
                      : "border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <Banknote className="h-6 w-6 mb-2" />
                  <span className="font-medium">Cash on Delivery</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <Card className="border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-sm sticky top-24">
            <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <CardTitle className="text-lg">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {/* Item row */}
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Fanta Orange 330ml (x2)
                </span>
                <span className="font-medium dark:text-slate-200">$3.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">
                  Fresh Tomatoes (1kg) (x1)
                </span>
                <span className="font-medium dark:text-slate-200">$2.99</span>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="font-medium dark:text-slate-200">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Shipping</span>
                  <span className="font-medium dark:text-slate-200">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 flex justify-between items-center">
                <span className="text-base font-bold dark:text-white">
                  Total
                </span>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  ${total.toFixed(2)}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white h-12"
              >
                Place Order
              </Button>
              <p className="flex items-center justify-center text-xs text-slate-500 gap-1">
                <ShieldCheck className="h-4 w-4" /> Secure, encrypted checkout.
              </p>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}
