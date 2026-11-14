import { useEffect, useRef, useState } from "react";
import New from "./New";

function App() {
  // const inputRef = useRef(null);

  // console.log(inputRef.current); // load hote hi

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  // function focus() {
  //   console.log(inputRef.current); // function call
  //   inputRef.current.focus();
  // }

  return (
    <>
      {/* <input ref={inputRef} type="text" />
      <button onClick={focus}>Focus</button> */}

      {/* <Demo /> */}
      {/* <Value />
       */}
       {/* <Stale /> */}
       <New />
    </>
  );
}







function Demo() {
  const contactRef = useRef(null)

  function scrollToContact() {
    contactRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div>
      <button onClick={scrollToContact}>Go to Contact</button>
      <div style={{ height: "150vh", backgroundColor: "orange" }}>Long content...</div>
      <section ref={contactRef}>Contact section</section>
    </div>
  );
}



function Value() {
  let normalVar = 0
  const [count, setCount] = useState(0)
  const countRef = useRef(0)


  return <>

  <button onClick={() => {
    normalVar++
    console.log("normal", normalVar)
  }}>normal {normalVar}</button>


  <button onClick={() => setCount(count + 1)}>state {count}</button>


  <button onClick={() => {
    countRef.current++
    console.log("ref", countRef.current)
  }}>ref {countRef.current}</button>
  </>
}



function Stale() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count; // 1 2  // runs AFTER render, so during render it still holds the old value
  }, [count]);


  return <p>
      Now: {count}, Before: {prevCount.current}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </p>
}

export default App;
