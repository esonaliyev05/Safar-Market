import React from "react";

const Loader = () => {
  return (
    <div className="fixed h-screen inset-0 z-50 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-600">

      {/* Creative background circles */}
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/20 rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Central SM logo */}
      <div className="relative z-10 w-24 h-24 flex justify-center items-center">
        <div className="absolute inset-0 rounded-full border-4 border-white animate-ping opacity-70"></div>
        <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center text-green-500 font-bold text-2xl animate-breath">
          SM
        </div>
      </div>

      {/* Loading text */}
      <p className="absolute bottom-10 text-white text-lg font-semibold animate-pulse">
        Loading SafarMarket...
      </p>

      <style>{`
        @keyframes breath {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-breath { animation: breath 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Loader;
