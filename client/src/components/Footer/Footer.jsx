import { FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };
  return (
    <div className={classes.Footer}>
      <div className={classes.Icons}>
        <FaLinkedin
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          // style={{ cursor: "pointer" }}
          onClick={handleURL("https://www.linkedin.com/in/jordanm96/")}
        />
        <FaGithub
          color="white"
          size="30px"
          style={{ padding: "1%" }}
          onClick={handleURL("https://github.com/Jordanm96")}
        />
      </div>
    </div>
  );
};

export default Footer;
