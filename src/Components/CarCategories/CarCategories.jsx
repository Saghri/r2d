import React from "react";
import "./CarCategories.css";
import { Row, Col } from "reactstrap";
import sedan from '../../images/Luxury-Sedans.jpg'
import SUV from '../../images/SUV.webp'
import limo from '../../images/Limousine.webp'

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
          <Col lg='4' md='4' sm='4'>
            <div className="card">
                <div className="cardImage">
                    <img src={sedan} alt="" />
                </div>
                <div className="cardTitle"><h2><a href="&">Luxury Sedan</a></h2></div>
            </div>
          </Col>
          <Col lg='4' md='4' sm='4'>
            <div className="card">
                <div className="cardImage">
                    <img src={SUV} alt="" />
                </div>
                <div className="cardTitle"><h2><a href="&">SUVs</a></h2></div>
            </div>
          </Col>
          <Col lg='4' md='4' sm='4'>
            <div className="card">
                <div className="cardImage">
                    <img src={limo} alt="" />
                </div>
                <div className="cardTitle"><h2><a href="&">Limousine</a></h2></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
