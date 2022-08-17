import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList.js';
import axios from 'axios';

export default function Shop() {
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
        )
        .then((res) => {
          setProductInfo(res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-12 mx-auto max-w-[1280px] mt-20 gap-8">
      {productInfo.map((product) => {
        return (
          <ProductList
            key={product.id}
            id={product.id}
            price={product.price}
            image={product.image_link}
            name={product.name}
          />
        );
      })}
    </div>
  );
}
