import Carousel from "react-bootstrap/Carousel";
import './CarouselContainer.css';
import { Link } from 'react-router-dom';

const CarouselContainer = () => {
  return (
    <div>
      <h4>Click one!</h4>
      <Carousel id='carousel'>
        <Carousel.Item>
          <Link to='/fresh'>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/PzMIvjU.png"
            alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to='ima-miru'>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/pXD4D0f.png"
            alt="Second slide"
            />
            </Link>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Link to='group-run'>

          <img
            className="d-block w-100"
            src="https://i.imgur.com/cQXUbQw.png"
            alt="Third slide"
          />
            </Link>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
