import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificatesList = [
    {
      id: "python-basic",
      name: "Python (Basic)",
      issued: "HackerRank",
      URL: "https://www.hackerrank.com/certificates/1bf51ea13ccf", // From your resume
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    },
    {
      id: "java-basic",
      name: "Java (Basic)",
      issued: "HackerRank",
      URL: "https://drive.google.com/file/d/18OZSX0hpUMr42mlzZTV49bW_z1YjhoKQ/view?usp=sharing", // From your resume
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    },

    {
      id: "talentbattle-dsa",
      name: "Data Structures & Algorithms in Java (20 Hours)",
      issued: "Talent Battle",
      URL: "https://drive.google.com/file/d/1VQyU7yHE_oDfHOWszFEV9dq9ov9oTOBZ/view?usp=sharing", // Placeholder, update with correct link
      logo: "https://pbs.twimg.com/profile_images/1657950861790091265/Q0lf2r0P_400x400.jpg", // Sample logo
    },
    {
      id: "hackathon",
      name: "Brain-O-Vison 5-days Workshop",
      issued: "Brain-O-Vison",
      URL: "https://drive.google.com/file/d/12HDLhha9IDISCU3-gn1LCLqxQck88Fd2/view?usp=sharing", // Placeholder, update with correct link
      logo: "https://pbs.twimg.com/profile_images/1657950861790091265/Q0lf2r0P_400x400.jpg", // Sample logo
    },
    {
      id: "flipkart-quiz",
      name: "Flipkart Grid 6.0 - E-Commerce Quiz",
      issued: "Flipkart / Unstop",
      URL: "https://media.licdn.com/dms/image/v2/D5622AQHbkeplYuZ9xQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1724769480112?e=1747267200&v=beta&t=hGxdkW6A2CRwNtNDSlXeM5eW7PPytTVMg9Gdg9B3I2M", // Placeholder, update with correct link
      logo: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
    },
    {
      id: "codsoft-java-internship",
      name: "Java Programming Internship",
      issued: "Codsoft",
      URL: "https://drive.google.com/file/d/1PhzmDSvyT2aA3o4trB_Zcru3REk6_9eH/view?usp=sharing", // Placeholder
      logo: "https://media.licdn.com/dms/image/C560BAQEy5ZnXYj4EUg/company-logo_200_200/0/1661514696746/codsoft_logo?e=2147483647&v=beta&t=iUATITqdbb0YznKnqNF5kqFuBuhhh5m5x8pV4Bgk-NA",
    },

    {
      id: "web-dev-bharat",
      name: "Web Development Internship",
      issued: "Bharat Intern",
      URL: "https://drive.google.com/file/d/1531ZYM8W1K5FCui1c4ZjywW-cg1n0DTo/view?usp=sharing", // Placeholder
      logo: "https://bharatintern.live/assets/logo.png",
    },
  ];

  return (
    <div className="w-full h-fit p-20 max-lg:px-10 bg-white max-lg:mt-10">
      <div>
        <h1 className="text-sm font-bold italic">Achievements</h1>
        <h1 className="font-bold text-3xl mt-3">CERTIFICATIONS</h1>
      </div>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 mt-10">
        {certificatesList.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            className="flex flex-col items-start gap-4 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={certificate.logo}
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://via.placeholder.com/60?text=Logo")
                }
                alt={`${certificate.issued} Logo`}
                className="w-16 h-16 object-contain rounded-full bg-gray-50 p-1"
              />
              <div>
                <h1 className="text-lg font-bold">{certificate.name}</h1>
                <h2 className="text-sm text-gray-500">
                  Issued by {certificate.issued}
                </h2>
              </div>
            </div>
            <a
              href={certificate.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-blue-600 flex items-center gap-2 font-medium hover:underline"
            >
              <span>View Certificate</span>
              <MdArrowOutward />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
