import React from 'react'
import './OurCars.css'
import fortuner from '../../images/SUV.webp'

export default function Our_cars() {
  return (
    <div className='ourCars'>
      <div className="Self_driven">
        <div className='heading'><h2>SELF DRIVEN</h2></div>
        <div className="driven_cars">
          <div className="car">
            <img src={fortuner} alt="" />
            <h3>Nissan Patrol</h3>
          </div>
          <div className="car">
            <img src={fortuner} alt="" />
            <h3>Toyota Fortuner</h3>
          </div>
          <div className="car">
            <img src={fortuner} alt="" />
            <h3>Land Rover Defender</h3>
          </div>
        </div>
      </div>
      <div className="Chauffer_driven">
      <div className='heading'><h2>CHAUFFER DRIVEN</h2></div>
      <div className="driven_cars">
        <div className="car">
          <img src={fortuner} alt="" />
          <h3>Lexus ES 300 H</h3>
        </div>
        <div className="car">
          <img src={fortuner} alt="" />
          <h3>GMC</h3>
        </div>
        <div className="car">
          <img src={fortuner} alt="" />
          <h3>Highlander</h3>
        </div>
        <div className="car">
          <img src={fortuner} alt="" />
          <h3>BMW 7 Series</h3>
        </div>
        <div className="car">
          <img src={fortuner} alt="" />
          <h3>Mercedes V Class</h3>
        </div>
      </div>
      </div>
      
    </div>
  )
}
