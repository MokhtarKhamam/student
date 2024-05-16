import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type cardWrapperProps = {
  children: React.ReactNode;
  header: string;
  forgetText: string;
  forgetHref: string;
  submitText: string;
  submitHref: string;
  firstBackText: string;
  secondBackText: string;
  backHref: string;
  onSubmit: () => void;
};

const CardWrapper = ({
  children,
  header,
  forgetHref,
  submitText,
  submitHref,
  firstBackText,
  secondBackText,
  backHref,
  onSubmit,
}: cardWrapperProps) => {


  return (
    <Card sx={{ width: "100%",maxWidth: "500px", p: 4, margin: "auto", mt: 4 }}>
      <CardContent>
        <div className="space-y-6 flex flex-col justify-center items-center">
          <CardMedia
            component="img"
            image="/assets/law.jpg"
            sx={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <p className="text-xl text-main-orange">شركة رابح للمزادات</p>
          <p className="text-xl font-semibold text-main-blue">{header}</p>
        </div>
      </CardContent>
      {children}
      <div className="space-y-6">
        <Link
          to={forgetHref}
          className="text-lg font-medium text-main-blue mt-4 block"
        >
          نسيت كلمة المرور؟
        </Link>
        <button onClick={onSubmit} className="w-full bg-main-orange rounded-2xl text-lg text-white mt-6 px-2 py-1">
          {submitText}
        </button>
        <span className="text-main-blue text-md font-semibold mt-4 block">
          {firstBackText}&nbsp;
          <Link className="underline text-main-orange" to={backHref}>
            {secondBackText}
          </Link>
        </span>
      </div>
    </Card>
  );
};

export default CardWrapper;
