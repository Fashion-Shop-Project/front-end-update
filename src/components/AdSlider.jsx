import React from "react";
import Slider from "react-slick";

function AdSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 giây
  };

  return (
    <div className="mb-8 flex justify-center">
      <div className="w-full max-w-lg"> {/* Điều chỉnh kích thước của slider */}
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'bold', 
          marginBottom: '1rem',
          textAlign: 'center',
          background: 'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'rainbow 5s ease infinite',
          backgroundSize: '400% 400%'
        }}>Quảng cáo</h2>
        <Slider {...settings}>
          <div>
            <img src="/images/products/image1.jpg" alt="Quảng cáo 1" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="/images/products/image1.jpg" alt="Quảng cáo 2" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="/images/products/image1.jpg" alt="Quảng cáo 3" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="/images/products/image1.jpg" alt="Quảng cáo 4" className="w-full h-auto rounded-lg" />
          </div>
          <div>
            <img src="/images/products/image1.jpg" alt="Quảng cáo 5" className="w-full h-auto rounded-lg" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AdSlider;
