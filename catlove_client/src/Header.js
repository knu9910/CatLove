import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="bg-amber-200 font-Patrick text-center text-xl">
        Cat Shoppingmol
      </div>
      <div className="flex justify-center m-20 mt-20">
        <Link to="/">
          <div className="font-Patrick text-4xl mr-1.5">Cat Love</div>
        </Link>

        <div className="text-2xl flex justify-around w-[30%] basis-6/12 font-Patrick mt-1.5">
          <div>Shop</div>
          <div>Best</div>
          <div>Board</div>
          <div>C/S</div>
        </div>
        <div className="flex text-3xl w-[20%] mt-1.5 justify-end">
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <button>
            <FontAwesomeIcon icon={faUser} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBasketShopping} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBell} />
          </button>
        </div>
      </div>
      <div className="flex justify-center bg-transparent h-96">
        <img src="img/cat1.jpg" />
        <img src="img/catsflower.png" />
      </div>
    </header>
  );
}

export default Header;
