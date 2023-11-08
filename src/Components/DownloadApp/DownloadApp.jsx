import React from "react";
import "./DownloadApp.css";
import { Row, Col } from "reactstrap";
import Download_app from "../../images/Download App.png";
import GooglePlay from "../../images/GooglePlay.jpg";
import AppStore from "../../images/AppStore.png";

export default function DownloadApp() {
  return (
    <div className="download_app">
      <Row>
        <Col lg="6" md="6" sm="6">
          <div className="download_details">
            <h2>Download Our App</h2>
            <h1>ONE APP, MILLIONS OF USERS</h1>
            <p>
              Discover the ultimate convenience in car rental with our
              user-friendly and feature-packed mobile app. Whether you’re a
              frequent traveler or planning a weekend getaway, our app is your
              key to hassle-free car rental experiences. 
              <br /><br />
              Download our app now
              and unlock a world of convenience and savings for your next car
              rental adventure. Experience the future of car rental at your
              fingertips!
            </p>
            <div className="gettApp_images">
                <img src={GooglePlay} alt="" />
                <img src={AppStore} alt="" />
            </div>
          </div>
        </Col>
        <Col lg="6" md="6" sm="6">
          <div className="download_image">
            <img src={Download_app} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
}
