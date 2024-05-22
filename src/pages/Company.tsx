import React from "react";

const image = [
  {
    name: "مزاد سيارات",
    image: "/assets/car.webp"
  },
  {
    name: "مزاد عقارات",
    image: "/عقارات.png",
  },
  {
    name: "مزاد موتورات",
    image: "/assets/motor.jpg",
  },
];

const Company = () => {
  return (
    <div className="container mx-auto my-8 flex justify-center items-center gap-4 flex-wrap ">
      {image.map((item, index) => {
        return (
          <div key={index} className="flex justify-center items-center flex-col gap-y-4 w-full">
            <h6 className="text-3xl font-semibold text-main-blue text-center">{item.name}</h6>
            <img
              src={item.image}
              alt="car"
              className="w-[80%] h-[500px] object-cover rounded-md shadow-md cursor-pointer"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Company;
