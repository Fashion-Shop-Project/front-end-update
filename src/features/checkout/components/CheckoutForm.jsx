import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ handleCheckout }) {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
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

  const validateForm = () => {
    const newErrors = {};
    
    // Kiểm tra từng trường
    if (!formData.firstName.trim()) newErrors.firstName = "Vui lòng nhập tên";
    if (!formData.lastName.trim()) newErrors.lastName = "Vui lòng nhập họ";
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    if (!formData.address.trim()) newErrors.address = "Vui lòng nhập địa chỉ";
    if (!formData.city.trim()) newErrors.city = "Vui lòng nhập thành phố";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (validateForm()) {
      navigate("/payment", { state: { formData } });
    }
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
            className={`w-full border px-3 py-2 rounded-md ${
              submitted && errors.firstName ? 'border-red-500' : ''
            }`}
          />
          {submitted && errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
            className={`w-full border px-3 py-2 rounded-md ${
              submitted && errors.lastName ? 'border-red-500' : ''
            }`}
          />
          {submitted && errors.lasttName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
            className={`w-full border px-3 py-2 rounded-md ${
              submitted && errors.email ? 'border-red-500' : ''
            }`}
          />
          {submitted && errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
            className={`w-full border px-3 py-2 rounded-md ${
              submitted && errors.phone ? 'border-red-500' : ''
            }`}
          />
          {submitted && errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
            className={`w-full border px-3 py-2 rounded-md ${
              submitted && errors.address ? 'border-red-500' : ''
            }`}
          />
          {submitted && errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
            className={`w-full border px-3 py-2 rounded-md ${
              submitted && errors.city ? 'border-red-500' : ''
            }`}
          />
          {submitted && errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
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
