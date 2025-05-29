import React, { useState } from "react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Shop from "./components/pages/Shop";
import NoPageFound from "./components/pages/NoPageFound";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { ToastContainer } from "react-toastify";
import Dashboard from "./components/pages/Dashboard";

const App = () => {
  const [username, setUsername] = useState("javeed");
  const [loading, setloading] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setUsername("adil");
  };

  const handleCounter = () => {
    setCount((count) => count + 1);
  };

  return (
    // jsx fragment
    <>
      <BrowserRouter>

      <ToastContainer position="top-left"/>


        <Navbar />

        {/* page mount and dismount */}
        <div className="main">
          <Routes>
            <Route path="*" element={<NoPageFound />} />
            <Route path="/" element={<Home username={username} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/dashboard" element={<Dashboard />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
