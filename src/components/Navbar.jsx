import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined, UserOutlined, ShoppingCartOutlined, PhoneOutlined, SearchOutlined, RightOutlined, DownOutlined } from "@ant-design/icons";
import logo from '../assets/logo/Leyla.png';
import CartIcon from './CartIcon'; // Import the CartIcon component


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollectionDropdownOpen, setIsCollectionDropdownOpen] = useState(false);
  const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
    }, 100);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white shadow-md p-1 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between md:w-4/5 w-full">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <MenuOutlined style={{ fontSize: "24px", padding: "10px" }} />
        </button>

        <Link to="/" className="text-2xl font-extrabold max-w-1/2">
          <img src={logo} alt="logo" className="w-1/4 mx-auto md:mx-0" />
        </Link>

        <div className="flex items-center mx-auto">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="TÌM KIẾM"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 w-64"
            />
            <button onClick={toggleSearch} className="text-gray-700 focus:outline-none">
              <SearchOutlined style={{ fontSize: "20px" }} />
            </button>
          </div>
          <div className="md:hidden">
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="TÌM KIẾM"
                className="border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 w-48"
              />
            ) : (
              <button onClick={toggleSearch} className="text-gray-700 focus:outline-none">
                <SearchOutlined style={{ fontSize: "20px" }} />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a href="tel:+84123456789" className="flex items-center space-x-1 text-gray-700 hidden md:flex">
            <PhoneOutlined />
            <span>Gọi Ngay</span>
          </a>

          <Link to="/auth" className="flex items-center text-gray-700">
            <UserOutlined style={{ fontSize: "24px" }} />
          </Link>

          {/* Cart Icon */}
          <CartIcon />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ease-in-out" onClick={toggleMenu}></div>
      )}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-30 p-5 transform transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        <button onClick={toggleMenu} className="text-gray-700 mb-6">
          <CloseOutlined style={{ fontSize: "24px" }} />
        </button> <br />

        <Link to="/" className="text-2xl font-extrabold mb-3"><img src={logo} alt="logo" className="w-1/2 mx-auto md:mx-0" /></Link>

        <div className="space-y-4">
          {/* Dropdown "Bộ Sưu Tập" */}
          <div
            className="relative block text-lg font-semibold flex items-center cursor-pointer"
            onMouseEnter={() => setIsCollectionDropdownOpen(true)}
            onMouseLeave={() => setIsCollectionDropdownOpen(false)}
          >
            <span className="flex items-center">
              Bộ Sưu Tập {isCollectionDropdownOpen ? <DownOutlined className="ml-2" /> : <RightOutlined className="ml-2" />}
            </span>

            <div
              className={`${
                isCollectionDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              } transform transition-all duration-500 origin-top absolute left-full top-0 mt-2 w-48 bg-white shadow-md rounded-md z-10`}
            >
              <Link to="/collection/ao-nu-1" className="block px-4 py-2 hover:bg-gray-100">
                Áo Nữ 1
              </Link>
              <Link to="/collection/ao-nu-2" className="block px-4 py-2 hover:bg-gray-100">
                Áo Nữ 2
              </Link>
              <Link to="/collection/ao-nu-3" className="block px-4 py-2 hover:bg-gray-100">
                Áo Nữ 3
              </Link>
              <Link to="/collection/ao-nu-4" className="block px-4 py-2 hover:bg-gray-100">
                Áo Nữ 4
              </Link>
              <Link to="/collection/ao-nu-5" className="block px-4 py-2 hover:bg-gray-100">
                Áo Nữ 5
              </Link>
            </div>
          </div>

          <Link to="/product" className="block text-lg font-semibold">Các sản phẩm</Link>
          <Link to="/news" className="block text-lg font-semibold">Sự Kiện</Link>
          <Link to="/accessories" className="block text-lg font-semibold">Phụ Kiện</Link>
          <Link to="/sale" className="block text-lg font-semibold">Sale Up to 50%</Link>

          {/* Dropdown "Thông Tin" */}
          <div
            className="relative block text-lg font-semibold flex items-center cursor-pointer"
            onMouseEnter={() => setIsInfoDropdownOpen(true)}
            onMouseLeave={() => setIsInfoDropdownOpen(false)}
          >
            <span className="flex items-center">
              THÔNG TIN {isInfoDropdownOpen ? <DownOutlined className="ml-2" /> : <RightOutlined className="ml-2" />}
            </span>

            <div
              className={`${
                isInfoDropdownOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              } transform transition-all duration-500 origin-top absolute left-full top-0 mt-2 w-48 bg-white shadow-md rounded-md z-10`}
            >
              <Link to="/register-news" className="block px-4 py-2 hover:bg-gray-100">
                ĐĂNG KÝ NHẬN TIN
              </Link>
              <Link to="/elise-fashion" className="block px-4 py-2 hover:bg-gray-100">
                ELISE FASHION & LIFESTYLES
              </Link>
              <Link to="/recruitment" className="block px-4 py-2 hover:bg-gray-100">
                TUYỂN DỤNG
              </Link>
              <Link to="/help" className="block px-4 py-2 hover:bg-gray-100">
                TRỢ GIÚP
              </Link>
              <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">
                GIỚI THIỆU
              </Link>
              {/* <Link to="/birthday-wishes" className="block px-4 py-2 hover:bg-gray-100">
                CHÚC MỪNG SINH NHẬT
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
