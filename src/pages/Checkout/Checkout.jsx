import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm"; // Đảm bảo đường dẫn chính xác

const Checkout = () => {
  // Danh sách sản phẩm trong giỏ hàng
  const [cartItems] = useState([
    { id: 1, name: "Áo thun", price: 150000, quantity: 2 },
    { id: 2, name: "Quần jeans", price: 300000, quantity: 1 },
  ]);

  // Tính tổng tiền giỏ hàng
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Hàm xử lý khi thanh toán
  const handleCheckout = (formData) => {
    console.log("Thông tin khách hàng:", formData);
    console.log("Danh sách sản phẩm:", cartItems);
    console.log("Tổng tiền:", totalPrice.toLocaleString() + " VND");
    alert("Thanh toán thành công!");
  };

  return (
    <div className="checkout-page">
      <h1 className="text-3xl font-bold text-center mb-6">Trang Thanh Toán</h1>
      {/* Gửi dữ liệu cartItems, totalPrice và handleCheckout xuống CheckoutForm */}
      <CheckoutForm
        cartItems={cartItems}
        totalPrice={totalPrice}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};

export default Checkout;
