import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader";
import Me from "./../../img/jordan.png";

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={"About Me"} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Nice to meet you!</h2>
          <p>
          I am an innovative Software Engineer with a passion for
          problem-solving that drives me to create high quality applications
          that are instinctively user-friendly. I work well on a team, yet I’m a
          motivated self-starter and quick learner. My degree in Psychology
          gives me insight into human behavior, enabling me to work well with
          all personality types and form strong relationships with peers,
          coworkers, and clients. Years of work in the restaurant industry honed
          my strong people-facing skills and gave me experience in a fast-paced
          environment. I’ve been commended for my impressive work ethic and look
          forward to applying it at a high-achieving and supportive company!
          </p>
          <a
            className={classes.Resume}
            href="https://drive.google.com/file/d/1Q3ZrREY_vk_wTOsLe8ZKGKgfXTgpgwmM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={Me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
