import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Package2, Loader2 } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Invalid credentials");
      }

      // Hackers check localStorage for JWTs. Storing them here is standard for SPAs, 
      // though more advanced setups use HTTP-only cookies.
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      // Redirect to a placeholder dashboard (we will build this later)
      navigate("/dashboard");
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 transition-colors duration-300">
      
      {/* Brand Logo */}
      <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => navigate("/")}>
        <Package2 className="h-8 w-8 text-slate-900 dark:text-white" />
        <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Storefront.
        </span>
      </div>

      <Card className="w-full max-w-md border-gray-200 dark:border-slate-800 shadow-lg dark:bg-slate-900">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold dark:text-white">Welcome back</CardTitle>
          <CardDescription className="dark:text-gray-400">
            Enter your credentials to access the POS terminal
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            
            {/* Error Message Display */}
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-md border border-red-200 dark:border-red-800">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="username" className="dark:text-slate-300">Username</Label>
              <Input 
                id="username" 
                type="text" 
                placeholder="bob_cashier"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="dark:bg-slate-950 dark:border-slate-700 dark:text-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="dark:text-slate-300">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="dark:bg-slate-950 dark:border-slate-700 dark:text-white"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Authenticating...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-center border-t border-gray-100 dark:border-slate-800 pt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Authorized personnel only.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}