import React from "react";
import "./Testimonial.css";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <div className="title">
        <h2>Testimonial</h2>
      </div>
      <div className="testimonial-container container">
        <div className="testimonial-card">
          <img src="/cstmr1.jpg" alt="" />
          <h4>Nina Wiliams</h4>
          <h5>CEO & Founder </h5>
          <div className="quotes">
            <RiDoubleQuotesL />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            officia aspernatur perspiciatis magni corrupti, quasi, voluptate
            recusandae vero suscipit, sequi id asperiores non enim dolores sunt
            saepe debitis porro velit.
          </p>
        </div>
        <div className="testimonial-card">
          <img src="/cstmr2.jpg" alt="" />
          <h4>Nina Wiliams</h4>
          <h5>CEO & Founder </h5>
          <div className="quotes">
            <RiDoubleQuotesL />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            officia aspernatur perspiciatis magni corrupti, quasi, voluptate
            recusandae vero suscipit, sequi id asperiores non enim dolores sunt
            saepe debitis porro velit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
