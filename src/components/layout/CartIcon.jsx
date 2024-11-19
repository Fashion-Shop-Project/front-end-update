import React, { useState, useEffect, useRef } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

function CartIcon() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { cartState, cartDispatch } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const total = cartState.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cartState.cartItems]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 2000);
  };

  const handleQuantityChange = (itemId, change) => {
    const item = cartState.cartItems.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        cartDispatch({
          type: "UPDATE_QUANTITY",
          payload: { id: itemId, quantity: newQuantity },
        });
      } else {
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: itemId,
        });
      }
    }
  };

  const handleRemoveItem = (itemId) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: itemId,
    });
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center cursor-pointer">
        <ShoppingCartOutlined style={{ fontSize: "24px" }} />
        {cartState.cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartState.cartItems.length}
          </span>
        )}
      </div>

      {isDropdownVisible && (
        <div 
          className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="p-4">
            {cartState.cartItems.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Giỏ hàng trống
              </div>
            ) : (
              <>
                <h3 className="font-semibold mb-4 border-b pb-2">Giỏ hàng của bạn</h3>
                <ul className="max-h-60 overflow-auto">
                  {cartState.cartItems.map((item) => (
                    <li key={item.id} className="flex items-center gap-4 mb-4 border-b pb-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{item.name}</h4>
                        <p className="text-gray-600 text-sm">
                          {formatCurrency(item.price)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, -1)}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            +
                          </button>
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="ml-2 text-red-500 text-sm hover:text-red-700"
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between font-semibold mb-4">
                    <span>Tổng cộng:</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                  <Link
                    to="/checkout"
                    className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    Thanh toán
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CartIcon;
