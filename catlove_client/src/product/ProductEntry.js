import React from 'react';
import PropTypes from 'prop-types';

function ProductEntry({ product }) {
  const { img, title, price } = product;

  return (
    <li className="w-[20%] m-2">
      <a href="123">
        <img
          className="w-[100%] border-solid border border-black mb-2"
          src={img}
        />
      </a>
      <div>{title}</div>
      <div>{price}</div>
    </li>
  );
}

ProductEntry.propTypes = {
  products: PropTypes.array,
};

export default ProductEntry;
