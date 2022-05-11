import React from 'react';
import ProductList from '../product/ProductList';

function Product({ products }) {
  return (
    <div>
      <button>Filter</button>
      <ProductList products={products} />
      <div></div>
    </div>
  );
}

export default Product;
