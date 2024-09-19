import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProductCard from "./ProductCard";
import images from "../images"; 

const CartWindow = ({ onClose }) => {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Lay's Spanish Tomato Tango",
      size: "20g",
      quantity: 2,
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
  ]);

  const [suggestedProducts] = useState([
    {
      id: 2,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
    {
      id: 3,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
    {
      id: 4,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
    {
      id: 5,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
    {
      id: 6,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
    {
      id: 7,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
    {
      id: 8,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
    {
      id: 9,
      name: "Lay's Spanish Tomato Tango",
      size: "48g",
      price: 20,
      image: images.suggestedproducts, // Add proper image path
    },
  ]);

  const suggestedProductsRef = useRef(null);
  const cartItemsRef = useRef(null); // Ref for cart items scroll
  const cartWindowRef = useRef(null); // Ref for cart window

  // Timer countdown
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`; // Ensure double digits for seconds
  };

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Update cart quantity
  const handleQuantityChange = (productId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckout = () => {
    navigate("/checkout"); // Navigate to checkout page
  };
  // Handle mouse wheel for horizontal scrolling (suggested products)
  const handleWheelScrollSuggested = (event) => {
    if (suggestedProductsRef.current) {
      suggestedProductsRef.current.scrollLeft -= event.deltaY;
    }
  };

  // Handle mouse wheel for vertical scrolling (cart items)
  const handleWheelScrollCart = (event) => {
    if (cartItemsRef.current) {
      cartItemsRef.current.scrollTop -= event.deltaY;
    }
  };

  // Slide-in animation when the component mounts
  useEffect(() => {
    setTimeout(() => {
      cartWindowRef.current.classList.remove("translate-x-full");
    }, 10); // Start the slide-in animation after mounting
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-end z-50">
      {/* Cart Window */}
      <div
        ref={cartWindowRef}
        className="bg-gray-100 w-[21rem] h-full shadow-lg p-6 relative transform transition-transform duration-300 translate-x-full" // Initially off-screen
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl font-bold"
          onClick={() => {
            cartWindowRef.current.classList.add("translate-x-full"); // Slide out animation
            setTimeout(onClose, 300); // Close after the animation completes
          }}
        >
          &times;
        </button>

        {/* Delivery and Timer */}
        <div className="flex items-center mb-2">
          {/* Timer Icon */}
          <span className="text-xl text-gray-600 mr-2">&#9202;</span>

          {/* Countdown and Shipment Details */}
          <div className="flex flex-col">
            <p className="text-[0.7rem] font-bold text-gray-500">
              Delivery in {formatTime(timeRemaining)}
            </p>
            <p className="text-[0.6rem] text-gray-400">
              Shipment of {cartItems.length} items
            </p>
          </div>
        </div>

        {/* Delivery Estimate */}
        <div className="flex items-center justify-center mb-7">
          <div className="text-center border rounded-full shadow-lg h-[80px] w-[80px] flex items-center justify-center p-1">
            <p className="text-[0.690rem]">
              <span className="font-bold text-gray-900">30 Min</span>{" "}
              <span className="text-gray-500">Delivery</span>
            </p>
          </div>
        </div>

        {/* Suggested Products */}
        <div className="mt-2 w-1rem">
          <h3 className="text-[0.7rem] font-bold text-gray-800 mb-2">
            Suggested Products
          </h3>
          <div
            ref={suggestedProductsRef}
            className="flex gap-4 overflow-hidden pb-2"
            onWheel={handleWheelScrollSuggested} // Handle mouse wheel scroll for suggested products
            style={{ scrollbarWidth: "none" }} // Hide scrollbar for Firefox
          >
            {suggestedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white flex flex-col items-center h-[10rem] min-w-[6.3rem] border border-gray-200 rounded-lg shadow-md p-3 hover:scale-105 transform transition-transform aspect-w-1 aspect-h-1"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-14 object-cover mb-2"
                />
                 <p className="absolute bottom-12 text-[0.588rem] font-bold text-gray-700 flex justify-between mt-2 mb-2 ml-2">
                  {product.name}
                </p>

                <div className="flex justify-between items-center h-[180px] w-full mt-9 space-x-4">
                  <p className="text-[0.565rem] font-bold text-gray-800">
                    <span>AED</span> <span>{product.price}</span>
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="font-bold bg-white text-[#217229] border border-green-500 px-1 py-[0.153rem] rounded-md text-[0.59rem] hover:bg-green-100"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Cart Items */}
        <div
          ref={cartItemsRef}
          className="flex-grow overflow-y-auto pl-1 mt-10"
          onWheel={handleWheelScrollCart} // Handle mouse wheel scroll for cart items
        >
          <h3 className="text-[0.755rem]  ml-2 font-bold text-gray-800 mb-2">
            Zoom Supermarket
          </h3>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center h-[3.5rem] bg-gray-100 mb-4  p-1 rounded-lg shadow-lg"
            >
              {/* Product Image */}
              <div className="bg-white w-[2.5rem] h-[3rem] rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[2.4rem] h-[80%] mt-2"
                />
              </div>

              {/* Product Name and Size */}
              <div className="flex flex-col ml-4">
                <p className="text-[0.675rem] font-bold text-gray-700">
                  {item.name}
                </p>
                <p className="text-[0.600rem] text-gray-500">{item.size}g</p>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center mr-1 ml-auto bg-[#217229] rounded-md px-[0.39rem] py-[0.2rem] space-x-2 space-y-1 text-white text-xs">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="font-bold"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fixed Checkout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-100">
          <button
            onClick={handleCheckout}
            className="w-full bg-[#217229] text-white py-3 border-t border-b border-gray-500 rounded-[2rem] text-sm font-bold hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartWindow;