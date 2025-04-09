import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className="h-auto w-screen bg-neutral-950 text-gray-300 px-10 py-16">
      {/* Explore Section */}
      <div className="mb-6 pb-5 border-gray-400 border-b">
        <h1 className="text-xl font-bold mb-2">Explore</h1>
        <div className="flex text-sm flex-col gap-2">
          <a href="/" className="hover:text-white">
            Home
          </a>
          <a href="/about" className="hover:text-white">
            About
          </a>
          <a href="/projects" className="hover:text-white">
            Projects
          </a>
          <a href="/certificates" className="hover:text-white">
            Certifications
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-2">Follow Me</h1>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/irfan-mohammad0607/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-white"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Sherlo07"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/your_instagram_username" // Replace if needed
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center">
        <p className="text-xs">©2024 Irfan Mohammad. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MobileFooter;
