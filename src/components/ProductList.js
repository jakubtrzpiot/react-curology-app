import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList({ id, price, image, name }) {
  return (
    <Link
      to={`/shop/product/${id}`}
      className="flex justify-center items-center col-span-4 shadow-lg"
    >
      <div className=''>
        <div className="p-6">
          <img alt="" className="w-[200px] mx-auto" src={image} />
        </div>
          <div className='p-8'>
            <p>{name}</p>
            <p className='text-2xl font-bold'>{price}</p>
          </div>
      </div>
    </Link>
  );
}
