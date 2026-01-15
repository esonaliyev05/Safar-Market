import { useState, useEffect } from "react";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import AOS from "aos";
import "aos/dist/aos.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600">
      {/* Creative background */}
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/20 rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Form Card */}
      <div
        className="relative z-10 max-w-md w-full bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-700 to-teal-800 bg-clip-text text-transparent">
          {isLogin ? "Kirish" : "Ro'yxatdan o'tish"}
        </h1>

        {/* Toggle buttons with smooth slider */}
        <div className="relative flex justify-center gap-4 mb-6 bg-gray-200 rounded-full p-1">
          {/* Active slider */}
          <span
            className={`absolute top-0 left-0 h-full w-1/2 bg-emerald-500 rounded-full transition-all duration-500 ease-in-out transform ${
              !isLogin ? "translate-x-full bg-teal-700" : ""
            }`}
          ></span>

          <button
            onClick={() => setIsLogin(true)}
            className={`relative z-10 w-1/2 py-2 font-medium text-sm sm:text-base rounded-full transition-colors duration-500 ${
              isLogin ? "text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Kirish
          </button>

          <button
            onClick={() => setIsLogin(false)}
            className={`relative z-10 w-1/2 py-2 font-medium text-sm sm:text-base rounded-full transition-colors duration-500 ${
              !isLogin ? "text-white" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Ro'yxatdan o'tish
          </button>
        </div>

        {/* Form wrapper with smooth slide + fade */}
        <div className="relative h-[320px] overflow-hidden">
          {/* Login */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              isLogin
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 -translate-x-10 z-0 pointer-events-none"
            }`}
          >
            <Login switchToRegister={() => setIsLogin(false)} />
          </div>

          {/* Register */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              !isLogin
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-10 z-0 pointer-events-none"
            }`}
          >
            <Register switchToLogin={() => setIsLogin(true)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
