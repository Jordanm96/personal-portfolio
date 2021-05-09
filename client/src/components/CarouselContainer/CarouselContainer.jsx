import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./CarouselContainer.css";

const CarouselContainer = () => {
  return (
    <div>
      <h4>Select an app for more info</h4>
      <Carousel id="carousel" indicators={false}>
        <Carousel.Item interval={1000}>
          <Link to="/fresh-tomatoes">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/PzMIvjU.png"
              alt="First slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to="/ima-miru">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/pXD4D0f.png"
              alt="Second slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Link to="/group-run">
            <img
              className="d-block w-100"
              src="https://i.imgur.com/cQXUbQw.png"
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
