import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.1}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#home">Home</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.2}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#about">About</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.3}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#skills">Skills</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.4}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#projects">Projects</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{delay: 0.5}}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <a href="/#contact">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
