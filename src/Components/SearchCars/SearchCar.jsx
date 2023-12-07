import { React, useState } from "react";
import "./SearchCar.css";
import { Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export default function SearchCar() {
  const [pickUpDate, setPickUpDate] = useState(null);
  const [dropOffDate, setDropOffDate] = useState(null);

  const [carType, setCarType] = useState();
  const getSelectedType = (e) => {
    setCarType(e.target.value);
  };

  return (
    <div className="SearchCar">
      <Col lg="6" md="6" sm="6">
        <Row>
          <div className="SearchCar_heading">
            <h1>RENT A CAR IN DUBAI</h1>
          </div>
        </Row>
        <Row>
          <div className="SearchCar_SubHeading">
            <p>Practical & Convenient Auto Hire, As Low As 15 AED / day</p>
          </div>
        </Row>
        <Row>
          <div className="SearchBar">
            <span className="pick_up_Date">
              <DatePicker
                className="datePicker"
                selected={pickUpDate}
                onChange={(date) => setPickUpDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                isClearable
                placeholderText="From"
              />{" "}
            </span>
            &nbsp;&nbsp;&nbsp;
            <span className="drop_off_Date">
              <DatePicker
                className="datePicker"
                selected={dropOffDate}
                onChange={(date) => setDropOffDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={pickUpDate}
                isClearable
                placeholderText="To"
              />
            </span>
            <span className="p-3">
              <select
                id="car_type"
                onChange={getSelectedType}
                value={carType}
                className="form-select"
              >
                <option value="" selected>
                  Select Car Type
                </option>
                <option value="Self Driven">Self Driven</option>
                <option value="Chauffer Driven">Chauffer Driven</option>
              </select>
            </span>
            
              <Link
                to={
                  carType === "Self Driven"
                    ? "/SelfDriven"
                    : "/ChaufferDriven"
                }
                className="view_allCars"
              >
                SEARCH CAR
              </Link>
          </div>
        </Row>
      </Col>
    </div>
  );
}
