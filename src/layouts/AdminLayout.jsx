import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function AdminLayout() {
  // Check for the JWT we saved during Login
  const token = localStorage.getItem("access_token");

  // If no token exists, bounce them to the login screen immediately
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the Dashboard Shell
  return (
    <div className="flex min-h-screen w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <Sidebar />
      <div className="flex flex-col w-full sm:pl-64">
        <DashboardHeader />
        <main className="flex-1 p-6 sm:p-8">
          {/* Outlet injects the specific page content (like the Inventory Table) here */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}