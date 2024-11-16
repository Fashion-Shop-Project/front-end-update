import React from 'react';
import { Menu } from 'antd';
import { RightOutlined } from '@ant-design/icons'; // Import biểu tượng

function CollectionDropdown() {
  return (
    <Menu>
      <Menu.SubMenu
        key="sub1"
        title="Bộ Sưu Tập"
        icon={<RightOutlined />} // Thêm biểu tượng ">" bên cạnh
      >
        <Menu.Item key="1">Áo Nữ 1</Menu.Item>
        <Menu.Item key="2">Áo Nữ 2</Menu.Item>
        <Menu.Item key="3">Áo Nữ 3</Menu.Item>
        <Menu.Item key="4">Áo Nữ 4</Menu.Item>
        <Menu.Item key="5">Áo Nữ 5</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}

export default CollectionDropdown;
