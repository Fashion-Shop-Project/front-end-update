import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  ShoppingOutlined,
  UserOutlined,
  OrderedListOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

const AdminLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    {
      key: '/admin',
      icon: <DashboardOutlined />,
      label: 'Tổng quan',
      link: '/admin'
    },
    {
      key: '/admin/products',
      icon: <ShoppingOutlined />,
      label: 'Quản lý sản phẩm',
      link: '/admin/products'
    },
    {
      key: '/admin/orders',
      icon: <OrderedListOutlined />,
      label: 'Quản lý đơn hàng',
      link: '/admin/orders'
    },
    {
      key: '/admin/users',
      icon: <UserOutlined />,
      label: 'Quản lý người dùng', 
      link: '/admin/users'
    },
    {
      key: '/admin/settings',
      icon: <SettingOutlined />,
      label: 'Cài đặt',
      link: '/admin/settings'
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="bg-white px-4 flex justify-between items-center border-b">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
          <Menu 
            mode="horizontal" 
            selectedKeys={[location.pathname]}
            className="border-0"
          >
            {menuItems.map(item => (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.link}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <button className="flex items-center text-red-500 hover:text-red-600">
          <LogoutOutlined className="mr-2" />
          Đăng xuất
        </button>
      </Header>
      <Content className="m-4 p-6 bg-white rounded-lg">
        {children}
      </Content>
    </Layout>
  );
};

export default AdminLayout; 