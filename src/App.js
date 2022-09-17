import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/product/:url_name" element={<ProductPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}
