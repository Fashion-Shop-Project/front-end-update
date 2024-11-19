import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext.jsx";
import { message } from "antd";

// Tạo hàm format tiền tệ
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartState, cartDispatch } = useCart();
  const [note, setNote] = useState("");

  const paymentMethods = [
    "Thanh toán qua ngân hàng",
    "Thanh toán qua Momo",
    "Thanh toán qua VNPay",
    "Thanh toán khi nhận hàng",
  ];

  // Tính tổng tiền từ giỏ hàng
  const totalPrice = cartState.cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Phí vận chuyển
  const shippingFee = 30000;

  // Tổng tiền cuối cùng
  const finalTotal = totalPrice + shippingFee;
  
  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    setIsDropdownOpen(false);
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      message.error("Vui lòng chọn phương thức thanh toán");
      return;
    }

    // Tạo đối tượng đơn hàng
    const orderData = {
      items: cartState.cartItems,
      totalPrice: finalTotal,
      paymentMethod: selectedMethod,
      note: note,
      shippingFee: shippingFee,
      orderDate: new Date().toISOString(),
    };

    // Chuyển đến trang trạng thái đơn hàng
    navigate("/order-status", { 
      state: { 
        orderData,
        formData: location.state?.formData 
      } 
    });

    // Xóa giỏ hàng sau khi đặt hàng thành công
    cartDispatch({ type: "CLEAR_CART" });
    message.success("Đặt hàng thành công!");
  };

  // Kiểm tra nếu giỏ hàng trống
  useEffect(() => {
    if (cartState.cartItems.length === 0) {
      message.info("Giỏ hàng trống");
      navigate("/");
    }
  }, [cartState.cartItems, navigate]);

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-2xl font-bold mb-6">Thanh toán</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Thông tin đơn hàng */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thông tin đơn hàng</h2>
          
          {/* Danh sách sản phẩm */}
          <div className="space-y-4 mb-6">
            {cartState.cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">Số lượng: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}
          </div>

          {/* Chi tiết thanh toán */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Tạm tính:</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Phí vận chuyển:</span>
              <span>{formatCurrency(shippingFee)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Tổng cộng:</span>
              <span className="text-red-600">{formatCurrency(finalTotal)}</span>
            </div>
          </div>
        </div>

        {/* Phương thức thanh toán */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Phương thức thanh toán</h2>
          
          <div className="relative mb-6">
            <div
              className="border rounded-lg p-3 cursor-pointer flex justify-between items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedMethod || "Chọn phương thức thanh toán"}</span>
              <span className={`transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </div>
            
            {isDropdownOpen && (
              <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-lg z-10">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelectMethod(method)}
                  >
                    {method}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Ghi chú */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Ghi chú:</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Nhập ghi chú cho đơn hàng"
              className="w-full border rounded-lg p-2 min-h-[100px]"
            />
          </div>

          {/* Nút thanh toán */}
          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Xác nhận thanh toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
