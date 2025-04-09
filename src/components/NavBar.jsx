import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/lo.png";

const NavBar = () => {
  const location = useLocation();

  const Menu = [
    { name: "HOME", path: "/", id: "home" },
    { name: "ABOUT", path: "/about", id: "about" },
    { name: "PROJECTS", path: "/projects", id: "projects" },
    { name: "CERTIFICATIONS", path: "/certificates", id: "certificates" },
    { name: "CONTACT", path: "/contact", id: "contact" },
  ];

  // Framer Motion variants
  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div className="w-fit h-fit fixed top-0 left-0 bg-black text-white p-8 md:p-20 flex flex-col items-center md:items-start max-md:hidden z-50">
      {/* Logo */}
      <div className="h-[30px] w-[30px]">
        <Link to="/" aria-label="Navigate to Home">
          <img
            src={logo}
            className="h-full w-full object-cover"
            alt="Irfan Logo"
          />
        </Link>
      </div>

      {/* Menu Links */}
      <motion.div
        className="pt-12 md:pt-[100px]"
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-6">
          {Menu.map((menu, index) => (
            <Link to={menu.path} key={menu.id}>
              <motion.div
                className={`font-medium hover:font-semibold cursor-pointer ${
                  location.pathname === menu.path ? "line-through" : ""
                }`}
                custom={index}
                variants={menuVariants}
              >
                {menu.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex flex-row md:flex-col pt-12 md:pt-[130px] gap-6"
        initial="hidden"
        animate="visible"
      >
        {[
          {
            Icon: FaLinkedinIn,
            link: "https://www.linkedin.com/in/irfan-mohammad0607/",
          },
          {
            Icon: FaGithub,
            link: "https://github.com/Sherlo07",
          },
          {
            Icon: FaInstagram,
            link: "https://www.instagram.com/", // Replace with your IG if available
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            className="text-base bg-white w-fit text-black p-2 rounded-full"
            href={social.link}
            target="_blank"
            rel="noreferrer"
            custom={index}
            variants={socialVariants}
          >
            <social.Icon />
          </motion.a>
        ))}
      </motion.div>

      {/* Footer */}
      <div className="pt-12 text-center md:text-left">
        <p className="text-xs">
          ©2024 Irfan Mohammad <br />
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NavBar;
