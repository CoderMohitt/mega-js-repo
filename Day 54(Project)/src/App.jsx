import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import items from "./data/data";

function App() {
  const [fItems, setFitems] = useState(items);
  const [cart, setCart] = useState([]);

  console.log("main status")
  console.log(cart)

  function findItems(category) {
    if (category === "all") {
      setFitems(items);
      return;
    }

    setFitems(items.filter((item) => item.category === category));
  }

  return (
    <>
      <Navbar />

      <div className="flex gap-5 px-10 mt-10">
        <div
          className="border rounded-xl cursor-pointer p-1"
          onClick={() => findItems("clothing")}
        >
          Clothing
        </div>
        <div
          className="border rounded-xl cursor-pointer p-1"
          onClick={() => findItems("devices")}
        >
          Devices
        </div>
        <div
          className="border rounded-xl cursor-pointer p-1 px-5"
          onClick={() => findItems("all")}
        >
          All
        </div>
      </div>

      <div className="flex flex-wrap justify-around mt-10">
        {fItems.map((item) => (
          <Card
            id={item.id}
            title={item.title}
            price={item.price}
            url={item.url}
            stock={item.stock}
            category={item.category}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

      <h1 className="mt-10 font-bold text-lg">Cart items</h1>

      {cart.length > 0 && (
        <div className="flex justify-around flex-wrap">
          {cart.map((item) => (
            <Card
              id={item.id}
              title={item.title}
              price={item.price}
              url={item.url}
              stock={item.stock}
              category={item.category}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
