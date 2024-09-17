
import { useEffect, useState } from "react"
import { getMovies } from "../movie-api";
import MovieList from "../components/MovieList/MovieList";
import Loader from '../components/Loader/Loader'

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMovies();
      setMovies(data);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false);
      }
      
    }
    fetchData();
  }, [])
  return (
    <div>
      <h1>Trending today</h1>
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader/>}
      {error && <p>Somthing go wrong. Please try again</p>}
    </div>
  )
}