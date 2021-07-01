import './About.css';

const About = () => {
  return (
    <>
      <h3>About JAM</h3>
      <img src="https://i.imgur.com/WczcQ8E.png" alt="jordan" />
      <div>
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
          forward to applying it at a high-achieving and supportive company as a
          Software Engineer.
        </p>
        <a
          className="resume-link"
          href="https://drive.google.com/file/d/1Mhp6QpN4DESQACfMKF2g746dIuD-UvSG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </>
  );
};

export default About;
