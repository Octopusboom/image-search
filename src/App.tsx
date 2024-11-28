import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

import { Image } from './types'; // Import the shared type

function App(): JSX.Element {
  const [images, setImages] = useState<Image[]>([]);

  const handleSubmit = async (term: string): Promise<void> => {
    const results = await searchImages(term);

    // Transform the API response to match the Image type
    const transformedImages: Image[] = results.map((image) => ({
      id: image.id,
      url: image.urls.regular,
      description: image.alt_description || "No description available",
    }));

    setImages(transformedImages);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images} />
    </div>
  );
}

export default App;
