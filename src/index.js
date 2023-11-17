import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Homepage from './Pages/HomePage/Homepage';
// import OurCar from './Pages/Our_Car/OurCar';
// import SelfDriven from './Pages/SelfDriven/SelfDriven';
// import ChaufferDrive from './Pages/ChaufferDriven/ChaufferDrive';
// import Get_App from './Pages/Get_App/Get_App';
// import CompanyProfile from './Pages/CompanyProfile/CompanyProfile';
// import Contact from './Pages/Contact/Contact';
import CarDetails from './Pages/Car_Details_Page/CarDetails';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <Homepage/> */}
    {/* <OurCar/> */}
    {/* <SelfDriven/> */}
    {/* <ChaufferDrive/> */}
    {/* <Get_App/> */}
    {/* <CompanyProfile/> */}
    {/* <Contact/> */}
    <CarDetails/>

  </React.StrictMode>
);

reportWebVitals();
