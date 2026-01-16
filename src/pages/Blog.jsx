import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // DATA to'g'ridan-to'g'ri component ichida
  const blogs = [
    {
      id: "1",
      title: "Toshkent Qizilqum Sayohati Qiziqarli Lavhalar",
      author: "Admin",
      date: "2024-12-12",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Qizilqum cho‘llaridagi sayohat, lager hayoti va qiziqarli lahzalar.",
    },
    {
      id: "2",
      title: "Tog‘larda Lager Qilish Tajribasi",
      author: "Admin",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      video: "https://www.w3schools.com/html/movie.mp4",
      description: "Tog‘larda tunash, tabiat va sarguzashtlarga boy video blog.",
    },
        {
      id: "2",
      title: "Tog‘larda Lager Qilish Tajribasi",
      author: "Admin",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      video: "https://www.w3schools.com/html/movie.mp4",
      description: "Tog‘larda tunash, tabiat va sarguzashtlarga boy video blog.",
    },
        {
      id: "2",
      title: "Tog‘larda Lager Qilish Tajribasi",
      author: "Admin",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      video: "https://www.w3schools.com/html/movie.mp4",
      description: "Tog‘larda tunash, tabiat va sarguzashtlarga boy video blog.",
    },
        {
      id: "2",
      title: "Tog‘larda Lager Qilish Tajribasi",
      author: "Admin",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      video: "https://www.w3schools.com/html/movie.mp4",
      description: "Tog‘larda tunash, tabiat va sarguzashtlarga boy video blog.",
    },
        {
      id: "2",
      title: "Tog‘larda Lager Qilish Tajribasi",
      author: "Admin",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      video: "https://www.w3schools.com/html/movie.mp4",
      description: "Tog‘larda tunash, tabiat va sarguzashtlarga boy video blog.",
    },
    // Shu tarzda yana qo‘shish mumkin
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold">Sayohat va Lager Blogi</h1>
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Sayohat sarguzashtlari, lager hayoti va qiziqarli voqealar haqida eng so‘nggi maqolalar
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  className="h-56 w-full object-cover"
                  alt={blog.title}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                    ▶
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{blog.author} / {blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
