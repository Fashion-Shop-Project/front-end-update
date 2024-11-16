import React from "react";

function News() {
  // Dữ liệu mẫu cho các tin tức và chương trình của shop
  const newsData = [
    {
      id: 1,
      title: "Shop Nhập Hàng Mới",
      description: "Chúng tôi vừa nhập về các mặt hàng mới như áo thun, quần jeans và nhiều hơn nữa.",
      date: "15/11/2024",
      image: "https://via.placeholder.com/300x200?text=New+Products",
    },
    {
      id: 2,
      title: "Khuyến Mãi Cuối Tuần",
      description: "Giảm giá 20% cho tất cả sản phẩm vào cuối tuần này. Nhanh tay mua sắm!",
      date: "14/11/2024",
      image: "https://via.placeholder.com/300x200?text=Weekend+Sale",
    },
    {
      id: 3,
      title: "Sự Kiện Mua Sắm Mùa Đông",
      description: "Tham gia sự kiện mùa đông của chúng tôi với nhiều ưu đãi và quà tặng hấp dẫn.",
      date: "10/11/2024",
      image: "https://via.placeholder.com/300x200?text=Winter+Event",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Tin Tức Về Shop</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{news.date}</p>
              <p className="text-gray-700">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
