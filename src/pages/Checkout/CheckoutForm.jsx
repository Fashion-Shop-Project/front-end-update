import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ handleCheckout }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Điều hướng đến trang Payment cùng với dữ liệu form
    navigate("/payment", { state: { formData } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Thông tin thanh toán</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className="block font-medium">
            Tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block font-medium">
            Họ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-medium">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-medium">
            Địa chỉ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block font-medium">
            Thành phố <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full border px-3 py-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          Hoàn tất
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
