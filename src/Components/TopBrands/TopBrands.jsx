import React from 'react'
import './TopBrands.css'
import { Col, Row } from 'reactstrap'
import mercedes from '../../images/mercedes.jpg'
import bmw from '../../images/BMW.jpg'
import toyota from '../../images/toyota.jpg'
import nissan from '../../images/nissan.jpg'
import volkswagen from '../../images/volkswagen.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function TopBrands() {
  return (
    <div className='TopBrands'>
      <Col lg='6' md='6' sm='6'>
        <Row>
        <div className="TopBrands_heading">
        <h1>RENT A CAR FROM TOP BRANDS</h1>
        </div>
        </Row>
        <Row>
        <div className="parallelogram"></div>
        </Row>
        <Row>
            <div className="brands">
                
                    <div className="brand_box"><img src={mercedes} alt="mercedes" />
                    <div className="brand_name"><h2>MERCEDES</h2></div></div>
                    
                    <div className="brand_box"><img src={bmw} alt="BMW" />
                    <div className="brand_name"><h2>BMW</h2></div></div>
                    
                    <div className="brand_box"><img src={toyota} alt="Toyota" />
                    <div className="brand_name"><h2>TOYOTA</h2></div></div>
                    
                    <div className="brand_box"><img src={nissan} alt="NISSAN" />
                    <div className="brand_name"><h2>NISSAN</h2></div></div>
                    
                    <div className="brand_box"><img src={volkswagen} alt="VOLKSWAGEN" />
                    <div className="brand_name"><h2>VOLKSWAGEN</h2></div></div>
            </div>
        </Row>
        <Row>
            <div className="All_brands">
            <div className="viewAll_brands">
                View All &nbsp;
                <FontAwesomeIcon icon={faCircleChevronDown} />
            </div>
            </div>
        </Row>
      </Col>
    </div>
  )
}
