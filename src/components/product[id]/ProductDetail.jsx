import React from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/data";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();

  const product = PRODUCTS.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20">
        Mahsulot topilmadi
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-emerald-600 mb-6"
      >
        <FaArrowLeft /> Orqaga
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-emerald-50 rounded-2xl p-6 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 object-contain"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-4">
            {product.description}
          </p>

          <p className="text-yellow-500 mb-2">
            ⭐ {product.rating}/5
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="line-through text-gray-400">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <button className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition inline-flex items-center gap-2">
            <AiOutlineShoppingCart size={22} />
            Savatchaga qo‘shish
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
