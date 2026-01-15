import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = ({ switchToLogin }) => {
  return (
    <form className="flex flex-col gap-4">
      <div className="relative" data-aos="fade-right">
        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Ism"
          className="w-full pl-12 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-teal-200/50 focus:outline-none shadow-sm"
        />
      </div>

      <div className="relative" data-aos="fade-left">
        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-12 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-teal-200/50 focus:outline-none shadow-sm"
        />
      </div>

      <div className="relative" data-aos="fade-right">
        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="password"
          placeholder="Parol"
          className="w-full pl-12 pr-4 py-3 border rounded-full focus:ring-2 focus:ring-teal-200/50 focus:outline-none shadow-sm"
        />
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white py-3 rounded-full font-medium shadow-lg hover:brightness-110 transition-all mt-2"
        data-aos="zoom-in"
      >
        Ro'yxatdan o'tish
      </button>

      <p className="text-center text-gray-500 mt-2" data-aos="fade-up">
        Hisobingiz bormi?{" "}
        <button
          onClick={switchToLogin}
          className="text-teal-700 font-medium hover:underline"
        >
          Kirish
        </button>
      </p>
    </form>
  );
};

export default Register;
