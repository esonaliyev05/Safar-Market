import { useMemo, useState } from "react";
import {
  FaCampground,
  FaCouch,
  FaUtensils,
  FaBriefcase,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import {PRODUCTS} from "../data/data.js";

const categories = [
  { name: "Chodirlar", slug: "chodirlar", icon: <FaCampground /> },
  { name: "Mebel", slug: "mebel", icon: <FaCouch /> },
  { name: "Oshxona jihozlari", slug: "oshxona", icon: <FaUtensils /> },
  { name: "Yotish uchun sumkalar", slug: "sumka", icon: <FaBriefcase /> },
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    return activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter(
          (item) => item.category === activeCategory
        );
  }, [activeCategory]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Kategoriya va Mahsulotlar
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-6 py-2 rounded-full border transition ${
            activeCategory === "all"
              ? "bg-emerald-600 text-white"
              : "hover:bg-emerald-50"
          }`}
        >
          Barchasi
        </button>

        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`flex items-center gap-2 px-6 py-2 rounded-full border transition ${
              activeCategory === cat.slug
                ? "bg-emerald-600 text-white"
                : "hover:bg-emerald-50"
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const isLiked = liked.includes(product.id);

          return (
            <div
              key={product.id}
              className="bg-emerald-50 rounded-2xl p-4 hover:shadow-xl transition relative"
            >
              {/* LIKE */}
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-4 right-4 text-red-500"
              >
                {isLiked ? <FaHeart /> : <FaRegHeart />}
              </button>

              <Link to={`/product/${product.id}`}>
                <div className="bg-white rounded-xl p-4 mb-4 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 object-contain"
                  />
                </div>
              </Link>

              <h3 className="font-semibold mb-1">
                {product.title}
              </h3>

              <p className="text-sm text-yellow-500 mb-2">
                ⭐ {product.rating}/5
              </p>

              <div className="flex items-center gap-2">
                <span className="text-lg font-bold">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <span className="text-sm line-through text-gray-400">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-emerald-600 hover:text-white transition">
                <AiOutlineShoppingCart size={20} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Product;
