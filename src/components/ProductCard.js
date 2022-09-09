import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ price, image, name, url_name }) {
  return (
    <Link to={`/shop/product/${url_name}`}>
      <div className="relative">
        <div className="relative w-full min-h-80 bg-gray-200 rounded-md overflow-hidden lg:h-90 lg:aspect-none">
          <img
            src={image}
            alt={image}
            className="w-full h-full object-center object-cover hover:opacity-80 transition"
          />{' '}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
          </div>
          <p className="text-sm font-medium text-gray-900">$ {price}</p>
        </div>
      </div>
    </Link>
  );
}
