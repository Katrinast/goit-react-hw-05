import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../movie-api";
import MovieList from '../components/MovieList/MovieList'
import SearchMovie from "../components/SearchMovie/SearchMovie";


export default function MoviesPage() {
  const [params] = useSearchParams();
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false);
   const query = params.get("query") ?? "";
  

  useEffect(() => {
    if (!query) return;
      async function fetchSearchMovie() {
        try {
          const data = await getSearchMovie(query);
          setMovies(data);
        } catch (error) {
          setError(error);
        }
      
      
    }

    fetchSearchMovie();

    
  }, [query]);

  
  return (
    <div>
    <SearchMovie/>
       {movies.length > 0 && <MovieList movies={movies} />}
      {error && <p>Somthing go wrong. Please try again</p>}
    </div>
  );
}