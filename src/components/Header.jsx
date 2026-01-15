import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch, FaChevronDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa6";
import { Link } from "react-router-dom";


const languages = [
  { code: "uz", label: "UZ", flag: "🇺🇿" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
];

const Header = () => {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 overflow-hidden bg-white shadow-md">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}

          <Link to={"/"}> 
          <div className="flex items-center gap-3 group">
       
       <div className="relative">
     
      <img
           src="/c64f0fc6-2fbe-4fdd-9fba-460270b77a19.jpg"
           alt="SafarMarket Logo"
           className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-gray-200 shadow-md"
         />
      
       </div>
       <span className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
         SafarMarket
       </span>
     </div>

          
          </Link>
      
          {/* Desktop Navigation + Search + Actions */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Nav */}
            <nav className="flex gap-8 font-medium text-gray-800">
              {["Bosh sahifa", "Mahsulotlar", "Aloqa", "Blog"].map((item) => (
                <a
                  key={item}
                  href={item === "Bosh sahifa" ? "/" : `/${item.toLowerCase()}`}
                  className="relative py-2 text-gray-700 transition-colors hover:text-emerald-700 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Search */}
            <div className="relative w-72">
              <input
                type="text"
                placeholder="Mahsulot izlash..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 focus:outline-none shadow-sm transition-all duration-300"
              />
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-emerald-500/70" />
            </div>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 border border-emerald-200 rounded-full px-4 py-2 text-sm bg-white/90 hover:bg-white shadow-sm transition"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <FaChevronDown className={`transition-transform ${langDropdownOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {/* Dropdown */}
              {langDropdownOpen && (
                <div className="absolute mt-2 w-32 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangDropdownOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-emerald-50 transition"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                 
            <button className="relative text-gray-700 hover:text-emerald-600 transition-colors">
                <FaRegHeart size={24} />
              </button>
                

              <button className="relative text-gray-700 hover:text-emerald-600 transition-colors">
                <FaShoppingCart size={24} />
              </button>

              <Link
                to={"/auth"}
                className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-2.5 rounded-full font-medium hover:from-emerald-700 hover:to-teal-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Kirish
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-white/95 backdrop-blur-md shadow-2xl transform transition-all duration-400 ease-in-out ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Mahsulot izlash..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-emerald-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200/50 outline-none bg-white/80"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500/70" />
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3 font-medium text-lg text-gray-800">
            {["Bosh sahifa", "Mahsulotlar", "Aloqa", "Blog"].map((item) => (
              <a
                key={item}
                href={item === "Bosh sahifa" ? "/" : `/${item.toLowerCase()}`}
                className="py-3 px-5 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex flex-col z-10 sm:flex-row gap-4 pt-4 border-t border-gray-200 items-center">
            {/* Language Selector */}
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 w-full sm:w-auto border border-emerald-200 rounded-full px-4 py-2 text-sm bg-white hover:bg-white/90 shadow-sm transition"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
                <FaChevronDown className={`transition-transform ${langDropdownOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              {langDropdownOpen && (
                <div className="absolute mt-2 w-32 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-emerald-50 transition"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/auth"
              className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-3 px-6 rounded-full text-center font-medium hover:brightness-110 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kirish
            </Link>
            <button
              className="flex items-center justify-center gap-3 py-3 px-6 border border-emerald-200 rounded-full hover:bg-emerald-50 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaShoppingCart size={20} />
              <span>Savat</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
