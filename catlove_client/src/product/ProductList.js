import React from 'react';
import ProductEntry from './ProductEntry';
import PropTypes from 'prop-types';

function ProductList({ products }) {
  // console.log(products);
  const productList = products.map((product) => {
    return <ProductEntry product={product} key={product.title} />;
  });

  return <ul className="flex flex-wrap justify-center">{productList}</ul>;
}

ProductList.propTypes = {
  products: PropTypes.array,
};
export default ProductList;
