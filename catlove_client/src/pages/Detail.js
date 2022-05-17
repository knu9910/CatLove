import React from 'react';
import { useParams } from 'react-router-dom';

function Detail({ products }) {
  const { id } = useParams();
  let product = {};
  if (products[id - 1]) {
    product = products[id - 1];
  }
  return (
    <div className="m-20">
      <img src={product.img} />
      <div>{product.title}</div>
    </div>
  );
}

export default Detail;
