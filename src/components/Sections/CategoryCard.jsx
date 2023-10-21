import React from "react";

const CategoryCard = (imgURL, title) => {
  return (
    <div className="category-card">
      <img src={imgURL.imgURL} alt="" />
      <h4>{imgURL.title}</h4>
    </div>
  );
};

export default CategoryCard;
