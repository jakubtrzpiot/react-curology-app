import React from 'react';

export default function ProductList({ image, name }) {
  return (
    <div className="flex justify-center items-center col-span-4 shadow-lg ">
      <div className="p-6">
        <img className="w-[90%]" src={image} />
      </div>
      <p>{name}</p>
    </div>
  );
}
