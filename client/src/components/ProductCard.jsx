import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product?.image_url}
          alt={product?.name}
          className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {product?.name}
          </h3>
          <span className="text-lg font-bold text-indigo-600">
            ₹{product?.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {product?.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;