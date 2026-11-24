import React from "react";

function ProductCard({ id, name, price, image, addToCart }) {
  return (
    <div className="border w-fit p-2">
      <img src={image} alt="" width={350} />
      <p>{name}</p>
      <p>{price}</p>

      <button
        className="bg-blue-600 w-full text-white font-bold cursor-pointer py-1"
        onClick={() => addToCart({ id, name, price, image })}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
