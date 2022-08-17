import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/curology-logo.svg';

export default function Navbar() {
  const path = useLocation().pathname;
  const full = ['/signup', '/login'];
  return (
    <div
      className={`fixed bg-white top-0 w-full ${
        full.includes(path) ? 'hidden' : 'block'
      }`}
    >
      <div className="flex justify-center items-center h-[120px] max-w-[1280px] mx-auto">
        <Link to="/" className="grow">
          <img className="h-[33px]" alt="" src={logo} />
        </Link>
        <div className="flex gap-5 text-xl grow">
          <Link to="/shop">Products</Link>
          <Link to="/">Why Curology</Link>
          <Link to="/">Reviews</Link>
          <Link to="/shop">Shop</Link>
        </div>
        <div>
          <Link to="/login" className="py-6 px-12">
            Log in
          </Link>
          <Link to="/signup" className="bg-[#332E54] text-white py-6 px-12">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
