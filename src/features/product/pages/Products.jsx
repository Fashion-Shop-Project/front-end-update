import React, { useState, useEffect } from 'react';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(amount);
};

const Products = () => {
  // Data mẫu - sau này sẽ được lấy từ database
  const allProducts = [
    { 
      id: 1, 
      name: 'Áo Thun Nam Basic', 
      category: 'ao', 
      price: 199000, 
      image: '/images/products/ao-thun-1.jpg',
      discount: 0
    },
    { 
      id: 2, 
      name: 'Quần Jean Slim Fit', 
      category: 'quan', 
      price: 499000, 
      image: '/images/products/quan-jean-1.jpg',
      discount: 10
    },
    { 
      id: 3, 
      name: 'Váy Hoa Nữ', 
      category: 'vay', 
      price: 699000, 
      image: '/images/products/vay-1.jpg',
      discount: 15
    },
    { 
      id: 4, 
      name: 'Áo Khoác Denim', 
      category: 'ao', 
      price: 899000, 
      image: '/images/products/ao-khoac-1.jpg',
      discount: 20
    },
    { 
      id: 5, 
      name: 'Giày Sneaker', 
      category: 'giay', 
      price: 1200000, 
      image: '/images/products/giay-1.jpg',
      discount: 5
    },
    { 
      id: 6, 
      name: 'Quần Short Kaki', 
      category: 'quan', 
      price: 299000, 
      image: '/images/products/quan-short-1.jpg',
      discount: 0
    },
    { 
      id: 7, 
      name: 'Áo Sơ Mi Nữ', 
      category: 'ao', 
      price: 399000, 
      image: '/images/products/ao-somi-1.jpg',
      discount: 0
    },
    { 
      id: 8, 
      name: 'Váy Dạ Hội', 
      category: 'vay', 
      price: 1500000, 
      image: '/images/products/vay-2.jpg',
      discount: 30
    }
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Khởi tạo danh sách sản phẩm với giá đã format
    const formattedProducts = allProducts.map(product => ({
      ...product,
      formattedPrice: formatCurrency(product.price),
      finalPrice: product.discount 
        ? formatCurrency(product.price * (1 - product.discount / 100))
        : formatCurrency(product.price)
    }));
    setFilteredProducts(formattedProducts);
    setLoading(false);
  }, []);

  const handleFilterChange = (filter) => {
    const { category, priceRange } = filter;

    const filtered = allProducts.filter((product) => {
      // Lọc theo danh mục
      const matchesCategory = category ? product.category === category : true;

      // Lọc theo khoảng giá
      const finalPrice = product.discount 
        ? product.price * (1 - product.discount / 100)
        : product.price;

      const matchesPrice = priceRange.length
        ? priceRange.some((range) => {
            if (range === 'low') return finalPrice < 500000;
            if (range === 'medium') return finalPrice >= 500000 && finalPrice <= 1000000;
            if (range === 'high') return finalPrice > 1000000;
            return false;
          })
        : true;

      return matchesCategory && matchesPrice;
    });

    // Format giá và tính giá sau giảm giá
    const formattedProducts = filtered.map(product => ({
      ...product,
      formattedPrice: formatCurrency(product.price),
      finalPrice: product.discount 
        ? formatCurrency(product.price * (1 - product.discount / 100))
        : formatCurrency(product.price)
    }));

    setFilteredProducts(formattedProducts);
  };

  if (loading) {
    return <div className="container mx-auto p-4">Đang tải...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sản phẩm</h1>
      <ProductFilter onFilterChange={handleFilterChange} />
      <ProductList 
        products={filteredProducts} 
        emptyMessage="Không tìm thấy sản phẩm phù hợp"
      />
    </div>
  );
};

export default Products; 