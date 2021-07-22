import PageHeader from "../PageHeader/PageHeader";
import classes from "./Projects.module.css";
import groupRun from "./../../img/groupRun.png";
import hulu from "./../../img/hulu.png";
import imaMiru from "./../../img/imaMiru.jpg";
import tetris from "./../../img/tetris.png";
import tomatoes from "./../../img/tomatoes.png";
// Find a background image for the projects and import it here as
// import background from "./../../img/background.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

// url will e replaced with the links to the app and the github code
const createProjectCard = (
  title,
  thumbnail,
  description,
  tech,
  link,
  github
) => {
  return (
    <div className={classes.ProjectContainer}>
      <div className={classes.Thumbnail}>
        <p className={classes.Title}>{title}</p>
        <a href={link}>
          <img src={thumbnail} alt="thumbnail" />
        </a>
        <div className={classes.Links}>
          <a href={link}>Deployed Site</a>
          <a href={github}>Code</a>
        </div>
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
        <p><strong>Built Using:{" "}</strong>{tech}</p>
      </div>
    </div>
  );
};
const groupRunTitle = "Group Run";
const huluTitle = "Hulu Clone";
const imaMiruTitle = "Ima Miru";
const tetrisTitle = "Tetris";
const tomatoesTitle = "Fresh Tomatoes";
const groupRunDescription = `Group Run is an application that allows users to enter in and keep track of their runs/jogs. Each entry is tracked on the homepage users may view their progress and compare their stats with others.`;
const huluDescription = `This app is an attempt to recreate similar features from the Hulu main screen using Next.js and Tailwind CSS. This clone is a single screen application that displays a wide range of movies taken from the TMDB API.`;
const imaMiruDescription = `Ima Miru (which translates to 'watch now' in Japanese) is an application where users can browse various anime shows and their corresponding descriptions. Users may also save shows of interest in a section called Watchlist. The Watchlist varies per user and lists out any show that user has saved to watch later.`;
const tetrisDescription = `Using styled components with React, I was able to bring the game to life with accurate shapes and colors. Play the game by lining up tetrominos in rows to get points. The game is over when a block gets jammed at the top!`;
const tomatoesDescription = `Fresh Tomatoes (inspired by rotten tomatoes) is an application that allows users to access a list of movies with reviews written by the users themselves. Help others decide which movie to watch by adding your own favorite movies, and reviews to movies on the app.`;
const groupRunTech = "React, Javascript, CSS, Airtable";
const huluTech = "Next.js, Javascript, Tailwind CSS, TMDB API";
const imaMiruTech = "React, Javascript, CSS, Express, MongoDB";
const tetrisTech = "React, Javascript, Styled Components";
const tomatoesTech = "React, Javascript, CSS, Postgresql, Ruby on Rails";
const groupRunLink = "https://group-run-0f92c7.netlify.app/";
const huluLink = "https://hulu-clone-6kdnqpb1j-jordanm96.vercel.app/";
const imaMiruLink = "https://ima-miru.netlify.app/";
const tetrisLink = "http://tetris-j.surge.sh/";
const tomatoesLink = "https://fresh-tomatoes.netlify.app/";
const groupRunGit = "https://github.com/Jordanm96/Group-Run";
const huluGit = "https://github.com/Jordanm96/hulu-clone";
const imaMiruGit = "https://github.com/Jordanm96/ima-miru";
const tetrisGit = "https://github.com/Jordanm96/tetris";
const tomatoesGit = "https://github.com/Jordanm96/fresh-tomatoes";

const Projects = () => {
  // By assigning ref to a div, we trigger the use effect whenever that div comes into view of the screen.
  // This is so the animation does not occur until the projects are "inView"
  const { ref, inView } = useInView({
    // This threshold adjusts the inView effect so that it does not get triggered until it hits the projects instead of the header
    threshold: 0.05,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
    console.log("use effect hook, inView = ", inView);
  }, [inView, animation]);

  return (
    <div className={classes.Projects} id="projects">
      <PageHeader title={"Projects"} />
      <div ref={ref} className={classes.ProjectsContent}>
        <div className={classes.Paragraph}>
          <p>Here are some of the recent applications I've created:</p>
        </div>
        <motion.div className={classes.Cards} animate={animation}>
          {/* Call the function here which will display thumbnail */}
          {createProjectCard(
            tomatoesTitle,
            tomatoes,
            tomatoesDescription,
            tomatoesTech,
            tomatoesLink,
            tomatoesGit
          )}
          {createProjectCard(
            imaMiruTitle,
            imaMiru,
            imaMiruDescription,
            imaMiruTech,
            imaMiruLink,
            imaMiruGit
          )}
          {createProjectCard(
            tetrisTitle,
            tetris,
            tetrisDescription,
            tetrisTech,
            tetrisLink,
            tetrisGit
          )}
          {createProjectCard(
            huluTitle,
            hulu,
            huluDescription,
            huluTech,
            huluLink,
            huluGit
          )}
          {createProjectCard(
            groupRunTitle,
            groupRun,
            groupRunDescription,
            groupRunTech,
            groupRunLink,
            groupRunGit
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
