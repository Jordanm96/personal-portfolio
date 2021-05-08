import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import emailjs from "emailjs-com";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Home.css";
import resume from '../../assets/SE_Resume.pdf';
// import '../../profile.jpg';
const Home = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ztxdzzc",
        "template_jpbj7xe",
        e.target,
        "user_tEvYRnL11rnYad3rkbySz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <center>
      <nav>
        <h1>
          {" "}
          <a href="#home">Jordan</a>
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
        <section id="home">
          <h2>Welcome,</h2>
          <h2>My name is Jordan Anthony Montero</h2>
          <h2>Nice to meet you!</h2>
        </section>
        <section id="about">
          <h3>About JAM</h3>
          <img src="https://i.imgur.com/Ey5DhH3.jpg" alt="jordan" />
          <div>
            <p>
              I am an innovative Software Engineer with a passion for
              problem-solving that drives me to create high quality applications
              that are instinctively user-friendly. I work well on a team, yet
              I’m a motivated self-starter and quick learner. My degree in
              Psychology gives me insight into human behavior, enabling me to
              work well with all personality types and form strong relationships
              with peers, coworkers, and clients. Years of work in the
              restaurant industry honed my strong people-facing skills and gave
              me experience in a fast-paced environment. I’ve been commended for
              my impressive work ethic and look forward to applying it at a
              high-achieving and supportive company as a Software Engineer.
            </p>
            {/* RIGHT NOW THIS IS ONLY LINKING TO facebook
            IT NEEDS TO LINK TO A PDF OF MY RESUME */}
            <a
              className="resume-link"
              href='https://facebook.com'
              target="_blank"
              rel="noopener noreferrer"
            >
              Resumé
            </a>
          </div>
        </section>
        <section id="projects">
          <h3>Projects</h3>
          <CarouselContainer />
        </section>

        <section id="contact">
          <h3>Contact Me!</h3>
          <div className="contact-info-container">
            <h4>Contact Info</h4>
            <div className="info">
              <img src="https://i.imgur.com/Ey5DhH3.jpg" alt="jordan" />
              <div className="number-email-loc">
                <p>Phone: 916-698-0989</p>
                <p>Email: jordmontero96@gmail.com</p>
                <div className="info-links">
                  <a
                    href="https://www.linkedin.com/in/jordanm96/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/Jordanm96"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <p>Location: San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h4>Let's connect!</h4>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <input type="text" name="name" placeholder="Name" required />
              <input type="text" name="email" placeholder="Email" required />
              <textarea
                rows={8}
                type="text"
                name="message"
                placeholder="Message"
                required
              />
              <Button variant="light" type="submit">
                Send
              </Button>
              {/* <button>Send</button> */}
            </form>
          </div>
        </section>
      </div>
    </center>
  );
};

export default Home;
