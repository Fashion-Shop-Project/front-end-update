import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Dữ liệu sản phẩm mẫu - sau này sẽ được lấy từ database
  const product = {
    id: productId,
    name: "Áo len sọc phối màu tay dài form rộng",
    image: '/images/products/ao-len-1.jpg',
    color: "Màu hồng",
    sizes: ["XS", "S", "M", "L", "XL"],
    price: 250000,
    discount: 20, // Thêm trường discount
    description: `
      Chất liệu: Len mềm mại, thoải mái khi mặc, không gây kích ứng da.
      Kiểu dáng: Form rộng, phù hợp cho mọi dáng người.
      Hướng dẫn bảo quản: Giặt nhẹ bằng tay hoặc máy giặt ở chế độ nhẹ.`,
    reviews: [
      {
        id: 1,
        user: "doanthocheri010101@gmail.com",
        rating: 5,
        comment: "Áo đẹp, chất vải mềm mịn, hình giống thật sản phẩm rất ưng ý!",
        date: "2024-03-15" // Thêm ngày đánh giá
      },
      {
        id: 2,
        user: "tunt.hoahienthien@gmail.com",
        rating: 4,
        comment: "Áo ổn, mong vải bền lâu, thật sự thích sản phẩm mới ra và chất lượng hàng.",
        date: "2024-03-14"
      },
    ],
  };

  // Tính giá sau khi giảm giá
  const discountedPrice = product.price * (1 - (product.discount || 0) / 100);

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Vui lòng chọn size');
      return;
    }
    console.log('Thêm vào giỏ hàng:', {
      productId,
      size: selectedSize,
      quantity
    });
  };

  // Xử lý mua ngay
  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Vui lòng chọn size');
      return;
    }
    console.log('Mua ngay:', {
      productId,
      size: selectedSize,
      quantity
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" 
        />
        
        <div className="md:ml-8 flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          
          {/* Giá và giảm giá */}
          <div className="mb-4">
            <span className="text-xl font-bold text-red-500">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                .format(discountedPrice)}
            </span>
            {product.discount > 0 && (
              <>
                <span className="ml-2 text-gray-500 line-through">
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
                    .format(product.price)}
                </span>
                <span className="ml-2 text-red-500">-{product.discount}%</span>
              </>
            )}
          </div>

          {/* Màu sắc */}
          <p className="mb-4">
            <strong>Màu sắc:</strong> {product.color}
          </p>

          {/* Size */}
          <div className="mb-4">
            <strong className="block mb-2">Kích thước:</strong>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size 
                      ? 'border-blue-500 text-blue-500' 
                      : 'border-gray-300 hover:border-blue-500'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Số lượng */}
          <div className="mb-4">
            <strong className="block mb-2">Số lượng:</strong>
            <div className="flex items-center space-x-2">
              <button 
                className="px-3 py-1 border rounded"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                className="px-3 py-1 border rounded"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Nút mua hàng */}
          <div className="flex space-x-4 mb-6">
            <button 
              onClick={handleBuyNow}
              className="px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Mua ngay
            </button>
            <button 
              onClick={handleAddToCart}
              className="px-6 py-3 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
            >
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* Chi tiết sản phẩm */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Chi tiết sản phẩm:</h2>
            <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
          </div>

          {/* Đánh giá sản phẩm */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Đánh giá sản phẩm:</h2>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 font-bold">4.9</span>
              <span className="mx-1">/</span>
              <span>5</span>
              <span className="text-yellow-500 ml-1">⭐</span>
            </div>
            
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold">{review.user}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <p className="text-yellow-500 mb-2">
                    {'⭐'.repeat(review.rating)}
                  </p>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
              Xem thêm đánh giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 