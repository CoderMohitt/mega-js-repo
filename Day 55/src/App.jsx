import { useEffect, useState } from "react";
import User from "./User";

function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let val = localStorage.getItem("count") || 0;
    setCount(val);
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>hii</h1>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
    </div>
  );
}

function Clock() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      console.log("tick"); // keeps printing after unmount = the leak
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id); // cleanup
    };
  }, []);

  return <p>{seconds}</p>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Unmount" : "Mount"} Clock
      </button>
      {show && <Clock />}
    </>
  );
}
export default App;
