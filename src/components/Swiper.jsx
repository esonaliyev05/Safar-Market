import React, { useEffect } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    title: "Zo'r jihozlar bilan sarguzashtlarni kashf eting",
    description:
      "Sarguzasht ishqibozlari uchun mo‘ljallangan ochiq havoda kerakli jihozlarimizni kashf eting. Yuqori sifatli chodirlardan qulay lager anjomlarigacha, hammasi sizning tajribangizni yuksaltirish uchun.",
    button: "Xarid qiling",
    image: "/image.png",
    stats: [
      { value: "200+", label: "Xalqaro brendlar" },
      { value: "2,000+", label: "Yuqori Sifatli Mahsulotlar" },
      { value: "30,000+", label: "Baxtli mijozlar" },
    ],
  },
  {
    title: "Outdoor sarguzasht uchun barcha jihozlar",
    description:
      "Bizning to‘plamlarimiz bilan har qanday tabiat safarini xavfsiz va qulay o'tkazing. Eng yaxshi sifat va ishonchli brendlar.",
    button: "Batafsil ko‘rish",
    image: "image.jpg",
    stats: [
      { value: "150+", label: "Xalqaro brendlar" },
      { value: "1,500+", label: "Yuqori Sifatli Mahsulotlar" },
      { value: "25,000+", label: "Baxtli mijozlar" },
    ],
  },
];

const Swiper = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <SwiperComponent
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} transition-all duration-300 w-3 h-3 sm:w-4 sm:h-4 rounded-full mx-1 bg-gray-300"></span>`,
            bulletActiveClass:
              "bg-emerald-700 w-6 h-3 sm:w-8 sm:h-3 rounded-full transition-all duration-300",
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2 w-full flex flex-col justify-center" data-aos="fade-right">
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 break-words"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {slide.title}
                  </h2>
                  <p
                    className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg break-words"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {slide.description}
                  </p>
                  <button
                    className="bg-emerald-700 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-800 transition mb-6 w-max"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    {slide.button}
                  </button>

                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-10" data-aos="fade-up" data-aos-delay="400">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</span>
                        <span className="text-gray-500 text-sm sm:text-base">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0" data-aos="fade-left" data-aos-delay="400">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-xl shadow-lg w-full max-w-full h-98 object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </section>
  );
};

export default Swiper;
