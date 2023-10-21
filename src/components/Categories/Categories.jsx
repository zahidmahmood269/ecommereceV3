import React from "react";
import "./Categories.css";
import { categoryData } from "../../constants/index";
import CategoryCard from "../Sections/CategoryCard";

const Categories = () => {
  return (
    <section id="categories">
      <div className="title">
        <h2>Categories</h2>
      </div>
      <div className="categories-container container">
        {categoryData.map((category) => (
          <CategoryCard key={category.imgURL} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
