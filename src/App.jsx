// src/App.jsx
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";

const Aboutus = React.lazy(()=> import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="about" 
        element={
          <Suspense fallback={<div>Loading About page...</div>}>
            <Aboutus/>
            </Suspense>
        } />
        
        
        <Route path="contact"
          element={
            <Suspense fallback={<div>Loading Contact Page...</div>}>
              <Contact />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;