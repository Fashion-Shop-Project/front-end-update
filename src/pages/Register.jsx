import React from 'react';

function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Đăng ký</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Họ tên</label>
          <input
            type="text"
            placeholder="Họ tên"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700">Tên đăng nhập</label>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700">Số điện thoại</label>
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700">Địa chỉ</label>
          <input
            type="text"
            placeholder="Địa chỉ"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700">Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Again */}
        <div className="mb-6">
          <label className="block text-gray-700">Nhập lại mật khẩu</label>
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Đăng ký
        </button>
      </div>
    </div>
  );
}

export default Register;
