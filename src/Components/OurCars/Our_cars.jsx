import React from 'react';
import './OurCars.css';
import { Car } from '../../Data/cars_details';
import { Link, useNavigate} from 'react-router-dom';

export default function Our_cars() {
  const selfDrivenCars = Car.filter((car) => car.car_category === 'self driven');
  const chaufferDrivenCars = Car.filter((car) => car.car_category === 'chauffer driven');

  const navigate = useNavigate();
  const handleCarClick = (carId) => {
    navigate(`/carDetails`, { state: { carId: carId } });
  };

  return (
    <div className='ourCars'>
      <div className="Self_driven">
        <div className='heading'><h2>SELF DRIVEN</h2></div>
        <div className="driven_cars">
          {selfDrivenCars.map((car) => (
            <div className="car" id={car.id} onClick={() => handleCarClick(car.id)}>
              
                <img src={car.image[0]} alt={car.name} />
              
              <h3>{car.name}</h3>
              <Link className='link_viewDetails' to={{ pathname: '/carDetails', state: { carId: car.id } }}>View Details</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="Chauffer_driven">
        <div className='heading'><h2>CHAUFFER DRIVEN</h2></div>
        <div className="driven_cars">
          {chaufferDrivenCars.map((car) => (
            <div className="car" id={car.id} onClick={() => handleCarClick(car.id)}>
                <img src={car.image[0]} alt={car.name} />
              <h3>{car.name}</h3>
              <Link className='link_viewDetails' to={{ pathname: '/carDetails', state: { carId: car.id } }}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
