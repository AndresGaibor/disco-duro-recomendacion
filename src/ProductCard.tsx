// src/ProductCard.js

import React from "react";

export interface Product {
  title?: string;
  price?: number;
  image?: string;
  link?: string;
}

function truncateText(text = "", maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { title, price, image, link } = product;

  return (
    <div className="max-w-xs mx-auto mb-4 w-full">
      <div className="flex">
        <img src={image} alt={title} className="w-44 h-44 object-cover" />
        <div className="ml-4">
          <h2 className="text-base font-semibold mb-2">
            {truncateText(title, 75)}
          </h2>
          <p className="font-bold mb-2 text-xl">$ {price}</p>
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
