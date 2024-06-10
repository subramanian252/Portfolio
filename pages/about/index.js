// icons
"use client";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        id: 1,
        icons: [
          // eslint-disable-next-line react/jsx-key
          <FaHtml5 />,
          // eslint-disable-next-line react/jsx-key
          <FaCss3 />,
          // eslint-disable-next-line react/jsx-key
          <FaJs />,
          // eslint-disable-next-line react/jsx-key
          <FaReact />,
          // eslint-disable-next-line react/jsx-key
          <SiNextdotjs />,
          // eslint-disable-next-line react/jsx-key
          <SiFramer />,
        ],
      },
      {
        title: "UI/UX Design",
        // eslint-disable-next-line react/jsx-key
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "IGNOU | BCA",
        stage: "2019 - 2021",
      },
      {
        title: "Image Creative Education | Diploma in VFX",
        stage: "2019 - 2020",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Fiverr | Freelance Services",
        stage: "2020 - current",
      },
      {
        title: "Upwork | World's Work Marketplace",
        stage: "2024 - current",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Tensorflow Certified Developer",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="z-[100] h-full">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="w-[600px] h-[600px] absolute -left-72 -bottom-14"
      >
        <Avatar />
      </motion.div>
      <div className="w-full flex lg:flex-row flex-col justify-start gap-y-6 lg:justify-center lg:mt-48 mt-32 items-start lg:px-36   px-0">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col justify-start items-start lg:-mt-4 mt-3 gap-y-6 lg:max-w-none max-w-[700px] mx-auto "
        >
          <h1 className="lg:text-6xl lg:text-left text-center text-3xl font-bold leading-normal lg:leading-[75px] w-full">
            Transforming{" "}
            <span className="text-accent font-medium">Stories</span>
            <br />
            into Stunning websites
          </h1>
          <p className="text-white/60 lg:text-left text-center px-2 lg:px-0">
            4 years ago, I began freelancing as a Developer and Colorist. Since
            Then I &apos;ve done remote work for agencies, consulted startups
            and colloborated on digital products for business and consumer
          </p>
          <div className=" gap-x-6 lg:flex hidden">
            <div className="flex items-center gap-x-0 w-[130px]">
              <div className="flex flex-col">
                <h1 className="text-accent font-bold text-4xl mb-2">4+</h1>
                <p className="font-semibold text-sm uppercase text-white/80">
                  Years of experience
                </p>
              </div>
              <div className="w-[1.5px] h-[80px] bg-white/10"></div>
            </div>

            <div className="flex items-center gap-x-0 w-[130px] ">
              <div className="flex flex-col">
                <h1 className="text-accent font-bold text-4xl mb-2">100+</h1>
                <p className="font-semibold text-sm uppercase text-white/80">
                  Satisfied Clients
                </p>
              </div>
              <div className="w-[1.5px] h-[80px] bg-white/10"></div>
            </div>
            <div className="flex items-center gap-x-0 w-[130px]">
              <div className="flex flex-col">
                <h1 className="text-accent font-bold text-4xl mb-2">200+</h1>
                <p className="font-semibold text-sm uppercase text-white/80">
                  Finished Projects
                </p>
              </div>
              <div className="w-[1.5px] h-[80px] bg-white/10"></div>
            </div>
            <div className="flex items-center gap-x-0 w-[130px]">
              <div className="flex flex-col">
                <h1 className="text-accent font-bold text-4xl mb-2">150+</h1>
                <p className="font-semibold text-sm uppercase text-white/80">
                  5 star <br /> reviews
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="w-[450px]  flex flex-col gap-y-4 justify-between mx-auto lg:mx-0 gap-x-2  "
        >
          <div className="flex gap-x-4 items-center lg:justify-between justify-around z-[200]">
            {aboutData.map((data, i) => (
              <div
                key={i}
                onClick={() => {
                  setIndex(i);
                }}
              >
                <div className="capitalize cursor-pointer">{data.title}</div>
                <div
                  className={`mt-2 h-[5px] transition-all duration-30 ${
                    index === i ? "bg-accent w-full" : "bg-white/80 w-[30px]"
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-3 mt-2 self-center lg:self-start">
            {aboutData[index].info.map((info, i) => (
              <div
                key={i}
                className="flex lg:flex-row flex-col gap-x-2 lg:items-center lg:justify-start"
              >
                <p className="text-white/80 text-base mb-2 text-center lg:text-left lg:text-lg">
                  {info.title} -{" "}
                  <span className="text-accent/60">{info?.stage}</span>
                </p>

                {info?.icons && (
                  <div className="flex items-center gap-x-2 justify-center lg:justify-start">
                    {info?.icons?.map((icon, i) => (
                      <p key={i} className="text-xl text-white/80">
                        {icon}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
