import {React, useState} from 'react'
import './SearchCar.css'
import { Row, Col } from 'reactstrap'

export default function SearchCar() {
    const [search, setSearch]=useState("Search Car Rentals in Dubai");
  return (
    <div className='SearchCar'>
      <Col lg='6' md='6' sm='6'>
        <Row>
            <div className='SearchCar_heading'>
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
                <span className='pick_up_Date'>Pick Up</span>
                <span className='drop_off_Date'>Drop Off</span>
                <button className='view_allCars'>FIND IT NOW</button> 
            </div>
        </Row>
      </Col>
    </div>
  )
}
