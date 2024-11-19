import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../../product/pages/Products';
import ProductDetail from '../../product/pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../../checkout/pages/Checkout';
import Payment from '../../checkout/components/Payment';
import Profile from '../pages/Profile';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default UserRoutes; 