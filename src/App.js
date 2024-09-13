// src/App.js
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppLayout = lazy(() => import("./Layouts/AppLayout/AppLayout"));
const Home = lazy(() => import("./pages/Home"));
const NearbyVendors = lazy(() => import("./pages/NearbyVendors/NearbyVendors"));

const App = () => {
  return (
    <>
      <div className="min-w-[1024px]">
        <Suspense fallback={fb()}>
          <Router>
            <Routes>
              {/* Home Route */}
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path="nearby-vendors" element={<NearbyVendors />} />
              </Route>
              {/* Add more routes as needed */}
            </Routes>
          </Router>
        </Suspense>
      </div>
    </>
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
