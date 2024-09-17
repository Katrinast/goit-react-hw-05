import { Link, NavLink, Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovieById } from '../movie-api'  


export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [error, setError] = useState(false);
  
  const imgBaseUrl = "https://image.tmdb.org/t/p/w200";

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(movieId);
        setMovieDetail(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchMovie();
  }, [movieId])

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  
  const { poster_path, title, overview, genres, vote_average } = movieDetail;

  return (
    <div>
      <Link to={'/'}>back</Link>
      {error && <p>Somthing go wrong. Please try again</p>}
      <div>
        {poster_path && <img src={imgBaseUrl + poster_path} alt={title} />}
        <div>
          <h2>{title}</h2>
          <p>Vote avarage {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => `${genre.name}`)}</p>
        </div>
      </div>
      <div>
        <ul>
          <li><NavLink to={"cast"}>Cast</NavLink></li>
          <li><NavLink to={"reviews"}>Reviews</NavLink></li>
        </ul>
      </div>
      <Outlet/>
    </div>
  )
}