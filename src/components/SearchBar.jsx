import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function SearchBar() {
  return (
    <div className="flex items-center space-x-2">
      <Input
        placeholder="Tìm kiếm sản phẩm..."
        prefix={<SearchOutlined />}
        className="rounded-lg border-gray-300"
      />
    </div>
  );
}

export default SearchBar;
