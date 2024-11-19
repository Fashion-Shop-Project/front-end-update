import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const navigate = useNavigate();
  
  const [cartItems] = useState([
    { id: 1, name: "Áo thun", price: 150000, quantity: 2 },
    { id: 2, name: "Quần jeans", price: 300000, quantity: 1 },
  ]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async (formData) => {
    try {
      console.log("Thông tin khách hàng:", formData);
      console.log("Danh sách sản phẩm:", cartItems);
      console.log("Tổng tiền:", totalPrice);
      navigate('/');
    } catch (error) {
      console.error('Lỗi khi đặt hàng:', error);
      throw error;
    }
  };

  return (
    <div className="checkout-page">
      <h1 className="text-3xl font-bold text-center mb-6">Thanh Toán</h1>
      <CheckoutForm
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};

export default Checkout; 