// src/ProductCard.js

import React from "react";

export interface Product {
  title?: string;
  price?: number;
  image?: string;
  link?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { title, price, image, link } = product;

  return (
    <div className="max-w-xs mx-auto mb-4 w-full">
      <div className="flex">
        <img src={image} alt={title} className="w-24 h-24 object-cover" />
        <div className="ml-4">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-base font-bold mb-2">{price}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block"
          >
            Ver en Amazon
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
