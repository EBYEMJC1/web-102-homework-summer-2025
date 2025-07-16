import React from "react";

function DogCard({ dog }) {
  if (!dog) {
    return <p>Click Discover to see a dog!</p>;
  }

  const breed = dog.breeds[0];
  return (
    <div>
      <img src={dog.url} alt={breed.name} width="300" />
      <div>
        <div>
          <b>Name:</b> {breed.name}
        </div>
        <div>
          <b>Origin:</b> {breed.origin}
        </div>
        <div>
          <b>Temperament:</b> {breed.temperament}
        </div>
      </div>
    </div>
  );
}

export default DogCard;
