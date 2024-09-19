import { Link, NavLink, Outlet, useParams, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef, Suspense } from 'react'
import { getMovieById } from '../../movie-api'  
import css from './MovieDetailsPage.module.css'
import Loader from '../../components/Loader/Loader';


export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  
  const imgBaseUrl = "https://image.tmdb.org/t/p/w200";
  const backLinkRef = useRef(location.state ?? "/movies");

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
    <div className={css.container}>
      <Link className={css.link} to={backLinkRef.current}> Go to back</Link>
      {error && <p>Somthing go wrong. Please try again</p>}
       
      <div className={css.wrap}>
        {poster_path && <img src={imgBaseUrl + poster_path} alt={title} />}
        <div className={css.wrapMovie}>
          <div className={css.wrapTitle}>
          <h2 className={css.title}>{title}</h2>
            <p className={css.paragrh}>Vote avarage {vote_average}</p>
          </div>
          <div className={css.wrapOverview}>
          <h3 className={css.subTitle}>Overview</h3>
            <p className={css.paragrh}>{overview}</p>
          </div>
          <div className={css.wrapGenres}>
          <h3 className={css.subTitle}>Genres</h3>
            <p className={css.paragrh}>{genres.map((genre) => `${genre.name}`)}</p>
            </div>
        </div>
        </div>
        
        <ul className={css.list}>
          <li><NavLink className={css.link} to={"cast"}>Cast</NavLink></li>
          <li><NavLink className={css.link} to={"reviews"}>Reviews</NavLink></li>
        </ul>
      
      
      <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
    </div>
  )
}