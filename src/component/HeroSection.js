import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";

const Hero = () => {
  const [heroImages, setHeroImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?limit=3"
        );
        setHeroImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchHeroImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide mb-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={image.download_url}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
