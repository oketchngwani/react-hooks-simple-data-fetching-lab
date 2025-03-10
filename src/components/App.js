import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setDogImage(data.message); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
        setIsLoading(false); // Handle errors by setting loading to false
      });
  }, []); 
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Display "Loading..." while fetching data
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display the dog image
      )}
    </div>
  );
}

export default App;