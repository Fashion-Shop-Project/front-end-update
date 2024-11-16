import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const paymentMethods = [
    "Thanh toán qua ngân hàng",
    "Thanh toán qua Momo",
    "Thanh toán qua VNPay",
    "Thanh toán khi nhận hàng",
  ];
  
  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
    setIsDropdownOpen(false);
  };

  const handlePayment = () => {
    navigate("/order-status", { state: { formData, products } });
  };
  const { formData, products } = location.state || {};
  if (!formData) {
    navigate("/checkout");
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col space-y-6">
        {/* Thông tin người nhận */}
        <div className="bg-pink-100 p-4 md:p-6 rounded-lg flex flex-col md:flex-row md:justify-between items-start md:items-center">
          <div className="flex flex-col md:flex-row items-start">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-female-circle-pink-512.png"
              alt="User Avatar"
              className="w-14 h-14 rounded-full mb-4 md:mb-0 md:mr-4"
            />
            <h1 className="text-2xl font-bold mb-6">Thông tin Thanh Toán</h1>
            <div className="bg-pink-100 p-4 md:p-6 rounded-lg mb-6">
              <div className="flex flex-col space-y-4">
                <p className="text-lg font-bold">
                  Tên: <span className="font-normal">{formData.firstName} {formData.lastName}</span>
                </p>
                <p className="text-lg font-bold">
                  Email: <span className="font-normal">{formData.email}</span>
                </p>
                <p className="text-lg font-bold">
                  Số điện thoại: <span className="font-normal">{formData.phone}</span>
                </p>
                <p className="text-lg font-bold">
                  Địa chỉ: <span className="font-normal">{formData.address}, {formData.city}</span>
                </p>
              </div>
              <button
                onClick={() => navigate("/checkout", { state: { formData } })}
                className="mt-4 px-4 py-2 bg-pink-500 text-white text-sm rounded-lg hover:bg-pink-600"
              >
                Chỉnh sửa thông tin
              </button>
            </div>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl">DANH SÁCH SẢN PHẨM</h3>
          <div className="flex flex-col space-y-4">
            {/* Sản phẩm 1 */}
            <div className="flex items-center space-x-4">
              <img
                src="https://product.hstatic.net/200000037048/product/z4212735302768_a78e682fdb2689b53bc692f84aa46aaf_79cd5fd2a166459ca86a7e2606db80b6_master.jpg"
                alt="Blazer dáng dài hồng nhạt"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-sm md:text-base">
                  Blazer dáng dài hồng nhạt
                </h3>
                <p className="text-sm">Số lượng: x1</p>
              </div>
              <p className="ml-auto font-bold text-sm md:text-base">519.000</p>
            </div>

            {/* Sản phẩm 2 */}
            <div className="flex items-center space-x-4">
              <img
                src="https://hanibydesign.com/wp-content/uploads/2022/08/7cde20e5e28af9d9a2dadc398107bbe5dfdd15fe.jpg"
                alt="Váy hoa thiết kế tay phồng họa tiết hoa đỏ"
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-sm md:text-base">
                  Váy hoa thiết kế tay phồng họa tiết hoa đỏ
                </h3>
                <p className="text-sm">Số lượng: x1</p>
              </div>
              <p className="ml-auto font-bold text-sm md:text-base">439.000</p>
            </div>
          </div>
        </div>

        {/* Phí vận chuyển và voucher */}
        <div className="space-y-6">
          <div className="flex justify-between items-center font-bold text-sm md:text-base">
            <span>🚚 Phí vận chuyển:</span>
            <span>40.000</span>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4">
            <span className="font-bold">🎟️ Voucher:</span>
            <input
              type="text"
              placeholder="Nhập mã voucher"
              className="border rounded p-2 w-full md:w-auto"
            />
            <span className="font-bold text-red-500 mt-2 md:mt-0">-30.000</span>
          </div>
        </div>

        {/* Phương thức thanh toán */}
        <div className="space-y-2">
          <h3 className="text-lg font-bold">💳 Phương thức thanh toán:</h3>
          <div className="relative">
            <div
              className={`border rounded p-2 cursor-pointer flex justify-between items-center ${selectedMethod ? "text-black" : "text-gray-400"
                }`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedMethod || "Chọn phương thức"}</span>
              <span className="ml-2">&#9662;</span>
            </div>
            {isDropdownOpen && (
              <ul className="absolute z-10 bg-white border rounded shadow-lg mt-2 w-full max-h-48 overflow-y-auto">
                {paymentMethods.map((method, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSelectMethod(method)}
                  >
                    {method}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Ghi chú */}
        <div className="flex flex-col space-y-2">
          <span className="font-bold">📝 Ghi chú:</span>
          <textarea
            placeholder="Nhập ghi chú"
            className="border rounded p-2 w-full"
          ></textarea>
        </div>

        {/* Tổng tiền */}
        <div className="flex justify-between items-center border-t border-gray-300 pt-4">
          <h3 className="text-lg font-bold">💰 TỔNG TIỀN:</h3>
          <span className="text-xl font-bold text-red-600">968.000</span>
        </div>

        {/* Nút Thanh Toán */}
        <div className="flex justify-center">
        <button
          onClick={handlePayment}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Xác nhận Thanh toán
        </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
