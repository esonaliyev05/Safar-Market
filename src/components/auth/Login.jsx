import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = ({ switchToRegister }) => {
  return (
    <form className="flex flex-col gap-4">
      <div className="relative" data-aos="fade-right">
        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-12 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-emerald-200/50 focus:outline-none shadow-sm"
        />
      </div>

      <div className="relative" data-aos="fade-left">
        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="password"
          placeholder="Parol"
          className="w-full pl-12 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-emerald-200/50 focus:outline-none shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 rounded-full font-medium shadow-lg hover:brightness-110 transition-all mt-2"
        data-aos="zoom-in"
      >
        Kirish
      </button>

      <p className="text-center text-gray-500 mt-2" data-aos="fade-up">
        Hisobingiz yo‘qmi?{" "}
        <button
          onClick={switchToRegister}
          className="text-emerald-700 font-medium hover:underline"
        >
          Ro'yxatdan o'tish
        </button>
      </p>
    </form>
  );
};

export default Login;
