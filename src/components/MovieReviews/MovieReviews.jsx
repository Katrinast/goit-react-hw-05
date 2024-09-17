import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movie-api";

export default function MovieReviews() {
const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMovieReview() {
      try {
        const data = await getMovieReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchMovieReview();
  }, [movieId])

  
  return (
    <>
      <ul>
        {movieReviews.length > 0 && movieReviews.map(({author, content}, index) => (
          <li key={index}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
      {error && <p>Somthing go wrong. Please try again</p>}
    </>
  )
}