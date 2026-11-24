import React from "react";
import ProductCard from "../components/ProductCard";
import CartCard from "../components/CartCard";

function Cart({ cart, totalPrice, incQty, decQty, deleteItem }) {
  console.log(cart);
  return (
    <div className="">
      <div className="flex flex-wrap gap-5">
        {cart.map((p) => (
          <CartCard
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
            qty={p.quantity}
            incQty={incQty}
            decQty={decQty}
            deleteItem={deleteItem}
          />
        ))}
      </div>

      <button className="bg-yellow-400 p-3 mt-10">
        <p>Proceed to checkout</p>
        <p>Rs{totalPrice}</p>
      </button>
    </div>
  );
}

export default Cart;
