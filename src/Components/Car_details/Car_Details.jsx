import React, { useState } from "react";
import "./Car_Details.css";
import { Car } from "../../Data/cars_details";

// DateTime Picker
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import { FaCar } from "react-icons/fa";
import { FaGears, FaFloppyDisk } from "react-icons/fa6";
import { GiCarDoor, GiGearStickPattern } from "react-icons/gi";
import {
  MdLuggage,
  MdOutlineAirlineSeatReclineNormal,
  MdCameraswitch,
  MdAssistant,
} from "react-icons/md";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoIosSpeedometer, IoIosWarning } from "react-icons/io";
import { FcApproval } from "react-icons/fc";
import car from "../../images/LandRover Defender V6.jpg";
import car1 from "../../images/LandRover Defender V6 Pic 1.jpeg";
import car2 from "../../images/LandRover Defender V6 Pic 2.jpeg";
import car3 from "../../images/LandRover Defender V6 Pic 3.jpeg";
import car4 from "../../images/LandRover Defender V6 Pic 4.jpeg";

export default function Car_Details({match}) {
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());

  const handlePickUpDateChange = (newValue) => {
    setPickUpDate(newValue);
  };

  const handleDropOffDateChange = (newValue) => {
    setDropOffDate(newValue);
  };

  // Related Cars
  const carPics = Car.slice(0, 5);

  return (
    <div className="Container_box">
      <div className="car_details">
        <div className="car_information">
          <div className="carName">
            <h2>Toyota Fortuner</h2>
          </div>
          <div className="SelectedCar_details">
            <div className="carPics">
              <img className="DisplayPic" src={car} alt="fortuner" />
              <div className="interiorPics">
                <img src={car} alt="" />
                <img src={car1} alt="" />
                <img src={car2} alt="" />
                <img src={car3} alt="" />
                <img src={car4} alt="" />
              </div>
            </div>

            {/* Car Price Table */}
            <div className="carPrice">
              <div className="carPrice_heading">
                <h3>Pricing</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Rental Period</th>
                    <th>Mileage Limit</th>
                    <th>Rental Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Day-basis</td>
                    <td>250 &nbsp; km</td>
                    <td>AED &nbsp; 250</td>
                  </tr>
                  <tr>
                    <td>Weekly</td>
                    <td>1700 &nbsp; km</td>
                    <td>AED &nbsp; 1450</td>
                  </tr>
                  <tr>
                    <td>1 Month</td>
                    <td>4500 &nbsp; km</td>
                    <td>AED &nbsp; 5999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="carSpecs">
            <div className="Specs_heading">
              <h3>Car Specs</h3>
            </div>
            <div className="Specs_details">
              <div className="carSpec">
                <span className="icon">
                  <FaCar />
                </span>
                &nbsp;&nbsp;<span className="icon_info">SUV</span>
              </div>
              <div className="carSpec">
                <span className="icon">
                  <GiCarDoor />
                </span>
                &nbsp;&nbsp;<span className="icon_info">4 Doors</span>
              </div>
              <div className="carSpec">
                <span className="icon">
                  <MdLuggage />
                </span>
                &nbsp;&nbsp;<span className="icon_info">Fits 4 Bags</span>
              </div>
              <div className="carSpec">
                <span className="icon">
                  <GiGearStickPattern />
                </span>
                &nbsp;&nbsp;<span className="icon_info">Auto Transmission</span>
              </div>
              <div className="carSpec">
                <span className="icon">
                  <MdOutlineAirlineSeatReclineNormal />
                </span>
                &nbsp;&nbsp;<span className="icon_info">Fits 7 Passengers</span>
              </div>
              <div className="carSpec">
                <span className="icon">
                  <BsFillFuelPumpFill />
                </span>
                &nbsp;&nbsp;<span className="icon_info">Fuel Type: Petrol</span>
              </div>
              <div className="carSpec">
                <span className="icon">
                  {" "}
                  <FaGears />
                </span>
                &nbsp;&nbsp;
                <span className="icon_info">2.8L Engine Capacity</span>
              </div>
            </div>
          </div>
          <div className="carFeatures">
            <div className="Features_heading">
              <h3>Car Features</h3>
            </div>
            <div className="Specs_details">
              <div className="car_feature">
                <span className="icon">
                  <IoIosSpeedometer />
                </span>
                &nbsp;&nbsp;<span className="icon_info">Cruise Control</span>
              </div>
              <div className="car_feature">
                <span className="icon">
                  <MdCameraswitch />
                </span>
                &nbsp;&nbsp;
                <span className="icon_info">3D Surround Camera</span>
              </div>
              <div className="car_feature">
                <span className="icon">
                  <FaFloppyDisk />
                </span>
                &nbsp;&nbsp;
                <span className="icon_info">Memory Front Seats</span>
              </div>
              <div className="car_feature">
                <span className="icon">
                  <IoIosWarning />
                </span>
                &nbsp;&nbsp;
                <span className="icon_info">Blind Spot Warning</span>
              </div>
              <div className="car_feature">
                <span className="icon">
                  <MdAssistant />
                </span>
                &nbsp;&nbsp;<span className="icon_info">Parking Assist</span>
              </div>
            </div>
          </div>
          <div className="carDescription">
            <div className="description_heading">
              <h3>Car Description</h3>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              enim error beatae rem accusantium. Quaerat, maxime. Voluptas
              ratione, repellat adipisci pariatur fuga hic in minima, inventore
              natus rerum molestiae. Fuga. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Officiis ipsam cupiditate provident
              at voluptas necessitatibus, animi distinctio mollitia sint non
              culpa laborum et?
            </p>
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="booking_details">
        <div className="booking_heading">
          <h4>REQUIRED DOCUMENTS:</h4>
        </div>
        <div className="document_details">
          <div>
            <h5>For UAE Residents</h5>
          </div>
          <p>
            <FcApproval /> UAE Driving License
          </p>
          <p>
            <FcApproval /> Emirates ID (Residential Visa may be acceptable)
          </p>
        </div>
        <div className="document_details">
          <div>
            <h5>For Tourists visiting UAE</h5>
          </div>
          <p>
            <FcApproval /> Passport
          </p>
          <p>
            <FcApproval /> Visit Visa
          </p>
          <p>
            <FcApproval /> Home Country Driving License
          </p>
          <p>
            <FcApproval /> International Driving Permit (IDP)
          </p>
        </div>

        <div className="book_car">
          <div className="booking_heading">
            <h4>PICK-UP DATE:</h4>
          </div>
          <div id="datePicker">
            <DateTimePicker
              onChange={handlePickUpDateChange}
              value={pickUpDate}
            />
          </div>
          {/* <p id="selectedDate">Pick-Up Date: {pickUpDate.toLocaleString()}</p> */}

          <div className="dropOff_heading">
            <h4>DROP-OFF DATE:</h4>
          </div>
          <div id="datePicker">
            <DateTimePicker
              onChange={handleDropOffDateChange}
              value={dropOffDate}
            />
          </div>
          {/* <p id="selectedDate">Drop-off Date: {dropOffDate.toLocaleString()}</p> */}

          <button className="book_btn">Book Your Car Now!</button>
        </div>
        <div className="related_cars">
          <div className="relatedCar_heading">
            <h4>RELATED CARS:</h4>
          </div>
          {
            carPics.map((car)=>(
              <div className="relatedCar">
            <div>
              <img src={car.image} alt={car.name} />
            </div>
            <div>
              <p id="name">{car.name}</p>
              <p id="price">Price: &nbsp; {car.price} AED</p>
            </div>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
