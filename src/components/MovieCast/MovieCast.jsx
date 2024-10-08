import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../movie-api";

import css from './MovieCast.module.css'

export default function MovieCast() {
  const { movieId } = useParams(); 
  const [movieCredits, setMovieCredits] = useState([]); 
  const [error, setError] = useState(false);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const data = await getMovieCredits(movieId);
        setMovieCredits(data.cast);
      } catch (error) {
        setError(error); 
      }
    }
    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      <ul className={css.list}>
        {movieCredits.map(({ id, profile_path, name }) => (
          <li className={css.listItem} key={id}>
            {profile_path && <img src={imgBaseUrl + profile_path} alt={name} />}
            <p className={css.paragrah}>{name}</p>
          </li>
        ))}
      </ul>
      {error && <p>Something went wrong. Please try again.</p>}
    </>
  );
}