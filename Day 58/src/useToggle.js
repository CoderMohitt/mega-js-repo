// hooks/useToggle.js
import { useState } from "react";

function useToggle(initial = false) {
  const [on, setOn] = useState(initial);

  function toggle() {
    setOn((prev) => !prev);
  }

  return [on, toggle];
}

export default useToggle;