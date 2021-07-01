import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import './Contact.css';

const Contact = () => {
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
  function sent() {
    alert("Sent!");
  }
  return (
    <>
      <h3>Contact Me!</h3>
          <div className="contact-info-container">
            <h4>Contact Info</h4>
            <div className="info">
              <img src="https://i.imgur.com/WczcQ8E.png" alt="jordan" />
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
                <p className="location">Location: San Diego, CA</p>
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
              <Button variant="light" type="submit" onClick={sent}>
                Send
              </Button>
            </form>
          </div>
    </>
  );
};

export default Contact;