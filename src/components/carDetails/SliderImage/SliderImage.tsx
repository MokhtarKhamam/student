import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <img
              src="/assets/car-1.jpg"
              alt=""
              className="w-screen  h-[250px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/assets/image-3.jpg"
              alt=""
              className="w-screen  h-[250px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              src="/assets/image-2.webp"
              alt=""
              className="w-screen  h-[250px] object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
