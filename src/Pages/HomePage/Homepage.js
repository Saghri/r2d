import React from "react";

import Header from "../../Components/Header/Header";
import SearhCar from "../../Components/SearchCars/SearchCar";
import CarCategories from "../../Components/CarCategories/CarCategories";
import Customer from "../../Components/Customers/Customers";
import DownloadApp from "../../Components/DownloadApp/DownloadApp";
import Features from "../../Components/Features/Features";
import RentalFeet from "../../Components/RentalFleets/RentalFleets";
import TopBrands from "../../Components/TopBrands/TopBrands";
import Testimonial from "../../Components/Testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <Header />
      <SearhCar />
      <CarCategories />
      <TopBrands />
      <RentalFeet />
      <Customer />
      <Features />
      <DownloadApp />
      <Testimonial />
      <Footer />
    </>
  );
}
