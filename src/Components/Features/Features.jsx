import React from "react";
import "./Features.css";
import { Row, Col } from "reactstrap";
import deal from "../../images/Deal.png";
import shield from "../../images/shield.png";
import support from "../../images/support.png";
import feature_car from "../../images/feature car.png";

export default function Features() {
  return (
    <div className="features">
      <Row>
        <Col lg="6" md="6" sm="12">
          <Row>
            <div className="features_heading">
              <h1>FEEL THE BEST EXPERIENCE WITH OUR RENTAL DEALS!</h1>
            </div>
          </Row>
          <Row>
            <div className="features_box">
              <div className="feature_logo">
                <img src={deal} alt="Deal" />
              </div>
              <div className="feature_detail">
                <h2>Deals by Every Budget</h2>
                <span>We deal according to our client's budget!</span>
              </div>
            </div>
          </Row>
          <Row>
            <div className="features_box">
              <div className="feature_logo">
                <img src={shield} alt="dollar shield" />
              </div>
              <div className="feature_detail">
                <h2>Best Price Guaranteed</h2>
                <span>
                  We are offering lowest prices in the market along with various
                  discounts.
                </span>
              </div>
            </div>
          </Row>
          <Row>
            <div className="features_box">
              <div className="feature_logo">
                <img src={support} alt="Customer support" style={{width:'110px'}} />
              </div>
              <div className="feature_detail">
                <h2>24/7 Support</h2>
                <span>
                  Our customer support team will assist you anytime in case any
                  vehicle issue encountered during rental period.
                </span>
              </div>
            </div>
          </Row>
        </Col>
        <Col lg="6" md="6" sm="12">
          <div className="feature_car">
            <img src={feature_car} alt="Feature_car" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
