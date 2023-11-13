import React from "react";
import "./Self_driven.css";
import NissanPetrol from "../../images/Nissan Petrol.png";
import NissanXterra from "../../images/Nissan Xterra 2023.png";
import DefenderV6 from "../../images/LandRover Defender V6.jpg";
import Fortuner from "../../images/Toyota Fortuner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad } from "@fortawesome/free-solid-svg-icons";

export default function Self_driven() {
  return (
    <div className="self_driven">
      <div className="Selfdriven_car">
        <img src={NissanPetrol} alt="" />
        <p className="Car_name">Nissan Petrol</p>
        <div className="car_detail_icon">
          <span>
            <i class="ri-steering-2-line"></i>
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
          <span>
            <FontAwesomeIcon icon={faRoad} />
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
        </div>
      </div>
      <div className="Selfdriven_car">
        <img src={NissanXterra} alt="" />
        <p className="Car_name">Nissan Xterra 2023</p>
        <div className="car_detail_icon">
          <span>
            <i class="ri-steering-2-line"></i>
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
          <span>
            <FontAwesomeIcon icon={faRoad} />
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
        </div>
      </div>
      <div className="Selfdriven_car">
        <img src={DefenderV6} alt="" />
        <p className="Car_name">LandRover Defender V6</p>
        <div className="car_detail_icon">
          <span>
            <i class="ri-steering-2-line"></i>
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
          <span>
            <FontAwesomeIcon icon={faRoad} />
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
        </div>
      </div>
      <div className="Selfdriven_car">
        <img src={Fortuner} alt="" />
        <p className="Car_name">Toyota Fortuner</p>
        <div className="car_detail_icon">
          <span>
            <i class="ri-steering-2-line"></i>
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
          <span>
            <FontAwesomeIcon icon={faRoad} />
            <h6>| &nbsp; 2030 &nbsp; |</h6>
          </span>
        </div>
      </div>
    </div>
  );
}
