import { useState } from "react";

function useToggle() {
    const [on, setOn] = useState(true)

    function toggle() {
        setOn((prev) => !prev) // true -> false, false -> true
    }

    // return a
    // return b

    // {a, b, c}, [a, b, c]

    return [on, toggle]
}

export default useToggle