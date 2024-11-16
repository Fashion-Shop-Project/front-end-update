import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

function CartIcon() {
  const navigate = useNavigate();

  // Dữ liệu sản phẩm trong giỏ hàng
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sản phẩm 1",
      price: 100000,
      quantity: 1,
      image: "/images/products/image1.jpg",
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      price: 200000,
      quantity: 2,
      image: "/images/products/image2.jpg",
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0); // Tổng giá trị giỏ hàng
  const [isCartOpen, setIsCartOpen] = useState(false); // Trạng thái hiển thị dropdown giỏ hàng

  // Tính tổng giá khi giỏ hàng thay đổi
  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cartItems]);

  // Tăng số lượng sản phẩm
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Giảm số lượng sản phẩm
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Xử lý khi nhấn vào biểu tượng giỏ hàng
  const handleCartClick = () => {
    navigate("/checkout"); // Chuyển hướng đến trang checkout
  };

  return (
    <div
      className="relative ml-4 group"
      onMouseEnter={() => setIsCartOpen(true)}
      onMouseLeave={() => setIsCartOpen(false)}
    >
      {/* Icon Giỏ Hàng */}
      <div
        onClick={handleCartClick}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <ShoppingCartOutlined style={{ fontSize: "24px" }} />
        <span className="text-lg font-semibold">{cartItems.length}</span>
      </div>

      {/* Mini Giỏ Hàng (Hiển thị khi hover) */}
      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 opacity-100 transition-opacity duration-300 z-10">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Giỏ hàng trống</p>
          ) : (
            <div>
              <h3 className="font-semibold text-lg mb-2">Sản phẩm trong giỏ</h3>
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded mr-2"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Giá: {item.price.toLocaleString()} VND
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-right font-semibold">
                Tổng: {totalPrice.toLocaleString()} VND
              </div>
              <Link
                to="/checkout"
                className="block mt-4 text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Tiến hành thanh toán
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartIcon;
