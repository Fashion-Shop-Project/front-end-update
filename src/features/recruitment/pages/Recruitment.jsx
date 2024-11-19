import React from 'react';

const Recruitment = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Tuyển Dụng</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Vị Trí Đang Tuyển</h2>
          <ul className="space-y-3">
            <li>• Nhân viên bán hàng</li>
            <li>• Quản lý cửa hàng</li>
            <li>• Nhân viên thiết kế</li>
            <li>• Nhân viên marketing</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thông Tin Liên Hệ</h2>
          <p className="mb-2">Email: recruitment@leyla.com</p>
          <p className="mb-2">Điện thoại: 0123.456.789</p>
          <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</p>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;