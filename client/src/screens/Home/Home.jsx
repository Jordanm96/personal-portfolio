import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import emailjs from 'emailjs-com';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_ztxdzzc', 'template_jpbj7xe', e.target, 'user_tEvYRnL11rnYad3rkbySz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }
  return (
    <>
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
          <h2>My name is Jordan Anthony Montero.</h2>
          <h2>Nice to meet you!</h2>
        </section>
        <section id="about">
          <h3>About JAM</h3>
          <img src="https://i.imgur.com/Ey5DhH3.jpg" alt="jordan" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            {/* RIGHT NOW THIS IS ONLY LINKING TO GOOGLE
            IT NEEDS TO LINK TO A PDF OF MY RESUME */}
            <a
              className="resume-link"
              href="google.com"
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
                <p>Location: San Diego, CA</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            <h4>Let's work together!</h4>
            <form onSubmit={sendEmail}>
              <input type='text' name='subject' placeholder="Subject" />
              <input type='text' name='name' placeholder="Name" />
              <textarea rows={8} type='text' name='message' placeholder="Message" />
              <input type='text' name='email' placeholder="Email" />
              <button>Send</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
