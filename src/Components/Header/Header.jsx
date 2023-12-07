import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Nav,
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
                <Link exact to='/Signup'><FontAwesomeIcon icon={faUser} size="lg" style={{color: "#f0f2f4",}} />&nbsp; Login / Signup</Link>
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="navbar">
        <Nav>
          <NavItem>
            <Link exact to='/home' className="navbar_links">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link exact to="/OurCar" className="navbar_links">
              Our Cars
            </Link>
          </NavItem>
          <NavItem>
            <Link className="navbar_links" exact to='/SelfDriven'>
              Self Driven
            </Link>
          </NavItem>
          <NavItem>
            <Link className="navbar_links" exact to='/ChaufferDriven'>
              Chauffeur Driven
            </Link>
          </NavItem>
          <NavItem>
            <Link className="navbar_links" exact to='/Get_App'>
              Get APP
            </Link>
          </NavItem>
          <NavItem>
            <Link className="navbar_links" exact to='/OurNews'>
              Our News
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className="toggle_navbar_links">
              About Us
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem><Link className="drop_navbar_links" exact to='/CompanyProfile'>Company Profile</Link></DropdownItem>
              <br />
              <DropdownItem><Link className="drop_navbar_links" exact to='/Contact'>Contact</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    </div>
  );
}
