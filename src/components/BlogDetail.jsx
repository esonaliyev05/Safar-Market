import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  // DATA component ichida
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
  ];

  const blog = blogs.find((item) => item.id === id);

  if (!blog) {
    return <div className="text-center mt-20 text-gray-700 text-xl">Blog topilmadi ❌</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link to="/" className="text-indigo-600 font-medium mb-6 inline-block">← Orqaga</Link>

        <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
        <p className="text-gray-500 mt-2">{blog.author} / {blog.date}</p>

        <div className="mt-6 rounded-xl overflow-hidden shadow">
          <video src={blog.video} controls className="w-full h-auto" />
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
