import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

export default function MovieList({ movies }) {

  const location = useLocation();
    const imgDefaultURL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li className={css.listItem} key={movie.id}>
          <img className={css.listImg} src={imgDefaultURL + movie.poster_path} alt={movie.original_title} />
          <NavLink className={css.link} to={`/movies/${movie.id}`} state={location}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}