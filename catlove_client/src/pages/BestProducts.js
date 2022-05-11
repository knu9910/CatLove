import React from 'react';
import ProductList from '../product/ProductList';

function BsetProducts({ bestlist }) {
  console.log(bestlist);
  return (
    <div>
      <ProductList products={bestlist} />
    </div>
  );
}

export default BsetProducts;
