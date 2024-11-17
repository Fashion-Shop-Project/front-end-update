import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';

function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTime - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="text-red-500 font-bold">
      {hours}:{minutes}:{seconds}
    </div>
  );
}

function FlashSale() {
  const flashSaleEndTime = Date.now() + 24 * 60 * 60 * 1000; // 24 giờ từ hiện tại
  const flashSaleProducts = [
    { id: 1, image: image1, name: "Flash Sale 1", price: "100,000 VND" },
    { id: 2, image: image2, name: "Flash Sale 2", price: "200,000 VND" },
    { id: 3, image: image3, name: "Flash Sale 3", price: "300,000 VND" },
    { id: 4, image: image4, name: "Flash Sale 4", price: "400,000 VND" },
    { id: 5, image: image5, name: "Flash Sale 5", price: "500,000 VND" },
  ];


  // Cấu hình cho slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Số lượng sản phẩm hiển thị trên desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Màn hình lớn
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Màn hình tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Màn hình điện thoại
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-8">
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#ff4d4d',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        padding: '10px',
        borderBottom: '2px solid #ff4d4d',
        display: 'inline-block'
      }}>Flash Sale</h2>
      <CountdownTimer endTime={flashSaleEndTime} />
      <Slider {...settings}>
        {flashSaleProducts.map((product) => (
          <div key={product.id} className="p-4 text-center">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-red-500 font-bold">{product.price}</p>
            <div className="flex justify-center space-x-2 mt-4">
              <button className="px-4 py-2 text-gray-600 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Thêm giỏ hàng
              </button>
              <button className="px-4 py-2 bg-gold text-white rounded-lg hover:bg-gold transition duration-300">
                Mua hàng
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FlashSale;
