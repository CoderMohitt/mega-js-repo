import { useEffect, useState } from "react"

function useDebounce(value) {
    const [debounced, setDebounced] = useState(value)

    useEffect(() => {
        const id = setTimeout(() => setDebounced(value), 500)

        return () => clearTimeout(id)    
    }, [value])

    return debounced
}

export default useDebounce