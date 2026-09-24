import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Shared Infrastructure
import { ThemeProvider } from "@/components/shared/ThemeProvider";

// 2. Layouts
import AdminLayout from "@/layouts/AdminLayout";

// 3. Storefront Components
import Navbar from "@/components/storefront/Navbar";
import Hero from "@/components/storefront/Hero";
import FeatureGrid from "@/components/storefront/FeatureGrid";

// 4. Pages
import Login from "@/pages/public/Login";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<PublicLayout><Hero /><FeatureGrid /></PublicLayout>} />
          <Route path="/login" element={<Login />} />

          {/* SECURE ADMIN ROUTES */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight dark:text-white">Dashboard Overview</h2>
                <p className="dark:text-slate-400">Welcome to the secure administrative portal.</p>
              </div>
            } />
            <Route path="inventory" element={<h2 className="text-3xl font-bold dark:text-white">Inventory Module</h2>} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}