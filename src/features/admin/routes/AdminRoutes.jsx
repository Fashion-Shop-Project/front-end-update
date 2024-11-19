import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import ProductManagement from '../pages/ProductManagement';
import UserManagement from '../pages/UserManagement';
import OrderManagement from '../pages/OrderManagement';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="products" element={<ProductManagement />} />
      <Route path="users" element={<UserManagement />} />
      <Route path="orders" element={<OrderManagement />} />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default AdminRoutes; 