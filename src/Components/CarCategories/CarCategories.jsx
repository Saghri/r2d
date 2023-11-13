import React from "react";
import "./CarCategories.css";
import { Row, Col } from "reactstrap";
import sedan from '../../images/Luxury-Sedans.jpg'
import SUV from '../../images/SUV.webp'

export default function CarCategories() {
  return (
    <div className="CarCategories">
      <div className="CarCategories_text">
        <Col>
          <Row>
            <p className="moto">YOUR JOURNEY, OUR WHEELS: RENT WITH EASE!</p>
          </Row>
          <Row>
            <h1>FIND CAR RENTAL AND DRIVER SERVICES NEAR YOU </h1>
          </Row>
          <Row>
            <div className="parallelogram"></div>
          </Row>
        </Col>
      </div>
      <div className="CarCategories_types">
        <Row>
          <Col lg='6' md='6' sm='6'>
            <div className="card">
                <div className="cardImage">
                    <img src={sedan} alt="" />
                </div>
                <div className="cardTitle"><h2><a href="&">Self Driven</a></h2></div>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6'>
            <div className="card">
                <div className="cardImage">
                    <img src={SUV} alt="" />
                </div>
                <div className="cardTitle"><h2><a href="&">Chauffuer Driven</a></h2></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
