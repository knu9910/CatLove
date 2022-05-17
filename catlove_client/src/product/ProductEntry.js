import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProductEntry({ product }) {
  const { id, img, title, price } = product;

  return (
    <li className="w-[20%] m-2">
      <Link to={`${id}`}>
        <img
          className="w-[100%] border-solid border border-black mb-2"
          src={img}
        />
      </Link>
      <div>{title}</div>
      <div>{price}</div>
    </li>
  );
}

ProductEntry.propTypes = {
  products: PropTypes.array,
};

export default ProductEntry;
