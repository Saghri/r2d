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
                <p>Book directly from local suppliers. No commission, no mark-ups.</p>
            </div>
        </Row>
        <Row>
            <div className="SearchBar">
                <span className='search'><search>{search}</search></span>
                <button className='view_allCars'>VIEW ALL CARS&nbsp;&nbsp; <div><i class="ri-arrow-right-s-line"></i></div></button> 
            </div>
        </Row>
      </Col>
    </div>
  )
}
