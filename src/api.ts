import axios from "axios"; // npm install axios

interface ImageResult {
    id: string;
    urls: {
        full: string;
        regular: string;
    };
    alt_description: string | null;
}

const searchImages = async (term: string): Promise<ImageResult[]> => {
    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
          Authorization: "Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
        },
        params: {
          query: term,
        },
      });
      console.log(response.data);
      return response.data.results as ImageResult[];
    } catch (error) {
      console.error("Error fetching images:", error);
      throw error;
    }
  };
  
  export default searchImages;


// interface ImageResult {
//     id: string;
//     urls: {
//       full: string;
//       regular: string;
//     };
//     alt_description: string;
//   }
  
//   // Define the searchImages function
//   const searchImages = async (term: string): Promise<ImageResult[]> => {
//     try {
//       const apiKey = "8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y";
//       const apiUrl = `https://api.unsplash.com/search/photos?query=${term}`;
  
//       const response = await fetch(apiUrl, {
//         headers: {
//           Authorization: `Client-ID ${apiKey}`,
//         },
//       });
  
//       // Check if the response is successful
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
  
//       // Parse the JSON response
//       const data = await response.json();
  
//       console.log(data);
  
//       // Return the list of image results
//       return data.results as ImageResult[];
//     } catch (error) {
//       console.error("Error fetching data:", error);
  
//       // Re-throw the error to propagate it
//       throw error;
//     }
//   };
  
//   export default searchImages;