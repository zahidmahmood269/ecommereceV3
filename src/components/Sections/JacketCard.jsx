import React from "react";

const JacketCard = (imgURL, jacketImg) => {
  console.log(imgURL.imgURL.jacket);
  const handleClick = () => {
    if (jacketImg !== imgURL.imgURL.jacket) {
      imgURL.changeJacketImage(imgURL.imgURL.jacket); // Use imgURL.jacket for consistency
    }
  };
  return (
    <div
      className={`${
        jacketImg === imgURL.imgURL.jacket
          ? "border-primary"
          : "border-transparent"
      }selection-container`}
      onClick={handleClick}
    >
      <div className="selection-card">
        <img src={imgURL.imgURL.jacket} alt="test" />
      </div>
    </div>
  );
};

export default JacketCard;
