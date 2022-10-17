import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../redux/shoppingCartSlice';
import logo from '../assets/curology-logo.svg';
import ShoppingCart from './ShoppingCart';

export default function Navbar() {
  const quantity = useSelector(cart =>
    cart.items.reduce((acc, item) => acc + item.quantity, 0),
  );
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const full = ['/signup', '/login'];
  return (
    <div
      className={`fixed bg-white top-0 w-full z-50 ${
        full.includes(path) ? 'hidden' : 'block'
      }`}
    >
      <ShoppingCart />
      <div className="flex justify-center py-8 items-center h-[120px] max-w-[1280px] mx-auto">
        <Link to="/" className="grow">
          <img className="h-[28px]" alt="" src={logo} />
        </Link>
        <div className="flex gap-5 grow justify-center">
          <Link to="/shop">Products</Link>
          <Link to="/">Why Curology</Link>
          <Link to="/">Reviews</Link>
          <Link to="/shop">Shop</Link>
        </div>
        <div className="flex items-center">
          <Link to="/login" className="py-4 px-12">
            Log in
          </Link>
          <Link
            to="/signup"
            className="bg-[#332E54] text-white py-4 px-12 rounded-md"
          >
            Sign up
          </Link>
          <div
            onClick={() => dispatch(setCart(true))}
            className="pl-8 cursor-pointer relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div
              className={
                quantity > 0
                  ? 'flex justify-center items-center text-white text-[10px] absolute bg-primary w-[18px] h-[18px] -right-0.5 -bottom-1 rounded-full'
                  : 'hidden'
              }
            >
              {quantity > 9 ? '9+' : quantity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
