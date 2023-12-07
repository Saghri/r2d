import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Car_Details.css";
import { Car } from "../../Data/cars_details";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

export default function Car_Details() {
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [bookings, setBookings] = useState([]);

  const handlePickUpDateChange = (newValue) => {
    setPickUpDate(newValue);
  };

  const handleDropOffDateChange = (newValue) => {
    setDropOffDate(newValue);
  };

  const location = useLocation();
  const carId = location.state?.carId;
  const selectedCar = Car.find((car) => car.id === carId);

  // Related Cars
  const carPics = Car.slice(0, 5);
  const navigate = useNavigate();
  const handleCarClick = (carId) => {
    navigate(`/carDetails`, { state: { carId: carId } });
  };

  // Save booking information
  const handleBookNow = () => {
    const newBooking = {
      carId: selectedCar?.id,
      carName: selectedCar?.name,
      carMake: selectedCar?.maker,
      carType: selectedCar?.car_type,
      pickUpDate: pickUpDate.toISOString(),
      dropOffDate: dropOffDate.toISOString(),
    };

    setBookings((prevBookings) => [...prevBookings, newBooking]);
    alert("Your car is booked! Check the bookings array for details.");
  };

  return (
    <>
      <Header />
      <div className="Container_box">
        <div className="car_details">
          <div className="car_information">
            <div className="carName">
              <h2>{selectedCar?.name}</h2>
            </div>
            <div className="SelectedCar_details">
              <div className="carPics">
                <img
                  className="DisplayPic"
                  src={selectedCar?.image[0]}
                  alt="fortuner"
                />
                <div className="interiorPics">
                  {selectedCar?.image.map((interiorImage, index) => (
                    <img
                      key={index}
                      src={interiorImage}
                      alt={`Interior ${index + 1}`}
                    />
                  ))}
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
                      <td>{selectedCar?.day_milage} &nbsp; km</td>
                      <td>AED &nbsp; {selectedCar?.day_price}</td>
                    </tr>
                    <tr>
                      <td>Weekly</td>
                      <td>{selectedCar?.weekly_mileage} &nbsp; km</td>
                      <td>AED &nbsp; {selectedCar?.weekly_price}</td>
                    </tr>
                    <tr>
                      <td>1 Month</td>
                      <td>{selectedCar?.month_mileage} &nbsp; km</td>
                      <td>AED &nbsp; {selectedCar?.month_price}</td>
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
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.car_type}</span>
                </div>
                <div className="carSpec">
                  <span className="icon">
                    <GiCarDoor />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.Doors}</span>
                </div>
                <div className="carSpec">
                  <span className="icon">
                    <MdLuggage />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.luggage}</span>
                </div>
                <div className="carSpec">
                  <span className="icon">
                    <GiGearStickPattern />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">
                    {selectedCar?.gear_transmission}
                  </span>
                </div>
                <div className="carSpec">
                  <span className="icon">
                    <MdOutlineAirlineSeatReclineNormal />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.capacity}</span>
                </div>
                <div className="carSpec">
                  <span className="icon">
                    <BsFillFuelPumpFill />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">
                    Fuel Type: {selectedCar?.Fuel}
                  </span>
                </div>
                <div className="carSpec">
                  <span className="icon">
                    {" "}
                    <FaGears />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.Engine}</span>
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
                  &nbsp;&nbsp;
                  <span className="icon_info">
                    {selectedCar?.Cruise_control}
                  </span>
                </div>
                <div className="car_feature">
                  <span className="icon">
                    <MdCameraswitch />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.camera}</span>
                </div>
                <div className="car_feature">
                  <span className="icon">
                    <FaFloppyDisk />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.Memory_seat}</span>
                </div>
                <div className="car_feature">
                  <span className="icon">
                    <IoIosWarning />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.blind_spot}</span>
                </div>
                <div className="car_feature">
                  <span className="icon">
                    <MdAssistant />
                  </span>
                  &nbsp;&nbsp;
                  <span className="icon_info">{selectedCar?.parking}</span>
                </div>
              </div>
            </div>
            <div className="carDescription">
              <div className="description_heading">
                <h3>Car Description</h3>
              </div>
              <p>{selectedCar?.car_description}</p>
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
            <div className="dropOff_heading">
              <h4>DROP-OFF DATE:</h4>
            </div>
            <div id="datePicker">
              <DateTimePicker
                onChange={handleDropOffDateChange}
                value={dropOffDate}
              />
            </div>
            <button className="book_btn" onClick={handleBookNow} >Book Your Car Now!</button>
          </div>
          <div className="related_cars">
            <div className="relatedCar_heading">
              <h4>RELATED CARS:</h4>
            </div>
            {carPics.map((car) => (
              <div className="relatedCar" onClick={() => handleCarClick(car.id)}>
                <div>
                  <img src={car.image[0]} alt={car.name} />
                </div>
                <div>
                  <p id="name">{car.name}</p>
                  <p id="price">Price: &nbsp; {car.day_price} AED</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
