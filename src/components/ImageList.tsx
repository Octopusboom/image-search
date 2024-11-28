import React from 'react';
import ImageShow from './ImageShow';
import '../style/imageList.css';

import { Image } from '../types';

interface ImageListProps {
    images: Image[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
    
    return (
      <div className="image-list">
        {images.map((image) => (
          <ImageShow key={image.id} image={image} />
        ))}
      </div>
    );
  };
  
  export default ImageList;