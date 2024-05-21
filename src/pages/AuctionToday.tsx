import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CardAuction from "../components/cardAuction/CardAuction.tsx";

const AuctionToday = () => {
  return (
    <div className="container mx-auto mt-8">
      <div>
        <h6
          className="text-main-orange font-bold text-2xl text-center border-2
         border-gray-300 rounded-2xl px-2 py-1"
        >
          مزادات اليوم
        </h6>

        <div className="mt-8 py-2 flex justify-center items-center bg-gray-300 rounded-xl">
          <div className="flex justify-center items-center gap-4 py-2 border-l border-gray-700 basis-[45%]">
            <LocationOnIcon sx={{ color: "#f2a365" }} />
            <p className="font-semibold text-xl text-main-blue">الموقع</p>
            <ArrowDropDownIcon sx={{ color: "#f2a365" }} />
          </div>
          <div className="flex justify-center items-center gap-4 bg-gray-300 px-4 py-2 basis-[45%]">
            <AccessAlarmIcon sx={{ color: "#f2a365" }} />
            <p className="font-semibold text-xl text-main-blue">التوقيت</p>
            <ArrowDropDownIcon sx={{ color: "#f2a365" }} />
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-between gap-8 my-8">
      {
        [1, 2, 3, 4, 5, 6].map((element, index) => (
          <CardAuction />
        ))
      }
      </div>
    </div>
  );
};

export default AuctionToday;
