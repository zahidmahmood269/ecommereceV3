import React from "react";
import "./Footer.css";
import { RiMapPinFill, RiMailFill, RiPhoneFill } from "react-icons/ri";
const Footer = () => {
  return (
    <section id="contact">
      <div className="footer-container container">
        <div className="footer-box">
          <div className="footer-title">Promo</div>
          <img src="./images/footer.jpg" alt="" />
          <h4>New Fashion Trends in 2023</h4>
          <p>Promo from sep 21 2023</p>
        </div>
        <div className="footer-box">
          <div className="footer-title">
            <div className="footer-row">
              <div className="col">
                <li>
                  <a href="">Sell Online</a>
                </li>
                <li>
                  <a href="">Features</a>
                </li>
                <li>
                  <a href="">Categories</a>
                </li>
                <li>
                  <a href="">Deals</a>
                </li>
                <li>
                  <a href="">Latest Trends</a>
                </li>
              </div>
              <div className="col">
                <li>
                  <a href="">Brands</a>
                </li>
                <li>
                  <a href="">Return</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Deals</a>
                </li>
                <li>
                  <a href="">Trends</a>
                </li>
              </div>
              <div className="col">
                <li>
                  <a href="">Best Sales</a>
                </li>
                <li>
                  <a href="">New Products</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Term of Services</a>
                </li>
                <li>
                  <a href="">Latest Trends</a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-box">
          <h5 className="footer-title">Contact US</h5>
          <p>
            <span>
              <RiMapPinFill />
            </span>
            1737 Mcdonal Rd Ny.
          </p>
          <p>
            <span>
              <RiPhoneFill />
            </span>
            0212131505
          </p>
          <p>
            <span>
              <RiMailFill />
            </span>
            info@yousite.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
