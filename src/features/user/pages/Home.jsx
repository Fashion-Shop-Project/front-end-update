import React, { useState, useRef } from "react";
import AdSlider from "../../../components/AdSlider";
import FlashSale from "../../../components/FlashSale";
import ProductList from "../../../features/product/components/ProductList";
import useOnScreen from "../../../hooks/useOnScreen";

const Home = () => {
  // Data mẫu
  const newProductsData = [
    { 
      id: 1,
      name: "Áo thun basic",
      price: 199000,
      image: '/images/products/ao-thun-1.jpg',
      discount: 0
    },
    // Thêm sản phẩm khác...
  ];
  
  const oldProductsData = [
    { 
      id: 1,
      name: "Áo khoác denim",
      price: 399000,
      oldPrice: 599000,
      image: '/images/products/ao-khoac-1.jpg',
      discount: 33
    },
    // Thêm sản phẩm khác...
  ];

  const [visibleNewProducts, setVisibleNewProducts] = useState(4);
  const [visibleOldProducts, setVisibleOldProducts] = useState(4);

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
      <div ref={adSliderRef} className={`transition-opacity duration-700 ${adSliderVisible ? 'opacity-100' : 'opacity-0'}`}>
        <AdSlider />
      </div>

      <div ref={flashSaleRef} className={`transition-opacity duration-700 delay-200 ${flashSaleVisible ? 'opacity-100' : 'opacity-0'}`}>
        <FlashSale />
      </div>

      <div ref={newProductsRef} className={`transition-opacity duration-700 delay-400 ${newProductsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ProductList 
          title="Sản phẩm mới" 
          products={newProductsData.slice(0, visibleNewProducts)} 
        />
      </div>

      <div ref={oldProductsRef} className={`transition-opacity duration-700 delay-600 ${oldProductsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <ProductList 
          title="Sản phẩm cũ" 
          products={oldProductsData.slice(0, visibleOldProducts)} 
          oldProducts={true} 
        />
      </div>
    </div>
  );
};

export default Home; 