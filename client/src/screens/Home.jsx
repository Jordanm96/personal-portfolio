import Welcome from "../components/Welcome/Welcome";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <center>
      <nav>
        <h1>
          {" "}
          <a className="logo" href="#home">
            JAM
          </a>
        </h1>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="body">
        <Welcome />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </center>
  );
};

export default Home;
