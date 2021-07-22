import PageHeader from "../PageHeader/PageHeader";
import classes from "./Contact.module.css";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

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
    alert("Sent!");
    e.target.reset();
  }

  return (
    <div className={classes.Contact} id="contact">
      <PageHeader title={"Contact Me"} />
      <div className={classes.Content}>
      {/* <form onSubmit={sendEmail}> */}
        <form onSubmit={sendEmail} className={classes.Form}>
          <input type="text" name="subject" placeholder="Name" required />
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
        </form>
        <ul className={classes.Info}>
          <li>
            <span>Email: </span>
            <br />
            <a href="mailto: jordmontero96@gmail.com">
              jordmontero96@gmail.com
            </a>
          </li>
          <li>
            <span>LinkedIn: </span>
            <br />
            <a
              href="https://www.linkedin.com/in/jordanm96"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/jordanm96
            </a>
          </li>
          <li>
            <span>Github: </span>
            <br />
            <a
              href="https://github.com/Jordanm96"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/Jordanm96
            </a>
          </li>
          <li>
            <span>Phone: </span>
            <br />
            916-698-0989
          </li>
          <li>
            <span>Location: </span> <br />
            San Diego, CA
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
