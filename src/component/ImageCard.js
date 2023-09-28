import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image }) => {
  return (
    <div className="gallery col-lg-3 col-md-4 col-12 mt-2 d-flex justify-content-center">
      <div className="item d-flex justify-content-center">
        <img src={image.download_url} alt={`Image by ${image.author}`} />
      </div>
    </div>
  );
};

export default ImageCard;
