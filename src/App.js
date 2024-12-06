import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartWindow from "./components/CartWindow";
import CheckoutPage from "./components/CheckoutPage";

const AppLayout = lazy(() => import("./Layouts/AppLayout/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const NearbyVendors = lazy(() => import("./pages/NearbyVendors/NearbyVendors"));
const TrendingProducts = lazy(() => import("./pages/TrendingProducts/TrendingProducts"));
const Categories = lazy(() => import("./components/Categories"));
const ProductsPage = lazy(() => import("./components/ProductsPage"));
 

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-w-[1024px] relative">
      <Suspense fallback={fb()}>
        <Router>
          <Routes>
            <Route path="/" element={<AppLayout setIsCartOpen={setIsCartOpen} />}>
              <Route index element={<Home />} />
              <Route path="nearby-vendors" element={<NearbyVendors />} />
              <Route path="trending-products" element={<TrendingProducts />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="categories" element={<Categories />} /> This should be inside AppLayout
              <Route path="products/:categoryId" element={<ProductsPage />} />
            </Route>
          </Routes>

          {isCartOpen && <CartWindow onClose={() => setIsCartOpen(false)} />}
        </Router>
      </Suspense>
    </div>
  );
};

function fb() {
  return (
    <h1 className="h-screen flex justify-center items-center text-2xl">
      Loading...
    </h1>
  );
}

export default App;
