import React from "react";
import "./Testimonials.css";
import testimonial_car from "../../images/testimonial CAr.png";
import { Row, Col } from "reactstrap";

export default function Testimonials() {
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
          <Row></Row>
        </Col>
      </Row>
    </div>
  );
}
