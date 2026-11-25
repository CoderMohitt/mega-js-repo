import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);





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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
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
