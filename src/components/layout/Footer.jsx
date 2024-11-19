import React from 'react';
import logo from '../../assets/logo/Leyla.png';
import boCongThuong from '../../assets/logo/BoCongThuong.png';
import { ClockCircleOutlined, PhoneOutlined, ShopOutlined, TruckOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { FaTiktok } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-6 md:px-12">
      {/* Phần thông tin bổ sung ở trên cùng */}
      <div className="bg-black text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
          <div className="flex flex-col items-center text-center md:text-left w-full md:w-1/4 p-4 border-r border-gray-700">
            <ClockCircleOutlined className="text-3xl mb-2" />
            <h3 className="font-bold text-lg">7 NGÀY ĐỔI SẢN PHẨM NGUYÊN GIÁ</h3>
            <p className="text-gray-300">Đổi trả sản phẩm trong 7 ngày</p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left w-full md:w-1/4 p-4 border-r border-gray-700">
            <PhoneOutlined className="text-3xl mb-2" />
            <h3 className="font-bold text-lg">HOTLINE 1900 3060</h3>
            <p className="text-gray-300">8h00 - 17h00, T2 - T7 (Giờ hành chính)</p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left w-full md:w-1/4 p-4 border-r border-gray-700">
            <ShopOutlined className="text-3xl mb-2" />
            <h3 className="font-bold text-lg">HỆ THỐNG CỬA HÀNG</h3>
            <p className="text-gray-300">120 cửa hàng trên toàn hệ thống</p>
          </div>

          <div className="flex flex-col items-center text-center md:text-left w-full md:w-1/4 p-4">
            <TruckOutlined className="text-3xl mb-2" />
            <h3 className="font-bold text-lg">VẬN CHUYỂN</h3>
            <p className="text-gray-300">Đồng giá 30k toàn quốc</p>
          </div>
        </div>
      </div>

      {/* Phần nội dung chính của footer */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 py-8 px-4">
        <div className="text-lg font-bold text-center md:text-left mb-6 md:mb-0">
          <img src={logo} alt="logo" className="mx-auto md:mx-0 w-32" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-semibold">Giới thiệu</h2>
          <ul className="space-y-2">
            <li>Về IVY moda</li>
            <li>Tuyển dụng</li>
            <li>Hệ thống cửa hàng</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-semibold">Dịch vụ khách hàng</h2>
          <ul className="space-y-2">
            <li>Chính sách điều khoản</li>
            <li>Hướng dẫn mua hàng</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách đổi trả</li>
            <li>Chính sách bảo hành</li>
            <li>Chính sách giao nhận vận chuyển</li>
            <li>Chính sách thẻ thành viên</li>
            <li>Q&A</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-semibold">Liên hệ</h2>
          <ul className="space-y-2">
            <li>Hotline</li>
            <li>Email</li>
            <li>Live Chat</li>
            <li>Messenger</li>
            <li>Liên hệ</li>
          </ul>
        </div>
      </div>

      {/* Phần thông tin bản quyền và các biểu tượng mạng xã hội */}
      <div className="container mx-auto text-center py-4 px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-4">
          <a href="#" className="flex items-center text-black space-x-1">
            <FacebookOutlined style={{ fontSize: '24px' }} />
            <span className="hidden md:inline">FACEBOOK</span>
          </a>
          <a href="#" className="flex items-center text-black space-x-1">
            <InstagramOutlined style={{ fontSize: '24px' }} />
            <span className="hidden md:inline">INSTAGRAM</span>
          </a>
          <a href="#" className="flex items-center text-black space-x-1">
            <YoutubeOutlined style={{ fontSize: '24px' }} />
            <span className="hidden md:inline">YOUTUBE</span>
          </a>
          <a href="#" className="flex items-center text-black space-x-1">
            <FaTiktok style={{ fontSize: '24px' }} />
            <span className="hidden md:inline">TIKTOK</span>
          </a>
          <a href="#" className="flex items-center text-black space-x-1">
            <SiZalo style={{ fontSize: '24px' }} />
            <span className="hidden md:inline">ZALO</span>
          </a>
        </div>
        <p className="text-sm md:text-base">© LeyLa 2024. All rights reserved</p>
        <img src={boCongThuong} alt="Đã thông báo bộ công thương" className="mx-auto mt-2 w-32 md:w-48" />
      </div>
    </footer>
  );
}

export default Footer;
