import { useEffect, useState } from "react";

function useFetch() {
    const [data, setData] = useState([])

    async function getData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()

        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return data
}

export default useFetch