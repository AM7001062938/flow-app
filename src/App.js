// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./Layouts/AppLayout/AppLayout";

const App = () => {
  return (
    <>
      <div className="min-w-[1024px]">
        <Router>
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
            </Route>
            {/* Add more routes as needed */}
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
