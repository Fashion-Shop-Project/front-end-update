import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard';
import ProductManagement from '../pages/ProductManagement';
import OrderManagement from '../pages/OrderManagement';
import UserManagement from '../pages/UserManagement';

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<ProductManagement />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/users" element={<UserManagement />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes; 