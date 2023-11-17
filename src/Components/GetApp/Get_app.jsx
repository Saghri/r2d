import React from "react";
import "./Get_app.css";
import mobileImage from "../../images/mobileImage.png";
import AppStore from '../../images/appStore.png'
import GooglePlay from '../../images/GooglePlay.jpg'

export default function Get_app() {
  return (
    <div className="getApp">
      <div className="mobile_image">
        <img src={mobileImage} alt="" />
      </div>
      <div className="App_details">
        <h1>DOWNLOAD OUR APP!</h1>
        <div className="parallelogram"></div>
        <p>
          Download our app now and unlock a world of convenience and savings for
          your next car rental adventure. Experience the future of car rental at
          your fingertips!
        </p>
        <div className="download_buttons">
          <img src={GooglePlay} alt="googlePlay" />
          <img src={AppStore} alt="appStore" />
        </div>
      </div>
    </div>
  );
}
