import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home({addToCart}) {
  return (
    <div className="flex gap-5 flex-wrap">
      {products.map((p) => (
        <ProductCard id={p.id} name={p.name} price={p.price} image={p.image} addToCart={addToCart} isCart={false} />
      ))}
    </div>
  );
}

export default Home;
