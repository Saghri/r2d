import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import testimonial_car from "../../images/testimonial CAr.png";
import { Row, Col } from "reactstrap";
import { Review } from "../../Data/testimonial_data";

const Testimonial = ({ id, image, name, quote }) => {
  return (
    <div className="testimonial">
      <img src={image} alt={`Customer ${id}`} />
      <h3>{name}</h3>
      <p>{quote}</p>
    </div>
  );
};

export default function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonialIndex(
        (prevIndex) => (prevIndex + 1) % Review.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentTestimonial = Review[currentTestimonialIndex];

  return (
    <div className="customer_reviews">
      <Row>
        <Col lg="6" md="6" sm="6">
          <div className="testimonial_left">
            <img src={testimonial_car} alt="" />
          </div>
        </Col>
        <Col lg="6" md="6" sm="6">
          <Row>
            <div className="testimonials">
              <div className="testimonial_heading">
                <h1>CUSTOMER REVIEWS</h1>
              </div>
              <div className="parallelogram"></div>
            </div>
          </Row>
          <Row>
            <div className="section">
              <div className="testimonials-container">
                <br />
                <Testimonial
                  key={currentTestimonial.id}
                  {...currentTestimonial}
                />
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
