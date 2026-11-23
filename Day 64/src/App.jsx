import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  console.log(cart)

  function addToCart(product) {

    setCart((prev) => {
      const existing = cart.find((item) => item.id === product.id)

      console.log(existing)

      if(existing === true) {
        return prev.map(item => (
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        ))
      }

      return [...prev, {...product, quantity: 1}]
    })
  }

  const totalItems = () => {
    let total = 0;
    cart.map((c) => total++);
    return total;
  };

  return (
    <>
      <Navbar cartItems={totalItems()} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
