import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../constants/swiper.json";
import { swiperSettings } from "../../constants/index";
import {
  RiEyeLine,
  RiHeartLine,
  RiShoppingCart2Line,
  RiShoppingCartLine,
  RiStarFill,
  RiStarLine,
} from "react-icons/ri";
import "./Shop.css";

const Shop = () => {
  return (
    <section className="shop">
      <div className="shop-container container">
        <div className="title">
          <h2>New Arrivals</h2>
        </div>
        <Swiper {...swiperSettings}>
          <SwiperButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="item-card">
                <img src={card.imgURL} alt="" />
                <h4>{card.name}</h4>
                <p>{card.category}</p>
                <div className="rating">
                  <a href="">
                    <RiStarFill />
                  </a>
                  <a href="">
                    <RiStarFill />
                  </a>
                  <a href="">
                    <RiStarFill />
                  </a>
                  <a href="">
                    <RiStarFill />
                  </a>
                  <a href="">
                    <RiStarLine />
                  </a>
                </div>
                <div className="price">
                  <span>{card.price}</span>
                  <span>{card.old}</span>
                </div>
                <div className="card-buttons">
                  <button className="btn">View details</button>
                  <button className="btn">Add to cart</button>
                </div>
                <div className="card-icons">
                  <a href="">
                    <RiHeartLine />
                  </a>
                  <a href="">
                    <RiEyeLine />
                  </a>
                  <a href="">
                    <RiShoppingCart2Line />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Shop;

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-buttons">
      <button className="btn" onClick={() => swiper.slidePrev()}>
        &lt;
      </button>
      <button className="btn" onClick={() => swiper.slideNext()}>
        &gt;
      </button>
    </div>
  );
};
