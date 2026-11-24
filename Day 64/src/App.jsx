import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id); // prev.find

      if (existing) {
        // existing === true wnt work as find() returns undefined when nothing found
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

  function incQty(id) {
    setCart((prev) => {
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }

  function deleteItem(id) {
    setCart((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  function decQty(id) {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }

  return (
    <>
      <Navbar cartItems={totalItems().total} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              totalPrice={totalItems().totalPrice}
              incQty={incQty}
              decQty={decQty}
              deleteItem={deleteItem}
            />
          }
          />
      </Routes>
    </>
  );
}

export default App;
