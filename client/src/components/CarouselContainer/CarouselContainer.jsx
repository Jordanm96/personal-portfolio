import Carousel from "react-bootstrap/Carousel";
import "./CarouselContainer.css";
import { Link } from "react-router-dom";

const CarouselContainer = () => {
  return (
    <div>
      <h4>Select an app for more info</h4>
      <Carousel id="carousel" indicators={false}>
        <Carousel.Item interval={900}>
          <Link to="/fresh">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/PzMIvjU.png"
              alt="First slide"
            />
          <Carousel.Caption>
            <h4>FRESH TOMATOES</h4>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <Link to="/ima-miru">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/pXD4D0f.png"
              alt="Second slide"
            />
          <Carousel.Caption>
            <h4>IMA MIRU</h4>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={900}>
          <Link to="/group-run">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/cQXUbQw.png"
              alt="Third slide"
            />
          <Carousel.Caption>
            <h4>GROUP RUN!</h4>
          </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
