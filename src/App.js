import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonies from "./pages/Testimonies";
import PopularTrips from "./pages/PopularTrips";
import SingleTour from "./pages/SingleTour";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="popular-trips" element={<PopularTrips />} />
          <Route path="tours/:tourId" element={<SingleTour />} />
          <Route path="testimonies" element={<Testimonies />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
