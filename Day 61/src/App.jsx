import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import useFetch from "./hooks/useFetch";
import MovieCard from "./components/MovieCard";
import useDebounce from "./hooks/useDebounce";

function App() {
  const key = import.meta.env.VITE_API_KEY;

  const [movieName, setMovieName] = useState("");

  const debouncedName = useDebounce(movieName)
  
  const url = `https://www.omdbapi.com/?apikey=${key}&s=${debouncedName ? debouncedName : "batman"}`;

  const { data } = useFetch(url);

  console.log(data)

  return (
    <>
      <Navbar />

      <input
        type="text"
        plac
        eholder="enter movie name"
        className="border"
        onChange={(e) => setMovieName(e.target.value)}
      />

      <div className="flex flex-wrap gap-5">
        {data && (
          data.Search.map((m) => (
            <MovieCard title={m.Title} poster={m.Poster} year={m.Year} />
          ))
        )}
      </div>
    </>
  );
}

export default App;
