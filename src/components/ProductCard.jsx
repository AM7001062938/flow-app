import React from 'react';
import PropTypes from 'prop-types';
import images from '../images'; // Adjust the path as needed

function ProductCard({ product, showOffer = false }) {
  return (
    <div className="w-[12rem] h-[18rem] bg-white rounded-md shadow-md overflow-hidden flex flex-col"> {/* Card dimensions */}
      <div className="relative flex-grow flex items-center justify-center rounded-md bg-[#EBEEF2] p-5 border"> 
        <img 
          src={product.image || images.suggestedproducts} 
          className="w-[6rem] h-[6rem] object-contain" // Image size
          alt={product.name || 'Product'} 
        />
        {showOffer && product.offer && (
          <div className="font-poppinsLight text-[0.88rem] absolute bottom-1 right-1 bg-white px-3 py-1 rounded-3xl">
            {product.offer} OFF
          </div>
        )}
      </div>
      <div className="font-poppinsMedium text-[0.875rem] mx-3 mt-2">
        {product.name}
      </div>
      <div className="font-poppinsMedium text-[0.875rem] underline underline-[#217229] underline-offset-4 text-[#217229] mx-3 mt-2">
        {product.store}
      </div>
      <div className="flex items-center gap-5 mx-3 mt-2">
        <div className="font-poppinsMedium text-[#00000094] text-[0.875rem]">
          {product.size}
        </div>
        <div className="flex items-center gap-1">
          <img src={images.star} className="w-[13px]" alt="rating" />
          <div className="font-poppinsMedium text-[0.875rem]">{product.rating}</div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between p-2 bg-[#071F18] rounded-b-xl text-white">
        <div className="font-poppinsSemiBold text-[0.875rem]">{product.price}</div>
        <div className="flex items-center gap-3">
          <button className="text-[1rem]" aria-label="Decrease quantity">-</button>
          <div>{product.quantity}</div>
          <button className="text-[1rem]" aria-label="Increase quantity">+</button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    offer: PropTypes.string,
    store: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  showOffer: PropTypes.bool,
};

export default ProductCard;
