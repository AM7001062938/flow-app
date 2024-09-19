import React from "react";
import ProductCard from "./ProductCard"; // Individual Product Card Component

const SuggestedProducts = () => {
  // List of suggested products
  const products = [
    { id: 1, name: "Lay's Spanish Tomato Tango", weight: "48g", price: 20, image: "/path/to/chips-image1.jpg" },
    { id: 2, name: "Doritos Nacho Cheese", weight: "50g", price: 25, image: "/path/to/chips-image2.jpg" },
    // Add more products here
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-4">Suggested Products</h3>
      <div className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            weight={product.weight}
            price={product.price}
            image={product.image}
            onAddToCart={() => alert(`${product.name} added to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestedProducts;
