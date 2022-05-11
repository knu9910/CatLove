import React from 'react';
import ProductList from '../product/ProductList';
import PropTypes from 'prop-types';

function Main({ products }) {
  //const {products, Eventlists, bestlist, Bestlist, Recommendslist} = props --> 최종..

  return (
    <div className="m-40 text-center">
      <div className="m-20">
        <div className="text-2xl mb-5">세일 이벤트</div>
        <ProductList products={products} />
      </div>
      <div className="m-20">
        <div className="text-2xl mb-5">추천 상품</div>
        <ProductList products={products} />
      </div>
    </div>
  );
}

Main.propTypes = {
  products: PropTypes.array,
};

export default Main;
