import React from "react";
import logo from "../../images/logo.png";
import { Row, Col, Nav, NavLink, NavItem } from "reactstrap";
import "./Header.css";

export default function Header() {
  return (
    <div className="outer">
      <div className="header_top"></div>
      <div className="header_mid">
        <Row>
          <Col lg="6" md="6" sm="6">
            <div className="header_mid_left">
              <img src={logo} alt="r2d logo" />
            </div>
          </Col>
          <Col lg="6" md="6" sm="6">
            <div className="header_mid_right">
              <span>Country</span>

              <span>Currency</span>

              <span>Language</span>

              <span>
                <a href="$">Log in / Sign up</a>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="navbar">
        <Nav >
          <NavItem>
            <NavLink className="navbar_links" active href="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="#">Our Cars</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="#">Limousine Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="#">
              Get APP
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="$">
              Our News
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="$">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
}
