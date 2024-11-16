import React, { useState } from 'react';
import { Select, Checkbox } from 'antd';

function ProductFilter({ onFilterChange }) {
  const [filter, setFilter] = useState({ category: '', priceRange: [] });

  const handleCategoryChange = (value) => {
    const newFilter = { ...filter, category: value };
    setFilter(newFilter);
    onFilterChange(newFilter); // Gửi giá trị lọc về cha
  };

  const handlePriceChange = (e) => {
    const { value, checked } = e.target;
    const updatedPriceRange = checked
      ? [...filter.priceRange, value]
      : filter.priceRange.filter((price) => price !== value);

    const newFilter = { ...filter, priceRange: updatedPriceRange };
    setFilter(newFilter);
    onFilterChange(newFilter); // Gửi giá trị lọc về cha
  };

  return (
    <div className="mb-4">
      <div className="mb-2">
        <span className="font-semibold">Loại sản phẩm: </span>
        <Select
          style={{ width: 200 }}
          placeholder="Chọn loại"
          onChange={handleCategoryChange}
          options={[
            { value: 'ao', label: 'Áo' },
            { value: 'quan', label: 'Quần' },
            { value: 'giay', label: 'Giày' },
          ]}
        />
      </div>
      
      <div className="mt-2">
        <span className="font-semibold">Khoảng giá: </span>
        <Checkbox value="low" onChange={handlePriceChange}>Dưới 500,000 VND</Checkbox>
        <Checkbox value="medium" onChange={handlePriceChange}>500,000 - 1,000,000 VND</Checkbox>
        <Checkbox value="high" onChange={handlePriceChange}>Trên 1,000,000 VND</Checkbox>
      </div>
    </div>
  );
}

export default ProductFilter;
