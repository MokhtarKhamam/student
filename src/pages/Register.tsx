import React from "react";
import CardWrapper from "../components/auth/CardWrapper.tsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const handleRegister = () => {
    console.log('Register button clicked');
    navigate("/company")
  };
  return (
    <CardWrapper
      header="انشاء حساب جديد"
      forgetText="نسيت كلمة المرور"
      forgetHref="/forget"
      submitHref="/"
      submitText="انشاء حساب"
      firstBackText="لديك حساب"
      secondBackText="قم بتسجيل الدخول"
      backHref="/login"
      onSubmit={handleRegister}
    >
      <form className="space-y-6">
        <input
          type="text"
          placeholder="رقم الهاتف"
          className="w-full p-2 border border-gray-300 focus:outline-none rounded-lg"
        />
        <input
          type="text"
          placeholder="كلمة المرور"
          className="w-full p-2 border border-gray-300 focus:outline-none rounded-lg"
        />
        <input
          type="text"
          placeholder="تأكيد كلمة المرور"
          className="w-full p-2 border border-gray-300 focus:outline-none rounded-lg"
        />
      </form>
    </CardWrapper>
  );
};

export default Register;
