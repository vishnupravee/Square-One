import React, { useState, useEffect } from "react";
import "./Product.css";

// Import images from assets
import product1 from "../components/assets/img1.png";
import product2 from "../components/assets/3.jpg";
import product3 from "../components/assets/Japandi Accent Chair_ Adding Style Without….jpeg";
import product4 from "../components/assets/Transform your living room with this stylish and….jpeg";

const Product = () => {
  const images = [product1, product2, product3, product4];

  const [currentIndex, setCurrentIndex] = useState(0);

 // eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, 3000);

  return () => clearInterval(interval);
}, []); // images is static, so [] is fine



  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="product-section"id="products">
      <h1 className="section-heading">Our Products</h1>
      <div className="product-container">
        <div className="image-slider">
          <button className="nav-btn left" onClick={prevImage}>
            &#10094;
          </button>
          <img src={images[currentIndex]} alt="Product" />
          <button className="nav-btn right" onClick={nextImage}>
            &#10095;
          </button>
        </div>
        <div className="product-description">
          <h2>Awesome Product</h2>
          <p>
            This is a high-quality product with amazing features. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. You will love this!
          </p>
          <button className="add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
