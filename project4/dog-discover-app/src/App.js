//import React from "react";
import React, { useState } from "react";
import './App.css';
import DogCard from "./components/DogCard";



function App() {

  const [currentDog, setCurrentDog] = useState(null);
  const apiKey = process.env.REACT_APP_DOG_API_KEY;



  async function fetchDog() {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?has_breeds=1", {
        
        headers: {
        "x-api-key": apiKey,
      },
      }
    );
    const data = await res.json();
    // Only proceed if there is at least one breed
    if (data[0] && data[0].breeds && data[0].breeds.length > 0) {
      setCurrentDog(data[0]);
    } else {
      setCurrentDog(null); // Or handle no dog found
    }
  }

  return (
    <div>
      
      <div>
        <h2>Discover a Dog!</h2>
        <button onClick={fetchDog}>Discover</button>
      </div>

      <div>
        {/* Placeholder for dog image and attributes */}
        <DogCard dog={currentDog} />
      </div>

      <div>
        {/* Placeholder for the ban list */}
        <p>[Ban list will go here]</p>
      </div>

    </div>
  );
}

export default App;
