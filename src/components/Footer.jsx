import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-6 border-t mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Irfan Mohammad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
