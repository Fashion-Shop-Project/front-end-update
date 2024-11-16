import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();

  // Dữ liệu sản phẩm mẫu
  const product = {
    id: productId,
    name: "Áo len sọc phối màu tay dài form rộng",
    image: "/images/products/product1.jpg",
    color: "Màu hồng",
    sizes: ["XS", "S", "M", "L", "XL"],
    price: 250000,
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
      },
      {
        id: 2,
        user: "tunt.hoahienthien@gmail.com",
        rating: 4,
        comment: "Áo ổn, mong vải bền lâu, thật sự thích sản phẩm mới ra và chất lượng hàng.",
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" />
        
        <div className="md:ml-8 flex-1">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="mb-1"><strong>Color:</strong> {product.color}</p>
          <p className="mb-1"><strong>Size:</strong> {product.sizes.join(", ")}</p>
          <p className="text-xl font-bold text-red-500 mb-4">{product.price.toLocaleString()} VND</p>
          
          <div className="flex space-x-4 mb-4">
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">Mua ngay</button>
            <button className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition">Thêm vào giỏ hàng</button>
          </div>

          <h2 className="text-lg font-semibold mt-6">Chi tiết sản phẩm:</h2>
          <p className="text-gray-700">{product.description}</p>

          <h2 className="text-lg font-semibold mt-6">Đánh giá sản phẩm:</h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 font-bold">4.9</span> / 5 ⭐
          </div>
          {product.reviews.map((review) => (
            <div key={review.id} className="mb-4 border p-4 rounded-lg">
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">⭐ {review.rating}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
          <button className="block w-full mt-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">Xem thêm đánh giá</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
