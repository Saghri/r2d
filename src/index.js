import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Header from './Components/Header/Header';
// import SearchCar from './Components/SearchCars/SearchCar';
// import CarCategories from './Components/CarCategories/CarCategories';
// import TopBrands from './Components/TopBrands/TopBrands';
import RentalFleets from './Components/RentalFleets/RentalFleets';
// import Footer from './Components/Footer/Footer';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Header/>
    <SearchCar/>
    <CarCategories/>
    <TopBrands/> */}
    <RentalFleets/>
    {/* <Footer/> */}
    {/* <App /> */}
  </React.StrictMode>
);

reportWebVitals();
