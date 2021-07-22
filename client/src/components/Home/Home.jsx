import classes from "./Home.module.css";
import { motion } from "framer-motion";
import aztecs from './../../img/aztecs.png';
import binary from "./../../img/binary.svg";

const Home = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div className={classes.Home} id='home'  initial="hidden"
    animate="visible"
    transition={{ duration: 3 }}
    variants={variants}>
    {/* <img className={classes.Background} src={nasa} alt='background'/> */}

      <div className={classes.Container}>
        <h1 className={classes.Hello}>Welcome!</h1>
        <h1>My name is Jordan Montero,<br></br> and I'm a full stack developer.</h1>
      </div>
      <img className={classes.Right} src={binary} alt='childhood'/>
      <img className={classes.Aztecs} src={aztecs} alt='aztecs'/>
    </motion.div>
  );
};

export default Home;
