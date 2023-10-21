import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";

const BlogCard = (imgURL, ctg, title, info) => {
  console.log(imgURL, ctg, title, info);
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <img src={imgURL.imgURL} alt={imgURL.title} />
        <a href="" className="blog-card-link">
          <RiExternalLinkFill className="blog-link" />
        </a>
      </div>
      <div className="blog-card-dtl">
        <p>{imgURL.info}</p>
        <h5>{imgURL.ctg}</h5>
        <h4>{imgURL.title}</h4>
      </div>
    </div>
  );
};

export default BlogCard;
