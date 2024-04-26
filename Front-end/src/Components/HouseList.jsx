// frontend/src/components/HouseList.js
import React from 'react';

function HouseList({ houses }) {
  return (
    <div>
      <h2>Houses</h2>
      <ul>
        {houses.map((house, index) => (
          <li key={index}>
            Area: {house.Area_Square_Meters}, Bedrooms: {house.Number_of_Bedrooms}, Bathrooms: {house.Number_of_Bathrooms}, Year Built: {house.Year_Built}, Price: {house.Price_USD}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseList;
