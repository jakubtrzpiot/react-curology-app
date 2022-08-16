import React from 'react';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList.js';
const axios = require('axios').default;

export default function Shop() {
  const [productInfo, setProductInfo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl'
        )
        .then((res) => {
          setProductInfo(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-12 mx-auto max-w-[1280px] gap-8">
      {productInfo.map((product) => {
        return (
          <ProductList
            key={product.id}
            image={product.image_link}
            name={product.name}
          />
        );
      })}
    </div>
  );
}
