import React from 'react'
import './OurCars.css'
import { Car } from '../../Data/cars_details'

export default function Our_cars() {
  return (
    <div className='ourCars'>
      <div className="Self_driven">
        <div className='heading'><h2>SELF DRIVEN</h2></div>
        <div className="driven_cars">
          {
            Car.map((car)=>(
              <div className="car" id={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
          </div>
            ))
          }
        </div>
      </div>

      <div className="Chauffer_driven">
      <div className='heading'><h2>CHAUFFER DRIVEN</h2></div>
      <div className="driven_cars">
      {
            Car.map((car)=>(
              <div className="car" id={car.id}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
          </div>
            ))
          }
      </div>
      </div>
      
    </div>
  )
}
