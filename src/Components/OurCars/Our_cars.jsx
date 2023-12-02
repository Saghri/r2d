import React from 'react';
import './OurCars.css';
import { Car } from '../../Data/cars_details';
import { Link, useNavigate } from 'react-router-dom';
import CarDetails from '../../Pages/Car_Details_Page/CarDetails';
// import Car_Details from '../Car_details/Car_Details';

export default function Our_cars() {
  const selfDrivenCars = Car.filter((car) => car.car_category === 'self driven');
  const chaufferDrivenCars = Car.filter((car) => car.car_category === 'chauffer driven');

  // const handleCarClick = (carId) => {
  //   // Redirect to car details page with the selected car ID
  //   window.location.href = `/car-details/${carId}`;
  // };

  return (
    <div className='ourCars'>
      <div className="Self_driven">
        <div className='heading'><h2>SELF DRIVEN</h2></div>
        <div className="driven_cars">
          {selfDrivenCars.map((car) => (
            <div className="car" id={car.id}>
              
                <img src={car.image[0]} alt={car.name} />
              
              <h3>{car.name}</h3>
              <button >View Details</button>
            </div>
          ))}
        </div>
      </div>

      <div className="Chauffer_driven">
        <div className='heading'><h2>CHAUFFER DRIVEN</h2></div>
        <div className="driven_cars">
          {chaufferDrivenCars.map((car) => (
            <div className="car" id={car.id}>
              {/* <Link to={`/car-details/${car.id}`}> */}
                <img src={car.image[0]} alt={car.name} />
              {/* </Link> */}
              <h3>{car.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
