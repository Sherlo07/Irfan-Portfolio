import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Homes = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const contactVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="w-full h-fit max-lg:h-[80vh] p-8 md:p-20 lg:p-44 max-lg:mt-20 max-lg:p-20 max-lg:px-10"
      initial="hidden"
      animate="visible"
    >
      {/* Intro Section */}
      <motion.div variants={textVariant}>
        <motion.h1
          className="text-4xl md:text-6xl tracking-wide leading-[40px] md:leading-[60px]"
          variants={textVariant}
        >
          HEY, I AM
          <br />
          <span className="font-bold tracking-wider bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
            IRFAN MOHAMMAD
          </span>
        </motion.h1>
        <motion.p
          className="pt-4 text-base md:text-xl"
          variants={{ ...textVariant, transition: { delay: 0.2 } }}
        >
          <span className="font-semibold italic">
            Full Stack Developer & Student at{" "}
          </span>
          SICET, Hyderabad
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1w2n8qE6LjZFhFk-zjDscGCIWOrJuKb6N/view?usp=sharing" // Replace with your CV link
          target="_blank"
          className="mt-10 w-fit font-medium px-6 py-2 md:px-10 md:py-3 text-xs md:text-sm bg-black text-white flex gap-2"
          variants={buttonVariant}
        >
          Download CV{" "}
          <span className="bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316] p-1">
            <MdArrowOutward />
          </span>
        </motion.a>
      </motion.div>

      {/* Contact Section */}
      <div className="flex flex-wrap gap-6 md:gap-10 mt-28">
        {[
          { icon: <CiPhone />, text: "+91 8185847964" },
          { icon: <IoMailOutline />, text: "irfanmohammad0607@gmail.com" },
        ].map((contact, index) => (
          <motion.p
            key={index}
            className="flex text-lg md:text-2xl gap-3"
            custom={index}
            variants={contactVariant}
          >
            {contact.icon}
            <span className="text-sm md:text-base font-normal">
              {contact.text}
            </span>
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default Homes;
