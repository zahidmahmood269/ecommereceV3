import React from "react";
import "./Navbar.css";
import {
  RiHeartFill,
  RiSearchLine,
  RiShoppingCartFill,
  RiUserFill,
} from "react-icons/ri";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* For Desktop */}
        <div className="tn-container container">
          <a href="" className="logo">
            Shoppee
          </a>
          <div className="search-box">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search For Products"
            />
            <div className="search-icon">
              <RiSearchLine />
            </div>
          </div>
          <div className="tn-icons">
            <a href="">
              <RiUserFill />
            </a>
            <a href="" className="fav-icon">
              <RiHeartFill />
              <span className="count">0</span>
            </a>
            <a href="" className="cart-icon">
              <RiShoppingCartFill />
              <span className="count">0</span>
            </a>
          </div>
        </div>
        <hr />
        <div className="bn-container container">
          <ul className="navlist">
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#categories">categories</a>
            </li>
            <li>
              <a href="#shop">shop</a>
            </li>
            <li>
              <a href="#deal">deal</a>
            </li>
            <li>
              <a href="#testimonial">testimonial</a>
            </li>
            <li>
              <a href="#blog">blog</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
