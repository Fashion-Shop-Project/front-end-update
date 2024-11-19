import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  DashboardOutlined, 
  ShoppingOutlined, 
  UserOutlined, 
  OrderedListOutlined,
  SettingOutlined 
} from '@ant-design/icons';

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/admin" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <DashboardOutlined className="mr-2" />
                Tổng quan
              </Link>
            </li>
            <li>
              <Link to="/admin/products" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <ShoppingOutlined className="mr-2" />
                Quản lý sản phẩm
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <UserOutlined className="mr-2" />
                Quản lý người dùng
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <OrderedListOutlined className="mr-2" />
                Quản lý đơn hàng
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="flex items-center p-2 hover:bg-gray-100 rounded">
                <SettingOutlined className="mr-2" />
                Cài đặt
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;