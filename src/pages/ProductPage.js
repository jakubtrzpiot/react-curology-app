import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductPage() {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
        .then((res) => {
          setProduct(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [id]);
  return (
    <div className='flex max-w-[1280px] mx-auto mt-20'>
      <div className='basis-1/6'>
        <img className="w-full" src={product.image_link} alt=""/>
      </div>
      <div className='basis-4/6 mx-8'>
        <h2 className='text-4xl font-semibold'>{product.name}</h2>
        <p className='mt-6'>{product.description}</p>
        <hr className='my-6'/>
          <div className='text-right'>
          <p className='text-2xl font-bold mt-'>{product.price && product.price + " zł"}</p>
          </div>
      </div>
    </div>
  );
}
