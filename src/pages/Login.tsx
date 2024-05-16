import React from "react";
import CardWrapper from "../components/auth/CardWrapper.tsx";

const Login = () => {

  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <CardWrapper
      header="تسجيل الدخول"
      forgetText="نسيت كلمة المرور"
      forgetHref="/forget"
      submitHref="/"
      submitText="تسجيل الدخول"
      firstBackText="ليس لديك حساب"
      secondBackText="قم بانشاء حساب جديد"
      backHref="/register"
      onSubmit={handleLogin}
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
      </form>
    </CardWrapper>
  );
};

export default Login;
