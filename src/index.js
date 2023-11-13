import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Homepage from './Pages/HomePage/Homepage';
// import OurCar from './Pages/Our_Car/OurCar';
// import SelfDriven from './Pages/SelfDriven/SelfDriven';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Homepage/>
    {/* <OurCar/> */}
    {/* <SelfDriven/> */}
    
  </React.StrictMode>
);

reportWebVitals();
