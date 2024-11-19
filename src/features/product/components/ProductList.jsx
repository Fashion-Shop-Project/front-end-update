import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { message } from "antd";

// Hàm format tiền tệ
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

function ProductList({ title, products, oldProducts = false }) {
  const { cartDispatch } = useCart();

  const handleAddToCart = (product) => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      },
    });
    message.success("Đã thêm sản phẩm vào giỏ hàng!");
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, i) => (
          <div key={i} className="relative group p-4">
            <Link to={`/product/${product.id}`} className="block">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="text-center mt-2">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-700">
                  {oldProducts && (
                    <span className="line-through mr-2">
                      {formatCurrency(product.oldPrice)}
                    </span>
                  )}
                  {formatCurrency(product.price)}
                </p>
              </div>
            </Link>

            <div className="flex justify-center space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => handleAddToCart(product)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                Thêm giỏ hàng
              </button>
              <Link 
                to={`/product/${product.id}`}
                className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-gold transition duration-300"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;