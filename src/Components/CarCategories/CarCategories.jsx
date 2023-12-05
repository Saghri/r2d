import React from "react";
import "./CarCategories.css";
import { Row, Col } from "reactstrap";
import selfDriven from '../../images/Self_driven.png'
import chaufferDriven from '../../images/Chauffer_driven.png'
import { Link } from "react-router-dom";

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
                    <img src={selfDriven} alt="" />
                </div>
                <div className="cardTitle"><h2><Link exact to='/SelfDriven'>Self Driven</Link></h2></div>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6'>
            <div className="card">
                <div className="cardImage">
                    <img src={chaufferDriven} alt="" />
                </div>
                <div className="cardTitle"><h2><Link exact to='/ChaufferDriven'>Chauffuer Driven</Link></h2></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
