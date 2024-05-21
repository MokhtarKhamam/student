import React from "react";

const image = [
  "/assets/car.webp",
  "/assets/motor.jpg",
  "/assets/شؤؤثيثىف.jpg",
  "/assets/oldcar.avif",
  "/assets/bus.jpg",
];

const Company = () => {
  return (
    <div className="container mx-auto my-8 flex justify-center items-center gap-4 flex-wrap ">
      {image.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={item}
              alt="car"
              className="w-[300px] h-[300px] object-cover rounded-md shadow-md cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Company;
