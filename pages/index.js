import ProjectsBtn from "../components/ProjectsBtn";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Avatar from "../components/Avatar";
import Transition from "../components/Transition";
import ParticlesContainer from "../components/ParticlesContainer";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      <div className="h-full flex flex-col text-center justify-center xl:px-36 ">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="lg:mt-10 text-4xl xl:text-6xl font-bold leading-relaxed md:leading-normal xl:leading-normal xl:text-left"
        >
          Building Fast Dynamic Web
          <br />
          Apps with
          <span className="text-accent font-semibold"> Next.js</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-[500px] self-center my-6 xl:text-left xl:self-start"
        >
          Specializing in Next.js, I craft fast, dynamic web applications
          tailored to your needs. Focusing on performance and user experience, I
          transform ideas into robust digital solutions.
        </motion.p>
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>

      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right w-full h-full xl:bg-no-repeat absolute mix-blend-color-dodge translate-z-0  right-0 bottom-0"></div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
