import { AnimatePresence, motion } from "framer-motion";

const transitionVariants = {
  initial: { x: "100%", width: "100%" },
  animate: { x: "0%", width: "0%" },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bttom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitionVariants}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      ></motion.div>

      <motion.div
        className="fixed top-0 bttom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitionVariants}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bttom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={transitionVariants}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      ></motion.div>
    </>
  );
};

export default Transition;
