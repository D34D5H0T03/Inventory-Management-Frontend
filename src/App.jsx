import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardOverview from "@/pages/admin/DashboardOverview";

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
import ProductDetail from "@/pages/public/ProductDetail";
import Catalog from "@/pages/public/Catalog";
import Checkout from "@/pages/public/Checkout";
import OrderConfirmation from "@/pages/public/OrderConfirmation";

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
          <Route
            path="/"
            element={
              <PublicLayout>
                <Hero />
                <FeatureGrid />
              </PublicLayout>
            }
          />
          <Route
            path="/catalog"
            element={
              <PublicLayout>
                <Catalog />
              </PublicLayout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <PublicLayout>
                <ProductDetail />
              </PublicLayout>
            }
          />
          <Route
            path="/checkout"
            element={
              <PublicLayout>
                <Checkout />
              </PublicLayout>
            }
          />
          <Route
            path="/order-confirmation"
            element={
              <PublicLayout>
                <OrderConfirmation />
              </PublicLayout>
            }
          />
          <Route path="/login" element={<Login />} />

          {/* SECURE ADMIN ROUTES */}
          <Route path="/admin" element={<AdminLayout />}>
            {/* The index route automatically renders when you visit /admin */}
            <Route index element={<DashboardOverview />} />

            <Route
              path="inventory"
              element={
                <h2 className="text-3xl font-bold dark:text-white">
                  Inventory Module
                </h2>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
