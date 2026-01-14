import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 mt-12 border-t border-gray-200">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #10b981 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, #059669 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800 relative z-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
              SafarMarket
            </h3>
            <p className="text-gray-600">
              Onlayn bozoringiz uchun barcha kerakli mahsulotlar va xizmatlar. Biz bilan xarid qilish qulay va ishonchli.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tezkor Havolalar</h3>
            <ul className="text-gray-600 space-y-2">
              {["Bosh sahifa", "Mahsulotlar", "Aloqa", "Blog"].map((link) => (
                <li key={link}>
                  <a href={link === "Bosh sahifa" ? "/" : `/${link.toLowerCase()}`} className="hover:text-emerald-600 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aloqa</h3>
            <p className="flex items-center gap-2 text-gray-600 mb-1">
              <FaMapMarkerAlt /> Toshkent, O‘zbekiston
            </p>
            <p className="flex items-center gap-2 text-gray-600 mb-1">
              <FaPhoneAlt /> +998 90 123 45 67
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <FaEnvelope /> info@safarmarket.uz
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm relative z-10">
          <p>© 2026 SafarMarket. Barcha huquqlar himoyalangan.</p>
          <div className="mt-3 sm:mt-0 flex gap-4">
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
