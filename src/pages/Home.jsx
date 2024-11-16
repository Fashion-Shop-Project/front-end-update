import React, { useState, useRef } from "react";
import AdSlider from "../components/AdSlider";
import FlashSale from "../components/FlashSale";
import ProductList from "../components/ProductList";
import useOnScreen from "../components/useOnScreen";

function Home() {
  // Dữ liệu mẫu cho sản phẩm mới và sản phẩm cũ
  const newProductsData = [
    { image: "https://via.placeholder.com/200x200?text=Mới+1", name: "Sản phẩm mới 1", price: 100000 },
    { image: "https://via.placeholder.com/200x200?text=Mới+2", name: "Sản phẩm mới 2", price: 200000 },
    { image: "https://via.placeholder.com/200x200?text=Mới+3", name: "Sản phẩm mới 3", price: 300000 },
    { image: "https://via.placeholder.com/200x200?text=Mới+4", name: "Sản phẩm mới 4", price: 400000 },
    { image: "https://via.placeholder.com/200x200?text=Mới+5", name: "Sản phẩm mới 5", price: 500000 },
    { image: "https://via.placeholder.com/200x200?text=Mới+6", name: "Sản phẩm mới 6", price: 600000 },
  ];
  
  const oldProductsData = [
    { image: "https://via.placeholder.com/200x200?text=Cũ+1", name: "Sản phẩm cũ 1", oldPrice: 500000, price: 400000 },
    { image: "https://via.placeholder.com/200x200?text=Cũ+2", name: "Sản phẩm cũ 2", oldPrice: 600000, price: 500000 },
    { image: "https://via.placeholder.com/200x200?text=Cũ+3", name: "Sản phẩm cũ 3", oldPrice: 700000, price: 600000 },
    { image: "https://via.placeholder.com/200x200?text=Cũ+4", name: "Sản phẩm cũ 4", oldPrice: 800000, price: 700000 },
    { image: "https://via.placeholder.com/200x200?text=Cũ+5", name: "Sản phẩm cũ 5", oldPrice: 900000, price: 800000 },
    { image: "https://via.placeholder.com/200x200?text=Cũ+6", name: "Sản phẩm cũ 6", oldPrice: 1000000, price: 900000 },
  ];
  // State để kiểm soát số lượng sản phẩm hiển thị
  const [visibleNewProducts, setVisibleNewProducts] = useState(4);
  const [visibleOldProducts, setVisibleOldProducts] = useState(4);

  // Hàm xử lý khi nhấn "Xem thêm" cho sản phẩm mới
  const handleLoadMoreNewProducts = () => {
    setVisibleNewProducts((prevVisible) => prevVisible + 2); // Hiển thị thêm 2 sản phẩm mới mỗi lần nhấn
  };

  // Hàm xử lý khi nhấn "Xem thêm" cho sản phẩm cũ
  const handleLoadMoreOldProducts = () => {
    setVisibleOldProducts((prevVisible) => prevVisible + 2); // Hiển thị thêm 2 sản phẩm cũ mỗi lần nhấn
  };

  const adSliderRef = useRef();
  const flashSaleRef = useRef();
  const newProductsRef = useRef();
  const oldProductsRef = useRef();

  const adSliderVisible = useOnScreen(adSliderRef);
  const flashSaleVisible = useOnScreen(flashSaleRef);
  const newProductsVisible = useOnScreen(newProductsRef);
  const oldProductsVisible = useOnScreen(oldProductsRef);


  return (
<div className="container mx-auto p-4">
      {/* Slider quảng cáo */}
      <div ref={adSliderRef} className={`transition-opacity duration-700 ${adSliderVisible ? 'opacity-100' : 'opacity-0'}`}>
        <AdSlider />
      </div>

      {/* Flash sale */}
      <div ref={flashSaleRef} className={`transition-opacity duration-700 delay-200 ${flashSaleVisible ? 'opacity-100' : 'opacity-0'}`}>
        <FlashSale />
      </div>

      {/* Danh sách sản phẩm mới */}
      <div ref={newProductsRef} className={`transition-opacity duration-700 delay-400 ${newProductsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ProductList title="Sản phẩm mới" products={newProductsData.slice(0, visibleNewProducts)} />
        {visibleNewProducts < newProductsData.length && (
          <div className="text-center mt-4">
            <button
              onClick={handleLoadMoreNewProducts}
              className="px-6 py-2 bg-gold text-white rounded-lg hover:bg-gold transition duration-300"
            >
              Xem thêm sản phẩm mới
            </button>
          </div>
        )}
      </div>

      {/* Danh sách sản phẩm cũ */}
      <div ref={oldProductsRef} className={`transition-opacity duration-700 delay-600 ${oldProductsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ProductList title="Sản phẩm cũ" products={oldProductsData.slice(0, visibleOldProducts)} oldProducts={true} />
        {visibleOldProducts < oldProductsData.length && (
          <div className="text-center mt-4">
            <button
              onClick={handleLoadMoreOldProducts}
              className="px-6 py-2 bg-gold text-white rounded-lg hover:bg-gold transition duration-300"
            >
              Xem thêm sản phẩm cũ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
    