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

        {/* Toggle buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              isLogin
                ? "bg-emerald-700 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Kirish
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              !isLogin
                ? "bg-teal-700 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Ro'yxatdan o'tish
          </button>
        </div>

        {/* Form */}
        {isLogin ? <Login switchToRegister={() => setIsLogin(false)} /> : <Register switchToLogin={() => setIsLogin(true)} />}
      </div>
    </div>
  );
};

export default Auth;
