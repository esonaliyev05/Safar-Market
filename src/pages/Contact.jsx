import React,{useState} from 'react'
import { MapPin, Phone, Mail } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Xabaringiz yuborildi!');
  };
  return (
   <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative max-w-7xl mx-auto h-[466px] bg-[url('/bg-image.png')] bg-no-repeat bg-cover bg-center"
        
      >
        <div className="absolute inset-0  bg-opacity-30"></div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Biz bilan bog'laning
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl sm:block mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Keling, biz bilan gaplashaylik
            </h2>
            <p className="text-gray-600 mb-8">
              Savollar, shariklar yoki takliflar? Shaklin to'ldiring va biz siz orqada qoldirishning.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Manzil</h3>
                  <p className="text-gray-600">
                    1055 Arthur ave Elk Groot, 67.<br />
                    New Palmas South Carolina.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefon</h3>
                  <p className="text-gray-600">+1 234 678 9108 99</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">Contact@moralizer.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <div className="space-y-4 ">
              {/* Name Fields */}
              <div className=" sm:grid-cols-1 grid sm:grid-cols-1 grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              ></textarea>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact