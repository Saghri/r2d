import React from "react";
import "./RentalFleets.css";
import bmw_chauffer from '../../images/bmw Chauffer.jpeg'

export default function RentalFleets() {
  return (
    <div className="our_fleets">
      <div className="fleet_heading">
        <h2>OUR RENTAL FLEETS</h2>
        <div className="parallelogram"></div>
      </div>
      <div className="fleet">
        <div className="fleet_car">
          <img src={bmw_chauffer} alt="fleet_car1" />
          <h3>Lexus ES 300 H with Chauffeur</h3>
        </div>
        <div className="fleet_car">
          <img src={bmw_chauffer} alt="fleet_car2" />
          <h3>GMC with Chauffeur</h3>
        </div>
        <div className="fleet_car">
          <img src={bmw_chauffer} alt="fleet_car3" />
          <h3>Highlander with Chauffeur</h3>
        </div>
        <div className="fleet_car">
          <img src={bmw_chauffer} alt="fleet_car4" />
          <h3>BMW 7 Series with Chauffeur</h3>
        </div>
        <div className="fleet_car">
          <img src={bmw_chauffer} alt="fleet_car5" />
          <h3>Nissan Petrol</h3>
        </div>
        <div className="fleet_car">
          <img src={bmw_chauffer} alt="fleet_car6" />
          <h3>Toyota Fortuner</h3>
        </div>
      </div>
    </div>
  );
}
