import React, { useState } from "react";
import "./Hero.css";
import CountUp from "react-countup";
import jacket1 from "../../../public/jacket1.png";
import { jacketsData } from "../../constants/index";
import JacketCard from "../Sections/JacketCard";

const Hero = () => {
  const [jacketImage, setJacketImage] = useState(jacket1);

  return (
    <section className="hero">
      <div className="hero-container container">
        <div className="hero-left">
          <h1>Finding Your Perfect Items</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            doloremque natus nisi animi, harum aliquid iste perferendis
            deleniti, nam assumenda ad maxime iusto quaerat debitis dignissimos
            nemo beatae sunt eligendi?
          </p>
          <button className="btn">Shop Now</button>
          <div className="hero-stats">
            <div className="stat-box">
              <span>
                <CountUp start={1400} end={1500} duration={4} />
                <p>+</p>
              </span>
              <span>Brands</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={350} end={500} duration={4} />
                <p>+</p>
              </span>
              <span>Outlets</span>
            </div>
            <div className="stat-box">
              <span>
                <CountUp start={98700} end={99000} duration={4} />
                <p>+</p>
              </span>
              <span>Customers</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <img src={jacketImage} alt="" />
          <div className="hero-right-container">
            {jacketsData.map((jacket, i) => (
              <div key={i}>
                <JacketCard
                  imgURL={jacket} // Assuming 'jacket' is an object with 'thumbnail' and 'jacket' properties
                  changeJacketImage={(jacket) => setJacketImage(jacket)}
                  jacketImg={jacketImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
