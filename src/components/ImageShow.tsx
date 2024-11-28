import React from "react";
import { Image } from "../types"; // Import the shared type

interface ImageShowProps {
  image: Image;
}

const ImageShow: React.FC<ImageShowProps> = ({ image }) => {
  return (
    <div>
      <a href={image.url} target="_blank" rel="noreferrer">
        <img src={image.url} alt={image.description} />
      </a>
    </div>
  );
};

export default ImageShow;