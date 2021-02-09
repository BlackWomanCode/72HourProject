import React, { useEffect, useState } from "react";
import "./Nasa.css";
const key = "hhu2uhdath9B6emhsYxEAzlVUAHNqTqyKwbp8NXw";
const base_url = "https://api.nasa.gov/planetary/earth/assets";

const Nasa = () => {
  const [photoData, setPhotoData] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      fetch(
        `${base_url}?lon=${long}&lat=${lat}&date=2018-02-01&&dim=0.15&api_key=${key}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setPhotoData(data.url);
        });
    });
  }, []);

  return (
    <div>
      <div>
        <h1>What the aliens see</h1>
        <img className="nasaImg" src={photoData} alt="NASA satellite image" />
      </div>
    </div>
  );
};

export default Nasa;
