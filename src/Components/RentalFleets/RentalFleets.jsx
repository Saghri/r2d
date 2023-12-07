import React from "react";
import "./RentalFleets.css";
import { Car } from "../../Data/cars_details";

export default function RentalFleets() {

  const recentFleet = Car.slice(-6);

  return (
    <div className="our_fleets">
      <div className="fleet_heading">
        <h2>OUR RENTAL FLEETS</h2>
        <div className="parallelogram"></div>
      </div>
      <div className="fleet">
      {
      recentFleet.map((car)=>(
      <div className="fleet_car">
          <img src={car.image[0]} alt={car.name} />
          <h3>{car.name}</h3>
        </div>
        ))
      }
      </div>
    </div>
  );
}
