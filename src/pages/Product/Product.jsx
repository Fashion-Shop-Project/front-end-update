import React, { useState } from 'react';
import ProductFilter from '../../components/ProductFilter';
import ProductList from '../../components/ProductList';
import img1 from '../../assets/images/image1.jpg';
import img2 from '../../assets/images/image2.jpg';
import img3 from '../../assets/images/image3.jpg';
import img4 from '../../assets/images/image4.jpg';
import img5 from '../../assets/images/image5.jpg';
// Hàm định dạng giá tiền
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
};

function Product() {
  const allProducts = [
    { id: 1, name: 'Áo Thun Nam', category: 'ao', price: 200000, image: img1 },
    { id: 2, name: 'Quần Jean Nữ', category: 'quan', price: 350000, image: img2 },
    { id: 3, name: 'Giày Thể Thao', category: 'giay', price: 1200000, image: img3 },
    { id: 4, name: 'Áo Hoodie', category: 'ao', price: 700000, image: img4 },
    { id: 5, name: 'Quần Short', category: 'quan', price: 800000, image: img5 },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleFilterChange = (filter) => {
    const { category, priceRange } = filter;

    const filtered = allProducts.filter((product) => {
      const matchesCategory = category ? product.category === category : true;
      const matchesPrice = priceRange.length
        ? priceRange.some((range) => {
            if (range === 'low') return product.price < 500000;
            if (range === 'medium') return product.price >= 500000 && product.price <= 1000000;
            if (range === 'high') return product.price > 1000000;
            return false;
          })
        : true;

      return matchesCategory && matchesPrice;
    });

    // Định dạng giá tiền cho tất cả các sản phẩm đã lọc
    const formattedProducts = filtered.map((product) => ({
      ...product,
      price: formatCurrency(product.price),
    }));

    setFilteredProducts(formattedProducts);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sản phẩm</h1>
      <ProductFilter onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default Product;
