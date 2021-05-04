import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Home.css";
const Home = () => {
  return (
    <>
      <nav>
        <h1> <a href="#home">Jordan</a></h1>
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
      <div className='body'>

      <section id="home">
        <h2>Welcome,</h2>
        <h2>My name is Jordan Anthony Montero.</h2>
        <h2>Nice to meet you!</h2>
      </section>
      <section id="about">
        <h3>About JAM</h3>
        <img src="https://i.imgur.com/Ey5DhH3.jpg" alt="jordan" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section id="projects">
        <h3>Projects</h3>
        <CarouselContainer />
        {/* Insert carousel component here with 3 images
      clickable links to each project */}
      </section>
      <section id="contact">
        <h3>Contact Me!</h3>
        <div className="contact-container">
          <div className="contact-info">
            <h4>Contact Info</h4>
            <img src="https://i.imgur.com/Ey5DhH3.jpg" alt="jordan" />
            <p>Phone: 916-698-0989</p>
            <p>Email: jordmontero96@gmail.com</p>
            <p>Location: San Diego, CA</p>
          </div>
          <div className="contact-form">
            <h4>Let's work together!</h4>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Message" />
            <button>Send</button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
