import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
    Routes,
    Route,

} from "react-router-dom";
import "./index.css";

import Homepage from './Pages/HomePage/Homepage';
import OurCar from "./Pages/Our_Car/OurCar";
import SelfDriven from './Pages/SelfDriven/SelfDriven';
import ChaufferDrive from './Pages/ChaufferDriven/ChaufferDrive';
import Get_App from './Pages/Get_App/Get_App';
import CompanyProfile from './Pages/CompanyProfile/CompanyProfile';
import Contact from './Pages/Contact/Contact';
// import CarDetails from './Pages/Car_Details_Page/CarDetails';

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/OurCar" element={<OurCar />} />
        <Route exact path="/SelfDriven" element={<SelfDriven />} />
        <Route exact path="/ChaufferDriven" element={<ChaufferDrive />} />
        <Route exact path="/Get_App" element={<Get_App />} />
        <Route exact path="/CompanyProfile" element={<CompanyProfile />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/home" element={<Homepage />} />
        {/* <Route exact path="/" element={<Homepage />} /> */}
       
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
