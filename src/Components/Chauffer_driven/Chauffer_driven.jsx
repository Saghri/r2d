import React from "react";
import "../Self_Driven/Self_driven.css";
import { Car } from '../../Data/cars_details'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad } from "@fortawesome/free-solid-svg-icons";

export default function Self_driven() {

  const chaufferDrivenCars = Car.filter((car) => car.car_category === 'chauffer driven');
  return (
    <div className="self_driven">
      {
        chaufferDrivenCars.map((car)=>(
          <div className="Selfdriven_car">
        <img src={car.image} alt={car.name} />
        <p className="Car_name">{car.name}</p>
        <div className="car_detail_icon">
          <span>
            <i class="ri-steering-2-line"></i>
            <h6>| &nbsp; {car.model} &nbsp; |</h6>
          </span>
          <span>
            <FontAwesomeIcon icon={faRoad} />
            <h6> &nbsp; {car.miles} &nbsp; |</h6>
          </span>
        </div>
      </div>
        ))
      }
    </div>
  );
}
