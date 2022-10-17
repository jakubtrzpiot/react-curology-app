import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

export default function App() {
  const stripePromise = loadStripe(
    'pk_test_51LgBFjFciYUcjECrEvzcMJZn3RiMUMF9VQ2zhvvk3Qik8iSq6rAwxq9dx8z2OmaEMcCLnXN67hN56I9sAj8Bfxmk00M0r91MlW',
  );
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/product/:url_name" element={<ProductPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route
        path="checkout"
        element={
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        }
      />
    </Routes>
  );
}
