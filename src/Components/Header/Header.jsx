import React from "react";
import logo from "../../images/logo.png";
import {
  Row,
  Col,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

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
              <span><FontAwesomeIcon icon={faEarthAmericas} size="lg" style={{color: "#d0d3d8",}} /> &nbsp;United Arab Emrates</span>

              <span><FontAwesomeIcon icon={faMoneyBill} size="lg" style={{color: "#ebedef",}} /> &nbsp;AED</span>

              <span><FontAwesomeIcon icon={faLanguage} size="lg" style={{color: "white",}} />&nbsp; English</span>

              <span>
                <a href="$"><FontAwesomeIcon icon={faUser} size="lg" style={{color: "#f0f2f4",}} />&nbsp; Login / Signup</a>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="navbar">
        <Nav>
          <NavItem>
            <NavLink className="navbar_links" active href="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="#">
              Our Cars
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="#">
              Self Driven
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar_links" href="#">
              Chauffeur Driven
            </NavLink>
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
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="navbar_links">
              About Us
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Company Profile</DropdownItem>
              <br />
              <DropdownItem>Contact</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    </div>
  );
}
