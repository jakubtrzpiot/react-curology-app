import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ id, price, image, name }) {
  return (
    <Link to={`/shop/product/${id}`}>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75 lg:h-90 lg:aspect-none">
          <img
            src={image}
            alt={image}
            className="w-full h-full object-center object-cover"
          />
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
