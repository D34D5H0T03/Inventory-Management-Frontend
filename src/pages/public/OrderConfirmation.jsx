import { useNavigate } from "react-router-dom";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function OrderConfirmation() {
  const navigate = useNavigate();
  // Generate a random order number for the template
  const orderNumber = `ORD-${Math.floor(10000 + 0.3 * 90000)}`;

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <Card className="max-w-lg w-full text-center border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-xl overflow-hidden">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 flex justify-center border-b border-emerald-100 dark:border-emerald-900/50">
          <CheckCircle2 className="h-20 w-20 text-emerald-500" />
        </div>
        
        <CardContent className="p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Order Confirmed!</h1>
            <p className="text-slate-600 dark:text-slate-400">
              Thank you for your purchase. We're processing your order right now.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-lg flex items-center justify-between border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
              <Package className="h-5 w-5 text-slate-400" />
              <span className="font-medium">Order Number:</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white">{orderNumber}</span>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            We've sent a confirmation email to you with the order details and a tracking link.
          </p>

          <div className="pt-4 flex flex-col gap-3">
            <Button onClick={() => navigate("/catalog")} className="w-full h-12 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white">
              Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}