import React from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigate } from "react-router-dom";

const CardAuction = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/car/1")} className="h-[100px] flex justify-between items-center basis-[100%] md:basis-[45%] cursor-pointer">
      <div className="bg-main-orange rounded-md w-[100px] h-full flex flex-col justify-center items-center">
        <DirectionsCarIcon sx={{ color: "#fff" }} />
        <p className="text-xl font-bold text-white ">سيارة 170</p>
      </div>
      <div className="text-xl font-semibold text-main-blue">رقم المزاد</div>
      <div className="flex justify-center items-center gap-4">
        <HourglassBottomIcon sx={{ color: "#30475e" }} />
        <p className="text-lg font-medium text-main-blue">01:05:15</p>
        <ChevronLeftIcon sx={{ color: "#30475e" }} />
      </div>
    </div>
  );
};

export default CardAuction;
