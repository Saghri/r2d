import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import testimonial_car from "../../images/testimonial CAr.png";
import { Row, Col } from "reactstrap";
import data from "../../Data/testimonial_data";

export default function Testimonials() {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

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
            {people.map((item, indexPeople) => {
              const {id, image, name, quote} = item;
              let position = "nextSlide";
              if(indexPeople === index){
                position = "activeSlide"
              }
              if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length -1))
              {
                position= "lastSlide";
              }
              return (
                <article className={name} key={id}>
                  <p className="quote">{quote}</p>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                </article>
              )
            } )}
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
