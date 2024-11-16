import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Product from './pages/Product/Product';
import About from './pages/About';
import ProductDetail from './pages/Product/ProductDetail';
import AuthTabs from './pages/AuthTabs';
import CheckoutForm from './pages/Checkout/CheckoutForm'; // Updated path for CheckoutForm
import CartSummary from './pages/CartSummary';
import CartIcon from './components/CartIcon'; // Ensure CartIcon is included in your Navbar or elsewhere
import Payment from './pages/Payment';
import Checkout from './pages/Checkout/Checkout'; // Updated path for Checkout
import OrderStatus from './pages/OrderStatus';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow mt-20">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* News Page */}
            <Route path="/news" element={<News />} />

            {/* Product Listing and Product Details */}
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productId" element={<ProductDetail />} />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Authentication */}
            <Route path="/auth" element={<AuthTabs />} />

            {/* Checkout and Cart Summary */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/cart-summary" element={<CartSummary />} />
            <Route path="/order-status" element={<OrderStatus />} />
          </Routes>
        </div>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
