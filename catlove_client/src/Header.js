import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mb-10">
      <div className="flex justify-center m-20 mt-20">
        <Link to="/">
          <div className="font-Patrick text-4xl mr-1.5">Cat Love</div>
        </Link>

        <div className="text-2xl flex justify-around w-[30%] basis-6/12 font-Patrick mt-1.5">
          <Link to="/product">
            <div>Shop</div>
          </Link>
          <Link to="/bestProducts">
            <div>Best</div>
          </Link>
          <Link to="/board">
            <div>Board</div>
          </Link>
          <div>C/S</div>
        </div>
        <ul className="flex text-3xl w-[20%] mt-1.5 justify-end">
          <li className="ml-6">
            <FontAwesomeIcon icon={faSearch} />
          </li>
          <li className="ml-6">
            <FontAwesomeIcon icon={faUser} />
          </li>
          <Link to="/order">
            <li className="ml-6">
              <FontAwesomeIcon icon={faBasketShopping} />
            </li>
          </Link>
        </ul>
      </div>
      {/* <div className="flex justify-center bg-transparent h-96">
        <img src="img/cat1.jpg" />
        <img src="img/catsflower.png" />
      </div> */}
    </header>
  );
}

export default Header;
