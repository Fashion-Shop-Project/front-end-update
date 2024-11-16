import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Đăng nhập</h2>

        {/* Email/Username and Password fields */}
        <div className="mb-4">
          <label className="block text-gray-700">Email hoặc Tên đăng nhập</label>
          <input
            type="text"
            placeholder="Email hoặc Tên đăng nhập"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Mật khẩu</label>
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4">
          Đăng nhập
        </button>

        {/* OR */}
        <div className="text-center text-gray-500 my-4">Hoặc đăng nhập với</div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="flex items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            <FaFacebook className="mr-2" /> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
