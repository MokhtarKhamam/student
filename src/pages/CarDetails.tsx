import React from "react";
import CarDescription from "../components/carDetails/CarDescription.tsx";
import CarAuction from "../components/carDetails/CarAuction.tsx";
import SliderImage from "../components/carDetails/SliderImage/SliderImage.tsx";
import CarTime from "../components/carDetails/CarTime.tsx";

const CarDetails = () => {
  return (
    <>
      <SliderImage />
      <CarTime />
      <CarDescription />
      <CarAuction />
    </>
  );
};

export default CarDetails;
