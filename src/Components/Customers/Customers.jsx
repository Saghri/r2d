import React, { useState } from "react";
import "./Customers.css";
import { Row, Col } from "reactstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Customers() {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="customer">
          <Row>
            <Col lg="4" md="6" sm="12">
              <div className="customer_details">
                <span>
                  {counterState && (
                    <CountUp start={0} end={50} duration={2.75}></CountUp>
                  )}
                  +
                </span>
                <h2>Cars For Rent</h2>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12">
              <div className="customer_details">
                <span>
                  {counterState && (
                    <CountUp start={0} end={600} duration={2.75}></CountUp>
                  )}
                  +
                </span>
                <h2>Satisfied Customers</h2>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12">
              <div className="customer_details">
                <span>
                  {counterState && (
                    <CountUp start={0} end={20} duration={2.75}></CountUp>
                  )}
                  +
                </span>
                <h2>Verified Cars</h2>
              </div>
            </Col>
          </Row>
        </div>
      </ScrollTrigger>
    </>
  );
}
