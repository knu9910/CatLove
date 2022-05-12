import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="mb-10">
      <div className="flex justify-center m-15 mt-20">
        <Link to="/">
          <div className="font-Patrick text-5xl mr-1.5 ">Cat Love</div>
        </Link>

        <div className="text-2xl flex justify-around w-[30%] basis-6/12 font-Patrick mt-2.5 mr-40">
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

        <div className="search-box">
          <input className="search-input" type="text" />
          <a href="#" className="search-btn">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </div>

        <ul className="flex text-3xl w-[7%] mt-1 justify-end">
          <li className="ml-6">
            <div className="user-info">
              <FontAwesomeIcon className="user-icon" icon={faUser} />
              <ul className="user-pages">
                <li>로그인</li>
                <li>회원가입</li>
                <li>마이페이지</li>
                <li>주문내역조회</li>
              </ul>
            </div>
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
