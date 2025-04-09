import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import prime from "../assets/prime.png";

const Projects = () => {
  const projects = [
    {
      title: "Prime Cart",
      tech: "React, Tailwind CSS, React Router",
      github: "https://github.com/Sherlo07/prime-cart",
      demo: "https://prime-cart-irfan.vercel.app/",
      image: prime,
    },

    {
      title: "To-Do List",
      tech: "React, Tailwind CSS, JavaScript",
      github: "https://github.com/Sherlo07/todo-list",
      demo: "https://to-do-list-irfan.vercel.app/",
      image: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      title: "Architecture IP Studios",
      tech: "React, React Router",
      github: "https://github.com/Sherlo07/architecture-ip-studios",
      demo: "https://architect-ip-studios.vercel.app/",
      image:
        "https://static.wixstatic.com/media/623888_ccbf189032f34f15a9071a78c503538f~mv2.jpg/v1/fill/w_1000,h_570,al_c,q_85,usm_0.66_1.00_0.01/623888_ccbf189032f34f15a9071a78c503538f~mv2.jpg",
    },
    {
      title: "Student Grade Calculator",
      tech: "Java (Console App)",
      github: "https://github.com/Sherlo07/student-grade-calculator",
      image:
        "https://cdn.educba.com/academy/wp-content/uploads/2019/10/Java-Projects.jpg", //add the image
    },
  ];

  return (
    <div className="w-full h-fit p-20 max-lg:mt-10 max-lg:px-10">
      <div>
        <h1 className="text-sm font-bold italic">Works</h1>
        <h1 className="font-bold text-3xl mt-3">FEATURED PROJECTS</h1>
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-[300px] w-10/12 max-lg:w-full flex flex-col max-lg:bg-neutral-50 max-lg:rounded-sm gap-4 max-lg:gap-10 p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex max-lg:flex-col h-full gap-4">
              <div className="w-[40%] max-lg:w-full">
                <h1 className="text-xs font-bold italic">{project.tech}</h1>
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <div className="flex gap-4 mt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-blue-600 flex items-center gap-1"
                    >
                      View Demo <MdArrowOutward />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-gray-700 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="w-[60%] max-lg:h-[200px] max-lg:w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
