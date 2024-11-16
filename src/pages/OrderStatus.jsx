import React from "react";
import { useLocation } from "react-router-dom";

const OrderStatus = () => {
  const location = useLocation();
  const { formData, products } = location.state || {};

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Trạng thái đơn hàng</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-bold">Thông tin khách hàng</h2>
        <p><strong>Tên:</strong> {formData?.firstName} {formData?.lastName}</p>
        <p><strong>Email:</strong> {formData?.email}</p>
        <p><strong>Số điện thoại:</strong> {formData?.phone}</p>
        <p><strong>Địa chỉ:</strong> {formData?.address}, {formData?.city}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-bold">Danh sách sản phẩm</h2>
        {products?.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b py-2"
          >
            <p>{product.name}</p>
            <p>x{product.quantity}</p>
            <p>{product.price.toLocaleString()} VND</p>
          </div>
        ))}
      </div>

      <div className="bg-green-100 p-4 rounded-lg text-center">
        <h2 className="text-lg font-bold text-green-600">Thanh toán thành công</h2>
        <p>Cảm ơn bạn đã đặt hàng! Đơn hàng của bạn đang được xử lý.</p>
      </div>
    </div>
  );
};

export default OrderStatus;
