import React from 'react';
import ProductList from '../components/ProductList.js';
import products from '../data/products.json';
import ShoppingCart from '../components/ShoppingCart';

export default function Shop() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 max-w-[1280px] mx-auto">
      <ShoppingCart />
      {products.map(product => {
        return (
          <ProductList
            key={product.id}
            id={product.id}
            price={product.price}
            image={product.image}
            name={product.name}
          />
        );
      })}
    </div>
  );
}
