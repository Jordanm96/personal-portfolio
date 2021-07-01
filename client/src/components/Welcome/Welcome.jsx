import { motion } from "framer-motion";
import "./Welcome.css";

const Welcome = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div>
      <motion.section
        id="home"
        initial="hidden"
        animate="visible"
        transition={{ duration: 4 }}
        variants={variants}
      >
        <h2>Welcome</h2>
        <h2>My name is Jordan Anthony Montero</h2>
        <h2>Nice to meet you!</h2>
      </motion.section>
    </div>
  );
};

export default Welcome;
