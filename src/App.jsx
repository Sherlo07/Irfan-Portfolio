import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Homes from "./components/Homes";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
import MobileFooter from "./components/MobileFooter";

function App() {
  return (
    <Router>
      <div className="w-screen h-fit flex max-lg:flex-col overflow-x-hidden">
        {/* Sidebar for Desktop */}
        <div className="w-[17%] max-lg:hidden">
          <NavBar />
        </div>

        {/* Mobile Navbar */}
        <div className="lg:hidden">
          <MobileNav />
        </div>

        {/* Page Content */}
        <div className="w-[83%] max-lg:w-full">
          <Routes>
            <Route path="/" element={<Homes />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Mobile Footer */}
        <div className="lg:hidden">
          <MobileFooter />
        </div>
      </div>
    </Router>
  );
}

export default App;
