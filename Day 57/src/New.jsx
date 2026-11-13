import { useEffect, useRef, useState } from "react";

function New() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;   // runs AFTER render, so during render it still holds the old value
  }, [count]);


  return (
    <p>
      Now: {count}, Before: {prevCount.current}
      <button onClick={() => setCount(count + 1)}>+1</button>
    </p>


  );
}

export default New;
