import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import useFetch from "./hooks/useFetch"
import MovieCard from "./components/MovieCard"

function App() {
  const key = import.meta.env.VITE_API_KEY

  const [movieName, setMovieName] = useState("")

  const url = `https://www.omdbapi.com/?t=${movieName ? movieName : "batman"}&apikey=${key}`

  const {data} = useFetch(url)
  console.log(data)

  return (
    <>
      <Navbar />

      <input type="text" placeholder="enter movie name" className="border" 
        onChange={(e) => setMovieName(e.target.value)}
      />

      <div>
        {data && <MovieCard title={data.Title} poster={data.Poster} year={data.Year} />}
      </div>
    </>
  )
}

export default App
