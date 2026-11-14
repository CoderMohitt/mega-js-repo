import { useState } from "react";

function useCounter() {
    const [count, setCount] = useState(0)

    //increment
    function inc() {
        setCount(count + 1)
    }

    //decrement
    function dec() {
        setCount(count - 1)
    }

    return {count, inc, dec}
}

export default useCounter