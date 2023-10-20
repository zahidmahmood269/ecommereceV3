import React, { useState } from "react";
import "./Navbar.css";
import {
  RiCloseFill,
  RiHeartFill,
  RiMenu3Fill,
  RiSearchLine,
  RiShoppingCartFill,
  RiUserFill,
} from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

        {/* For mobile */}
        <div className="nm-nav">
          <div className="nm-container container">
            <a href="" className="logo">
              Shoppee
            </a>
            <ul
              className="nav-menu"
              style={{ transform: menuOpen && "translate(0%)" }}
            >
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
            <div className="menu-btn">
              {!menuOpen ? (
                <RiMenu3Fill size={30} onClick={() => setMenuOpen(true)} />
              ) : (
                <RiCloseFill size={30} onClick={() => setMenuOpen(false)} />
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
