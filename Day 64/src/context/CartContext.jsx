import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    console.log(product);
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id); // prev.find

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const totalItems = () => {
    let total = 0;
    let totalPrice = 0;

    console.log(cart);

    cart.map((c) => {
      totalPrice = totalPrice + c.price * c.quantity;
      total++;
    });

    return { total, totalPrice };
  };

  return <CartContext value={{ cart, addToCart, totalItems }}>{children}</CartContext>;
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
